"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart} from '../actions/cartActions';
import {Panel} from 'react-bootstrap';
import CartItem from "./cartItem";

class Cart extends React.Component {
    renderCart() {
        return (
            <Panel header='Cart' bsStyle='primary'>
                {this.cartList()}
            </Panel>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
              return (
                  <CartItem key={cartItem.id} cartItem={cartItem} handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
              );
            })
        );
    }

    render() {
        if (this.props.cart.length !== 0) {
            return this.renderCart();
        }

        return ('cart empty');
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);