import { ProductDetailPageComponent } from './product/product-detail-page/product-detail-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListPageComponent } from './product/product-list-page/product-list-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'product-list-page',component:ProductListPageComponent},
  {path:'product-detail-page',component:ProductDetailPageComponent},
  {path:'cart-page',component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
