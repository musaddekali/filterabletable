import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default class FilterableProductTable extends Component {
    state = {
        filterText: '',
        inStock: false,
    }
    handleFilterText = (filterText) => {
        this.setState({
            filterText: filterText
        })
    }

    handleInStock = (inStock) => {
        this.setState({
            inStock: inStock
        })
    }
    render() {
        const { products } = this.props;
        const { filterText, inStock } = this.state;

        return (
            <div>
                <h1>FilterableProductTable</h1>
                <SearchBar
                    filterText={filterText}
                    inStock={inStock}
                    onFilterTextChange={this.handleFilterText}
                    onInStockChange={this.handleInStock}
                />
                <ProductTable
                    filterText={filterText}
                    inStock={inStock}
                    products={products}
                    onFilterTextChange={this.handleFilterText}
                    onInStockChange={this.handleInStock}
                />
            </div>
        )
    }
}
