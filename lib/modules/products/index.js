var Promise = require('bluebird');

module.exports = {
  extend: 'apostrophe-pieces',
  name: 'product',
  label: 'Product',
  alias: 'products',
  addFields: [
    {
      name: 'price',
      type: 'float',
      label: 'Price',
      help: 'In dollars. You may use a decimal point. Do not use a $.',
      required: true
    },
    {
      name: '_specialists',
      type: 'joinByArray',
      withType: 'specialist',
      label: 'Specialists',
      help: 'The right people to ask about this product.'
    }
  ],

  construct: function(self, options) {

    // Let's use promises. We could add a "callback" argument instead
    // if we wanted to.

    self.addTask('list', 'Lists public, published products and their URLs', (apos, argv) => {
     
      // We need a `req` object, but we're in a task. So
      // ask the tasks module for an "anon" req that can
      // do only what the public can do. We could also call
      // `apos.tasks.getReq()`, which lets us do anything (admin).

      const req = apos.tasks.getAnonReq();

      // Let's use apostrophe cursors, so that we only get public,
      // published products, and the _url property is dynamically set.

      return self.find(req).toArray().then(products => {
        products.forEach(product => {
          console.log(product.title + ': ' + product._url);
        });
      });

      // We don't need to "catch" here because the task runner will
      // catch and display any error that rejects the promise

    });

    // This time we are using the migrations API, which only supports
    // callbacks (so far), so we'll accept a callback to our task function.

    self.addTask('discount', 'Lowers prices by the specified percentage.', (apos, argv, callback) => {

      // Let's use the migrations and mongodb APIs to do this very quickly.
      // Note this will impact every product, even those in the trash, and
      // ignore permissions (unpublished products, etc)
      return apos.migrations.eachDoc({ type: 'product' }, (product, callback) => {
        if (!product.price) {
          // Don't overflow the stack - let node invoke the callback
          // after this function returns
          return setImmediate(callback);
        }
        if (!parseFloat(argv._[1])) {
          // Use a plain string as the error to avoid a stack trace since
          // this is just a user error.
          return callback('You must specify a discount percentage, such as 10. Do not use a % sign.');
        }
        product.price = product.price - (product.price * argv._[1] / 100);
        return apos.docs.db.update({
          _id: product._id
        }, {
          $set: {
            price: product.price
          }
        }, callback);
        // Don't forget to pass the callback after the iterator function!
        // Otherwise it'll do the work, then just hang
      }, callback);
    });

    // Use the "super pattern" to extend the "generate" method, which
    // creates new products when the `products:generate` command line task
    // is run
    const superGenerate = self.generate;
    self.generate = function(i) {
      const product = superGenerate(i);
      product.price = i * 0.5;
      return product;
    };

    self.beforeInsert = function(req, piece, options, callback) {
      //
      // If no specialists were selected for a new product,
      // assign one at random.
      //
      // "Where did specialistsIds come from?" If a joinByArray
      // field is named _specialists, then the ids of the
      // specialists will automatically be kept in specialistIds.
      // This is what makes the join work. You can make this explicit
      // if you wish by setting the `idsField` property of the join.

      if (piece.specialistsIds && piece.specialistsIds.length) {
        return callback(null);
      }
      
      // Even though we have a callback, we can still use promises.
      // We just have to invoke the callback at the end of the chain.
      
      return Promise.try(function() {
        // First count them, then get just one randomly.
        // If there are thousands of specialists this will
        // greatly improve performance, compared to getting them all
        return self.apos.specialists.find(req).toCount();
      }).then(function(count) {
        const index = Math.floor(Math.random() * count);
        return self.apos.specialists.find(req).skip(index).limit(1).toObject();
      }).then(function(winner) {
        if (winner) {
          piece.specialistsIds = [ winner._id ];
        }
        // Callback in the success case: pass null
        return callback(null);
        // Callback in the error case: pass it to catch()
      }).catch(callback);
    };

  }
};

