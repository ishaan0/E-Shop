import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import * as fromApp from '../../app.reducer'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CartActions from "../cart/store/cart.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Observable<{products: Product[]}> ;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.products = this.store.select('cartProduct') ;
  }

  onDelete(index: number){
    this.store.dispatch(new CartActions.DeleteProduct(index)) ;
  }

}
