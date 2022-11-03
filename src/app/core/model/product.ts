import { ProductCategory } from "./product-category";

export class Product{
    name: string = '';
    description: string= '';
    price: number= 0;
    image: string= '';
    category: ProductCategory;

    constructor(name: string, description: string, price: number, image: string, category: ProductCategory){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
    }
}