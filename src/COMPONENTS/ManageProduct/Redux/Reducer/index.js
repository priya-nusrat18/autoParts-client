import {combineReducers} from 'redux';
import {ProductsReducer , selectedProductsReducer  } from './ProductsReducer'

export default combineReducers ({
    ProductsReducer,
    selectedProductsReducer
})