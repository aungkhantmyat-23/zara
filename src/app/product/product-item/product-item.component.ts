import { Product } from './../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem:Product;

  constructor(private router:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  viewDetail(productItem){
    this.router.navigate(['/product-detail-page'],{state:productItem})
  }
}
