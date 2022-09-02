import { Product } from "../product.model";
import * as ProductActions from "./product.actions";

export interface State{
  products: Product[] ;
}


const initialState: State = {
  products: [
    new Product('tesing title', 'This is testing description', 20.34,'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M='),
    new Product('tesing title', 'This is testing description', 20.34,'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M='),
    new Product('tesing title', 'This is testing description', 20.34,'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M='),
    new Product('tesing title', 'This is testing description', 20.34,'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M='),
    new Product('tesing title', 'This is testing description', 20.34,'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M='),
    new Product('tesing title', 'This is testing description', 20.34,'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M=')
  ]
}

export function productReducer(state = initialState, action: ProductActions.AddProduct){
  switch(action.type){
    case ProductActions.ADD_PRODUCT:
      console.log("came from product reducer");
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state ;
  }
}
