import React, { Component } from 'react';

export default  class ProductRow extends Component {
    render() {
        const { product } = this.props;

        const name = product.stocked ?
            product.name :
            <span style={{ color: 'red' }}>
                {product.name}
            </span>,

            price = product.stocked ?
                product.price :
                <span style={{ color: 'red' }}>
                    {product.price}
                </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }
}
