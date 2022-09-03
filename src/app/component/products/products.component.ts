import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import * as fromApp from '../../app.reducer'
import * as CartActions from "../cart/store/cart.actions";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Observable<{products: Product[]}> ;
  constructor(
    private store: Store<fromApp.AppState>
  ) {}


  ngOnInit(): void {
    this.products = this.store.select('product') ;
  }

  onAddToCart(product: Product) {
    this.store.dispatch(new CartActions.AddCartProduct(product)) ;
  }
}
