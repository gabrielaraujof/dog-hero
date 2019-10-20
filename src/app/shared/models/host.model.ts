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

export class Host {

  // availabilityConfirmed: boolean;
  // choppedDesc: string;
  // highlights: IHighlight[];
  // favorite: boolean;
  // id: number;
  // isSuperhero: boolean;
  // lastReview: IReview;
  // locale: ICurrencyLocale;
  // rating: number;
  // regionAddress: string;
  // reviewsCount: number;
  // title: string;
  // user: IUser;

  // constructor(raw: IHost) {
  //   this.availabilityConfirmed = raw.availability_confirmed;
  //   this.choppedDesc = raw.chopped_desc;
  //   this.highlights = raw.highlights;
  //   this.favorite = raw.favorite;
  //   this.id = raw.id;
  //   this.isSuperhero = raw.is_superhero;
  //   const { body, client_name, client_image_url } = raw.last_review;
  //   const [imageUrl = ''] = client_image_url.split('?');
  //   this.lastReview = {
  //     body, name: client_name, imageUrl
  //   }
  //   this.locale = raw.locale;
  //   this.rating = raw.rating;
  //   this.region_address = raw.region_address;
  //   this.reviews_count = raw.reviews_count;
  //   this.title = raw.title;
  //   this.user = raw.user;

  // }
}
