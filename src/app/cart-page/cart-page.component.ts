import { ShoppingCart } from './../models/shoppingcart';
import { Router } from '@angular/router';
import { CartItems } from './../models/cartItems';
import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartItems: CartItems[]

  constructor(private router:Router,
    public shoppingCart:ShoppingCart) { }

  ngOnInit(): void {
    this.cartItems = this.shoppingCart.cartItems
  }
  
  
}
