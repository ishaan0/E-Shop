import { Product } from "../../products/product.model";
import * as CartActions from "../store/cart.actions";


export interface State{
  products: Product[] ;
}

const initialState: State = {
  products: []
}

export function cartReducer(state = initialState, action: CartActions.CartActions){
  switch(action.type){
    case CartActions.ADD_CART_PRODUCT:
      console.log("came from cart reducer");
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case CartActions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product, index) =>{
          return index !== action.payload ;
        })
      }
    default:
      return state ;
  }
}
