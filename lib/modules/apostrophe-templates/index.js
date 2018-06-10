module.exports = {
  construct: function(self, options) {
    // Add a Nunjucks filter to display a number in
    // dollars-and-cents format when we write `product.price | cash`
    self.addFilter('cash', function(amount) {
      return '$' + parseFloat(amount).toFixed(2);
    });
  }
};

