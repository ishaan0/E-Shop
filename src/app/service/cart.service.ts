import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../component/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productChanged = new Subject<Product[]>() ;

  products: Product[] = [];

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
