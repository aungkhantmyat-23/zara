import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Printed T-shirt',
      'T-shirt',
      'LOOSE-FITTING T-SHIRT WITH A ROUND NECKLINE AND SHORT SLEEVES. FRONT PRINT WITH THE SMILEY',
      'Men',
      25000,
      ['S','M','L','XL'],
      'assets/images/t-shirt/t-shirt1.1.jfif',
      'assets/images/t-shirt/t-shirt1.jfif',
      'assets/images/t-shirt/t-shirt1O.jfif'
    ),
    new Product(
      2,
      'Printed T-shirt',
      'T-shirt',
      'LOOSE-FITTING T-SHIRT WITH A ROUND NECKLINE AND SHORT SLEEVES. FRONT PRINT WITH THE SMILEY',
      'Men',
      25000,
      ['S','M','L','XL'],
      'assets/images/t-shirt/t-shirt2.1.jfif',
      'assets/images/t-shirt/t-shirt2.jfif',
      'assets/images/t-shirt/t-shirt2O.jfif'
    ),
    new Product(
      3,
      'Printed T-shirt',
      'T-shirt',
      'LOOSE-FITTING T-SHIRT WITH A ROUND NECKLINE AND SHORT SLEEVES. FRONT PRINT WITH THE SMILEY',
      'Men',
      25000,
      ['S','M','L','XL'],
      'assets/images/t-shirt/t-shirt3.1.jfif',
      'assets/images/t-shirt/t-shirt3.jfif',
      'assets/images/t-shirt/t-shirt3O.jfif'
    ),
    new Product(
      4,
      'Printed T-shirt',
      'T-shirt',
      'LOOSE-FITTING T-SHIRT WITH A ROUND NECKLINE AND SHORT SLEEVES. FRONT PRINT WITH THE SMILEY',
      'Men',
      25000,
      ['S','M','L','XL'],
      'assets/images/t-shirt/t-shirt4.1.jfif',
      'assets/images/t-shirt/t-shirt4.jfif',
      'assets/images/t-shirt/t-shirt4O.jfif'
    ),
    new Product(
      5,
      'Printed T-shirt',
      'T-shirt',
      'LOOSE-FITTING T-SHIRT WITH A ROUND NECKLINE AND SHORT SLEEVES. FRONT PRINT WITH THE SMILEY',
      'Men',
      25000,
      ['S','M','L','XL'],
      'assets/images/t-shirt/t-shirt5.1.jfif',
      'assets/images/t-shirt/t-shirt5.jfif',
      'assets/images/t-shirt/t-shirt5O.jfif'
    ),
    new Product(
      6,
      'Printed Sweatshirt',
      'Sweatshirt',
      'LOOSE-FITTING SWEATSHIRT WITH A ROUND NECKLINE, LONG SLEEVES AND RIBBED TRIMS.',
      'Women',
      35000,
      ['S','M','L','XL'],
      'assets/images/sweatshirt/sweatshirt3F.1.jfif',
      'assets/images/sweatshirt/sweatshirt3F.jfif',
      'assets/images/sweatshirt/sweatshirt3O.jfif',

    ),
    new Product(
      7,
      'Sweatshirt',
      'Sweatshirt',
      'LOOSE-FITTING SWEATSHIRT WITH A ROUND NECKLINE, LONG SLEEVES AND RIBBED TRIMS.',
      'Men',
      35000,
      ['S','M','L','XL'],
      'assets/images/sweatshirt/hmgoepprod (3).1.jfif',
      'assets/images/sweatshirt/hmgoepprod (3).jfif',
      'assets/images/sweatshirt/hmgoepprod2.jfif'
    ),
    new Product(
      8,
      'Sweatshirt',
      'Sweatshirt',
      'LOOSE-FITTING SWEATSHIRT WITH A ROUND NECKLINE, LONG SLEEVES, PRINT ON THE FRONT AND RIBBED TRIMS.',
      'Women',
      35000,
      ['S','M','L','XL'],
      'assets/images/sweatshirt/hmgoepprod (5).1.jfif',
      'assets/images/sweatshirt/hmgoepprod (5).jfif',
      'assets/images/sweatshirt/hmgoepprod3.jfif'
    ),
  ];
  constructor() {
    
  }

  getProducts(): Product[] {
    return this.products;
  }

  findByName(name:string){
    return this.products.filter(p => 
        p.name.toUpperCase().includes(
          name.toUpperCase()
        )
      )
  }
}
