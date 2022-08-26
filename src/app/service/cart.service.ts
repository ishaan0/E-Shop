import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../component/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productChanged = new Subject<Product[]>() ;

  products: Product[] = [{
    title: 'tesing title',
    price: 20.34,
    description: 'This is testing description',
    imagePath:
      'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M=',
  },
  {
    title: 'tesing title',
    price: 20.34,
    description: 'This is testing description',
    imagePath:
      'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M=',
  }];

  constructor() { }

  addProduct(product: Product){
    this.products.push(product) ;
    this.productChanged.next(this.products.slice()) ;
  }

  getProducts(){
    return this.products.slice() ;
  }

  deleteProduct(index: number){
    this.products.splice(index, 1) ;
    this.productChanged.next(this.products.slice()) ;
  }

}
