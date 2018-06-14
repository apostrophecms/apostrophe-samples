module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Two Column',
  addFields: [
    {
      contextual: true,
      name: 'one',
      type: 'area'
    },
    {
      contextual: true,
      name: 'two',
      type: 'area'
    }
  ]
};