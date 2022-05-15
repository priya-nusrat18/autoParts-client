
  import { ADD_TO_CART , ADJUST_QTY_INCREMENT , ADJUST_QTY_DECREMENT , REMOVE_FROM_CART } from "../Actions/CartAction";
import {
  products_request,
  get_products_success,
  get_products_error,
  SELECTED_PRODUCT
} from "../Actions/ProductsAction";

const initialState = {
  loading: false,
  products: [],
  selectedProduct:[],
  cart:[],
  count:0,
  error: "",
};
export const ProductsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case products_request:
      return { ...state, loading: true }

    case get_products_success:
      return { 
        ...state, 
        loading: false,
        products: action.payload
       }
    
       case get_products_error:
           return { ...state , loading: false  , products:[]  , error: action.payload }

           case ADD_TO_CART:
        const newItem = {
            productId: action.id, 
            title: action.title,
            price: action.price,
            image: action.image,
            cartId: state.cart.length + 1
        }
        const newCart = [...state.cart, newItem];
        return {...state, cart: newCart};

    case REMOVE_FROM_CART:
        const cartId = action.cartId;
        const remainingCart = state.cart.filter(item => item.cartId !== cartId);
        return {...state, cart: remainingCart}

        case ADJUST_QTY_INCREMENT:
          return { ...state, count: state.count + 1};
        case ADJUST_QTY_DECREMENT:
          return { ...state, count: state.count - 1};
    default:
      return state;
  }
  
};
const initialState2 = {
  selectedProduct:[]
};
export const selectedProductsReducer = (state = initialState2, action ) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, selectedProduct:action.payload};
    default:
      return state;
  }
};

