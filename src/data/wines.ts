export const featuredWines = [
  {
    id: '1',
    name: 'Napa Valley Cabernet Sauvignon',
    vintage: '2019',
    region: 'Napa Valley',
    description: 'Bold and complex with notes of blackberry, cassis, and vanilla.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'red',
    varietal: 'Cabernet Sauvignon',
    alcohol: 14.5,
    volume: 750,
  },
  {
    id: '2',
    name: 'Sonoma Coast Chardonnay',
    vintage: '2020',
    region: 'Sonoma Coast',
    description: 'Elegant and balanced with hints of apple, pear, and oak.',
    price: 65.99,
    imageUrl: 'https://images.unsplash.com/photo-1566754436893-98224ee05be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'white',
    varietal: 'Chardonnay',
    alcohol: 13.8,
    volume: 750,
  },
  {
    id: '3',
    name: 'Russian River Pinot Noir',
    vintage: '2018',
    region: 'Russian River Valley',
    description: 'Silky and aromatic with notes of cherry, raspberry, and spice.',
    price: 75.99,
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'red',
    varietal: 'Pinot Noir',
    alcohol: 14.2,
    volume: 750,
  },
] as const;