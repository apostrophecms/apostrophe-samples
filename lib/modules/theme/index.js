module.exports = {
  construct: function(self, options) {
    // loads from public/js/site.js of this module
    self.pushAsset('script', 'site');
    // loads from public/css/site.less of this module
    self.pushAsset('stylesheet', 'site');
  }
};
