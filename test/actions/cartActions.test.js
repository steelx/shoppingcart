import { expect } from '../test_helper';
import {createStore} from 'redux';
import reducers from '../../src/reducers'
import {ADD_TO_CART, UPDATE_ITEM_UNITS, DELETE_FROM_CART} from '../../src/actions/cartActions';

const INIT_PRODUCTS = [
    {id:1, title: 'Apples', description: 'some red apples', price: 30},
    {id:2, title: 'Oranges', description: 'Peale\'em all', price: 25},
    {id:3, title: 'Bananas', description: 'Some potassium for you', price: 20}
];

describe('CartActions' , () => {
    let store = createStore(reducers, {cart: [], products: INIT_PRODUCTS});
    it('addes 2 cart items, update units. Deletes 1 item. Has correct state', () => {
        let actionsPipeline = [
            {
                type: ADD_TO_CART,
                payload: {id:1, title: 'Apples', description: 'some red apples', price: 30}
            },
            {
                type: ADD_TO_CART,
                payload: {id:2, title: 'Oranges', description: 'some oranges', price: 25}
            },
            {
                type: UPDATE_ITEM_UNITS,
                payload: {id: 1, units: 1}
            },
            {
                type: UPDATE_ITEM_UNITS,
                payload: {id: 1, units: 1}
            },
            {
                type: DELETE_FROM_CART,
                payload: {id: 2}
            }
        ];

        actionsPipeline.forEach(action => store.dispatch(action));
        let state = store.getState().cart;
        let expected = [
            {id: 1, title: 'Apples', description: 'some red apples', price: 30, units: 3}
        ];
        expect(state.toString()).to.equal(expected.toString());
    });

});