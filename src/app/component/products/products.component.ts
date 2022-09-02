import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { Product } from './product.model';
import * as fromApp from '../../app.reducer'
import * as CartActions from "../cart/store/cart.actions";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // products: Product[];
  products: Observable<{products: Product[]}> ;
  constructor(
    private cartService: CartService,
    // private store: Store<{product: {products: Product[]}}>
    private store: Store<fromApp.AppState>
  ) {}


  ngOnInit(): void {
    this.products = this.store.select('product') ;
  }

  onAddToCart(product: Product) {
    // this.cartService.addProduct(this.products[index]);
    // (this.products | async).products
    this.store.dispatch(new CartActions.AddCartProduct(product)) ;
  }
}
