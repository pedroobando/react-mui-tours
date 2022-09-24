export interface ITour {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
}

export interface ITours {
  id: number;
  name: string;
  tours: ITour[];
}
