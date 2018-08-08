module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Test',
  addFields: [
    {
      name: 'learnMore',
      type: 'select',
      label: 'Learn more',
      choices: [
        {
          label: 'Test 1',
          value: 'test1'
        },
        {
          label: 'Test 2',
          value: 'test2'
        }
      ],
      def: 'test2'
    },
    {
      name: 'text',
      type: 'string',
      def: 'def'
    }
  ]
};

