"use strict";
import React from 'react';
import {connect} from 'react-redux';

class ProductsList extends React.Component {
    renderProducts() {
        return (
            this.props.products.map((p) => {
                return (
                    <li key={p.id}>
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                        <p>{p.price}</p>
                    </li>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <h3>ProductsList</h3>
                <ul>{this.renderProducts()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsList);