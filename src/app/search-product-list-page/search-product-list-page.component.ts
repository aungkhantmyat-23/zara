import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product-list-page',
  templateUrl: './search-product-list-page.component.html',
  styleUrls: ['./search-product-list-page.component.css']
})
export class SearchProductListPageComponent implements OnInit {

  
  productName:string;
  genderName:string;
  categoryName:string;
  productList:Product[] = []
  products:Product[];
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

  // search(name:string){
  //   this.products = this.productService.findByName(name);
  // }
}
