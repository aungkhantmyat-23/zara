export class Product{
    id:number;
    name:string;
    category:string;
    description:string;
    gender:string;
    price:number;
    sizes:string[];
    imageUrl:string;
    imageUrl2:string;
    imageUrl3:string;

    constructor(id,name,category,description,gender,price=0,sizes,imageUrl,imageUrl2,imageUrl3){
        this.id=id;
        this.name=name;
        this.category=category;
        this.description=description;
        this.gender=gender;
        this.price=price;
        this.sizes = sizes;
        this.imageUrl=imageUrl;
        this.imageUrl2=imageUrl2;
        this.imageUrl3=imageUrl3;
    }
}