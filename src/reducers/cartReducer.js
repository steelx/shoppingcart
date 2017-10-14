"use strict";
import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS} from '../actions/cartActions';

export default function cartReducer(state=[], action={}) {
    switch(action.type) {
        case ADD_TO_CART:
            let existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                state[existingIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);

        case UPDATE_ITEM_UNITS:
            let existingItemIndex = findProductIndex(state, action.payload.id);
            if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[existingItemIndex].units += action.payload.units;
            return state.concat([]);

        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}