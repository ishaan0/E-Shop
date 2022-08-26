import { Injectable } from '@angular/core';
import { Product } from '../component/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: 'tesing title',
      price: 20.34,
      description: 'This is testing description',
      imagePath:
        'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M=',
    }
  ];

  constructor() { }

  getProducts(){
    return this.products.slice() ;
  }

  addProduct(newProduct: Product){
    this.products.push(newProduct) ;
  }

}