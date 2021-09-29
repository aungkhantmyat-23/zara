import { ProductFilter } from './product/product-list-page/product-filter.pipe';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductDetailPageComponent } from './product/product-detail-page/product-detail-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { ProductListPageComponent } from './product/product-list-page/product-list-page.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
    HomeCarouselComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    ProductSliderComponent,
    ProductItemComponent,
    CartPageComponent,
    ProductFilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
