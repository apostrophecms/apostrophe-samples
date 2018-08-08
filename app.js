var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apostrophe-samples',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': {
      viewsFolderFallback: path.join(__dirname, 'views') 
      // See also lib/modules/apostrophe-templates/index.js
    },
  
    // see lib/modules/one-column-widgets/index.js, et cetera 
    // Use index.js files for each module to keep app.js readable

    'one-column-widgets': {},
    'two-column-widgets': {},
    'three-column-widgets': {},
    'products': {},
    'products-pages': {},
    // People who specialize in various products
    'specialists': {},
    'specialists-pages': {},
    'theme': {},
    'test-widgets': {},
    'apostrophe-global': {
      addFields: [
        {
          name: 'dealerRecommendedConfig',
          type: 'checkboxes',
          label: 'Recommended Dealer config',
          choices: [
            {
              label: 'Is certified',
              value: 'isCertified'
            },
            {
              label: 'Is prefered',
              value: 'isPreferredDealer'
            },
            {
              label: 'Best chance in stock',
              value: 'isBestChanceInStock'
            },
            {
              label: 'Has a network',
              value: 'networkName'
            }
          ]
        }  
      ]
    }
  }
});
