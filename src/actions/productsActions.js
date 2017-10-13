"use strict";
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function addProduct({id, title, description, price}) {
    return {
        type: ADD_PRODUCT,
        payload: {id, title, description, price}
    }
}
export function updateProduct({id, title}) {
    return {
        type: UPDATE_PRODUCT,
        payload: {id, title}
    }
}