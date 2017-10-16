"use strict";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ProductsList from "./components/productsList";

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(<Provider store={store}>
    <ProductsList/>
</Provider>, document.getElementById('app'));