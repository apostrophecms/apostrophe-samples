// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      // The products-pages module powers
      // these pages that display
      // paginated products
      name: 'products-page',
      label: 'Products'
    },
    {
      name: 'specialists-page',
      label: 'Specialists'
    }
  ],
  park: [
    {
      // A "parked" (permanent) page:
      //
      // Always have at least one products page,
      // so the _url property of each product
      // can be populated
      type: 'products-page',
      slug: '/products',
      title: 'Products'
    },
    {
      type: 'specialists-page',
      slug: '/specialists',
      title: 'Specialists'
    },
  ],
  filters: {
    ancestors: {
      children: {
        areas: [ 'thumbnail' ]
      }
    }
  }
};
