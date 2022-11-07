import { Action } from '@remix-run/router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './reducers/ProductReducer';
let store = createStore(ProductReducer, applyMiddleware(thunk));
export default store; 