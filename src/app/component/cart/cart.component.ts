import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] ;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productChanged.subscribe((products: Product[]) =>{
      console.log(products) ;
      this.products = products ;
    })
    this.products = this.cartService.getProducts() ;
  }

  onDelete(index: number){
    this.cartService.deleteProduct(index) ;
  }

}
