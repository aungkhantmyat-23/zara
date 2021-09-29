import { Product } from './product';

export class CartItems{
    id:number;
    product:Product;
    quantity:number = 1;
    size:string;
}