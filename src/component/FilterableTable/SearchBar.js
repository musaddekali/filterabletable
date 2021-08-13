import React, { Component } from 'react';

export default class SearchBar extends Component {
    
    handleFilterText = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStock = (e) => {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        const { filterText, inStock } = this.props;
        return (
            <form className="shadow p-3 mb-4" action="#">
                <label htmlFor="searchbox" className="form-group d-block mb-3">
                    <input
                        className="form-control shadow-none"
                        type="text"
                        placeholder="Search.."
                        vlaue={filterText}
                        onChange={this.handleFilterText}
                    />
                </label>
                <label htmlFor="checkbox">
                    <input
                        type="checkbox"
                        
                       checked={inStock}
                        onChange={this.handleInStock}
                    />
                    {' '}
                    Only show  products is stock
                </label>
            </form>
        )
    }
}