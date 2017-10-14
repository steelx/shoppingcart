"use strict";
import {ADD_TO_CART, DELETE_FROM_CART} from '../actions/cartActions';

export default function cartReducer(state=[], action={}) {
    switch(action.type) {
        case ADD_TO_CART:
            const existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                state[existingIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);

        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}