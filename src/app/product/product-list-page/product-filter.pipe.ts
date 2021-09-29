import { Product } from '../../models/product';

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'productFilter'
})
export class ProductFilter implements PipeTransform{
    transform(value:Product[],name:string,category:string,gender:string){
        if(!name && !category && !gender) return value;

        let pred = product => gender
                              ? name
                              ? product.gender == gender && product.name.toLowerCase().includes(name.toLowerCase())
                              : product.gender == gender 
                              : name ? product.name.toLowerCase().includes(name.toLowerCase()) : true;
    
            return value?.filter(pred)                  
    }
}