module.exports = {        
  extend: 'apostrophe-widgets',
  label: 'Columns',
  contextualOnly: true,
  addFields: [
    {
      name: 'columns',
      label: 'Columns',
      type: 'area',
      options: {
        widgets: {
          'column': {}
        }
      }
    }
  ]
};