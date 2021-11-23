import { environment } from './../../environments/environment';

export const baseUrl = environment.production
  ? 'http://localhost:3000'
  : 'http://localhost:3000';
export const productsUrl = baseUrl + '/products';
