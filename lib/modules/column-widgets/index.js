module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Column',
  skipInitialModal: true,
  addFields: [
    {
      name: 'image',
      label: 'Image',
      type: 'singleton',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'foo',
      label: 'Foo',
      type: 'string'
    },
    {
      name: 'bar',
      label: 'Bar',
      type: 'select',
      choices: [
        { label: 'Baz', value: 'baz' },
        { label: 'Hello', value: 'hello' }
      ]
    }
  ]        
};