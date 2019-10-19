import { IReview } from './review.model';
import { IUser } from './user.model';

export interface IHighlight {
  name: 'loyal_customers' | 'room_type' | 'supervision';
  value: string | number | null;
}

export interface ICurrencyLocale {
  country: string;
  price: number;
  currency: string;
}

export interface IHost {
  availability_confirmed: boolean;
  chopped_desc: string;
  highlights: IHighlight[];
  favorite: boolean;
  id: number;
  is_superhero: boolean;
  last_review: IReview;
  locale: ICurrencyLocale;
  rating: number;
  region_address: string;
  reviews_count: number;
  title: string;
  user: IUser;
}
