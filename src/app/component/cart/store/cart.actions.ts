import { Action } from "@ngrx/store";
import { Product } from "../../products/product.model";

export const ADD_CART_PRODUCT = 'ADD_CART_PRODUCT' ;
export const DELETE_PRODUCT = 'DELETE_PRODUCT' ;

export class AddCartProduct implements Action{
  readonly type = ADD_CART_PRODUCT ;
  constructor(public payload: Product){}
}

export class DeleteProduct implements Action{
  readonly type = DELETE_PRODUCT ;
  constructor(public payload: number){}
}


export type CartActions = AddCartProduct | DeleteProduct ;
