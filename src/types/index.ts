export interface Wine {
  id: string;
  name: string;
  vintage: string;
  region: string;
  description: string;
  price: number;
  imageUrl: string;
  type: 'red' | 'white' | 'sparkling' | 'rose';
  varietal: string;
  alcohol: number;
  volume: number;
}

export interface TradeRoute {
  id: string;
  origin: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  destination: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  shippingTime: string;
  transportMethod: string;
}