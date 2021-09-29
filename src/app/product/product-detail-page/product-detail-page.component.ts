import { ShoppingCart } from './../../models/shoppingcart';
import { Product } from './../../models/product';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailPageComponent implements OnInit {
  productItem: Product;
  selectedSize: string;
  constructor(private route: ActivatedRoute,
     private router: Router, public shoppingCart:ShoppingCart) {}

  ngOnInit(): void {
    this.productItem = history.state;
  }
  readMore() {
    const dots = document.getElementById('dots-c1');
    const moreText = document.getElementById('more-c1');
    const btnText = document.getElementById('moreBtn-c1');
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'View more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'View less';
      moreText.style.display = 'inline';
    }
  }
  sOne() {
    document.getElementById('s-one').scrollIntoView();
  }
  sTwo() {
    document.getElementById('s-two').scrollIntoView();
  }
  sThree() {
    document.getElementById('s-three').scrollIntoView();
  }
  addToCart(productItem:Product){
    this.shoppingCart.addToCart(productItem, this.selectedSize)
  }
}
