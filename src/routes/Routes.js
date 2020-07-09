import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from '../views/RegitserUser/RegisterUser';
import ProductList from '../views/ProductList/ProductList';
import Users from '../views/Users/Users';

class Routes extends Component {
    render() {
        return (
        <div>
            <Route exact path = "/register" component = {Register}></Route>
            <Route exact path = "/users" component = {Users}></Route>
            <Route exact path = "/" component = {ProductList}></Route>
        </div>
        );
    }
}
export default Routes;