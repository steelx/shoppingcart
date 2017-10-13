"use strict";
import {ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART} from '../actions/cartActions';

export default function cartReducer(state=[], action={}) {
    switch(action.type) {
        case ADD_TO_CART:
            return state.concat(action.payload);

        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case UPDATE_CART:
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const extend = {
                ...state[indexToUpdate], units: action.payload.units
            };
            return [...state.slice(0, indexToUpdate), extend, ...state.slice(indexToUpdate+1)];
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}