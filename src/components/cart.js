"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart} from '../actions/cartActions'
import {Col, Row, Panel, Button, Label, Badge} from 'react-bootstrap';

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
                  <Panel key={cartItem.id}>
                      <Row>
                          <Col xs={12} sm={6}>
                              <h5>{cartItem.title} <Badge pullRight>Price: INR {cartItem.price}</Badge></h5>
                          </Col>
                          <Col xs={6} sm={4}>
                              <p>units :&nbsp;
                                  <Label bsStyle='success'> {cartItem.units} </Label>
                                  &nbsp;
                                  <Button bsSize='small'>+</Button>
                                  <Button bsSize='small'>-</Button>
                              </p>
                          </Col>
                          <Col xs={6} sm={2}>
                              <Button onClick={this.handleDeleteFromCart.bind(this, cartItem.id)}
                                      bsSize='small'
                                      bsStyle='danger'>DEL</Button>
                          </Col>
                      </Row>
                  </Panel>
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