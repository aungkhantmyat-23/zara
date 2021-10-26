import { Product } from './product';
import { CartItems } from './cartItems';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCart {
  private _cartItems: CartItems[] = [];

  get cartItems() {
    return this._cartItems;
  }

  addToCart(product: Product, selectedSize: string) {
    let cartItem = this._cartItems.find(
      (cartItems) => cartItems.product.id == product.id
    );
    if (cartItem && cartItem.size === selectedSize) cartItem.quantity += 1;
    else {
      let cartItem = new CartItems();
      cartItem.product = product;
      cartItem.size = selectedSize;
      this._cartItems.push(cartItem);
    }
  }

  subFromCart(product: Product) {
    let cartItem = this._cartItems.find(
      (cartI) => cartI.product.id == product.id
    );
    if (cartItem) {
      cartItem.quantity -= 1;
      if (!cartItem.quantity) {
        this.removeCartItem(cartItem);
      }
    }
  }

  removeCartItem(cartItem: CartItems) {
    let index = this._cartItems.findIndex(
      cartI => cartI.product.id == cartI.product.id
    );
    this._cartItems.splice(index, 1);
  }

  get total() {
    return this._cartItems.reduce(
      (acc, cartI) =>
       acc + cartI.quantity * cartI.product.price,
      0
    );
  }

  clear() {
    this._cartItems = [];
  }

  get totalquantity() {
    return this._cartItems.reduce((acc, cartI) =>
     acc + cartI.quantity, 0);
  }
}
