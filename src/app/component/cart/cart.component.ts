import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
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
  constructor(private cartService: CartService,private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.products = this.store.select('cartProduct') ;
    // this.cartService.productChanged.subscribe((products: Product[]) =>{
    //   this.products = products ;
    // })
    // this.products = this.cartService.getProducts() ;
  }

  onDelete(index: number){
    // this.cartService.deleteProduct(index) ;
    this.store.dispatch(new CartActions.DeleteProduct(index)) ;
  }

}
