module.exports = {
  extend: 'apostrophe-pieces',
  name: 'specialist',
  addFields: [
    {
      name: '_products',
      type: 'joinByArrayReverse',
      withType: 'product',
      reverseOf: '_specialists'
    }
  ]
};

