import { ActionReducerMap } from "@ngrx/store";

import * as fromProduct from "../app/component/products/store/product.reducer" ;
import * as fromCart from "../app/component/cart/store/cart.reducer" ;
import * as fromAuth from "../app/component/auth/store/auth.reducer" ;


export interface AppState{
  product: fromProduct.State ;
  cartProduct: fromCart.State ;
  auth: fromAuth.State ;
}


export const appReducer: ActionReducerMap<AppState> = {
  product: fromProduct.productReducer ,
  cartProduct: fromCart.cartReducer ,
  auth: fromAuth.authReducer
};
