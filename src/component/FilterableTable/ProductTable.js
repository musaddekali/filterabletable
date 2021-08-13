import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends Component {
    render() {
        const { filterText, inStock } = this.props;
        let lastCategory = null;

        // By  forEach Loop 

        let rows = [];
        this.props.products.forEach((item) => {
            if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (inStock && !item.stocked) {
                return;
            }
            if (item.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow product={item} key={item.category} />
                )
            }
            rows.push(
                <ProductRow product={item} key={item.name} />
            )
            lastCategory = item.category;
        });


        ////////// By map {Bug: key is not working....} ///////////

        // let rows = this.props.products.map((item) => {
        //     let productCategory = '';
        //     let productRow = '';
        //     if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        //         return null;
        //     }
        //     if (inStock && !item.stocked) {
        //         return null;
        //     }

        //     if (item.category !== lastCategory) {
        //         productCategory = <ProductCategoryRow product={item} key={ item.category}/>
        //     }
        //     productRow = <ProductRow product={item} key={item.name}/>
        //     lastCategory = item.category;

        //     return (
        //         <>
        //             {productCategory}
        //             {productRow}
        //         </>

        //     )
        // });

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}