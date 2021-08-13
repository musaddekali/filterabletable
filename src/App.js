import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { nanoid } from 'nanoid';
import './App.css';
import FilterableProductTable from './component/FilterableTable/FilterableProductTable';
// json local data file link
// const url = './JsonData/user_data.json';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    )
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  {category: 'Tech', price: '$250.99', stocked: true, name: 'CPU'},
  {category: 'Tech', price: '$150.99', stocked: false, name: 'Monitor'},
  {category: 'Tech', price: '$120.99', stocked: false, name: 'Mother Board'},
];