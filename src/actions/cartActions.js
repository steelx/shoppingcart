"use strict";
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addToCart({id, units}) {
    return {
        type: ADD_TO_CART,
        payload: {id, units}
    }
}
export function updateCart({id, units}) {
    return {
        type: UPDATE_CART,
        payload: {id, units}
    }
}
export function deleteFromCart({id}) {
    return {
        type: DELETE_FROM_CART,
        payload: {id}
    }
}