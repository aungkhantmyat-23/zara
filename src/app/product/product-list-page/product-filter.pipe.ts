import { Product } from '../../models/product';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilter implements PipeTransform {
  transform(value: Product[], name: string, gender: string, category: string) {
    let temp = value;
    if (name) {
      temp = temp.filter((product) =>
        product.name.toUpperCase().includes(name.toUpperCase())
      );
    }
    if (gender) {
      temp = temp.filter((product) => product.gender == gender);
    }
    if (category) {
      temp = temp.filter((product) => product.category == category);
    }
    return temp;
  }
}
