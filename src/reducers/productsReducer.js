"use strict";
const INIT_PRODUCTS = [
    {id:1, title: 'Apples', description: 'some red apples', price: 30},
    {id:2, title: 'Oranges', description: 'Peale\'em all', price: 25},
    {id:3, title: 'Bananas', description: 'Some potassium for you', price: 20}
];
export default function productsReducer(state=INIT_PRODUCTS, action={}) {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}