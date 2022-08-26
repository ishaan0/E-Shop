import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] ;
  constructor(private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts() ;
  }

  onAddToCart(index: number){
    this.cartService.addProduct(this.products[index]) ;
  }
}
