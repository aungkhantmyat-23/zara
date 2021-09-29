import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../services/product.service';

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  productName:string;
  genderName:string;
  categoryName:string;
  productList:Product[] = []
  constructor(private productService:ProductService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.route.queryParams.subscribe(
      params =>{
        this.genderName = params['gender']
        this.productName = params['name']
        this.categoryName = params['category']
      }
    )
    function gridSm(){
      document.getElementById("gridCol").style.gridTemplateColumns="100px 100px 100px 100px 100px 100px 100px 100px"
    }
  }
  viewDetail(product){
    this.router.navigate(['/product-detail-page'],{state:product})
  }
}
