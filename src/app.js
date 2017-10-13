"use strict";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import {addToCart, updateCart, deleteFromCart} from "./actions/cartActions";
import {addProduct, updateProduct} from "./actions/productsActions";

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// Dispach actions
store.dispatch(addProduct({id:1, title: 'Apples', description: 'some red apples', price: 30}));
store.dispatch(addProduct({id:2, title: 'Oranges', description: 'some oranges, peal them off', price: 20}));
store.dispatch(addProduct({id:3, title: 'Banana', description: 'some BANANA peal them pls', price: 10}));
store.dispatch(updateProduct({id:1, title: 'NEW Apples'}));

store.dispatch(addToCart({id:1, units: 1}));
store.dispatch(addToCart({id:3, units: 1}));
store.dispatch(updateCart({id:1, units: 3}));