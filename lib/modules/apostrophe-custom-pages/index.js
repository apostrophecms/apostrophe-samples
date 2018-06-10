module.exports = {
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'thumbnail',
        type: 'singleton',
        widgetType: 'apostrophe-images',
        options: {
          aspectRatio: [ 1, 1 ],
          limit: 1
        }
      } 
    ].concat(options.addFields || []);
  }
};

