import { createStore , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../Reducer/index'
import thunk from 'redux-thunk'
const initialState = {}
export const store = createStore(RootReducer  , initialState, composeWithDevTools(applyMiddleware(thunk)) )
