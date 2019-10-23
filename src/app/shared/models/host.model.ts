import { IReview } from './review.model';
import { IUser } from './user.model';

export type HighlightType =
  | 'loyal_customers'
  | 'room_type'
  | 'supervision'
  | 'only_one_guest';

export interface IHighlight {
  name: HighlightType;
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

export class Host {
  availabilityConfirmed: boolean;
  choppedDesc: string;
  highlights: IHighlight[];
  favorite: boolean;
  id: number;
  isSuperhero: boolean;
  lastReview: { body: string; clientImageUrl: string; clientName: string };
  locale: ICurrencyLocale;
  rating: number;
  regionAddress: string;
  reviewsCount: number;
  title: string;
  user: { firstName: string; imageUrl: string };

  constructor(raw: IHost) {
    this.availabilityConfirmed = raw.availability_confirmed;
    this.choppedDesc = raw.chopped_desc;
    this.highlights = raw.highlights;
    this.favorite = raw.favorite;
    this.id = raw.id;
    this.isSuperhero = raw.is_superhero;
    this.lastReview = {
      body: raw.last_review.body,
      clientImageUrl: raw.last_review.client_image_url.split('?')[0],
      clientName: raw.last_review.client_name,
    };
    this.locale = raw.locale;
    this.rating = raw.rating;
    this.regionAddress = raw.region_address;
    this.reviewsCount = raw.reviews_count;
    this.title = raw.title;
    this.user = {
      firstName: raw.user.first_name,
      imageUrl: raw.user.image_url.split('?')[0],
    };
  }
}
