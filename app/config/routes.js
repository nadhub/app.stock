/**
 * Created by nadir on 16/08/15.
 */
import React from 'react';
import {Router, Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Home from '../components/home/home.js'
import Content from '../components/home/content';
import ProductDetail from '../components/product/productDetail';
import ListProduct from '../components/stock/listProducts'
import Login from '../components/account/login'
import NotFound from '../components/notFound';


export default (
    <Route name="home" path="/"  handler={Home}>
        <DefaultRoute handler={Content}/>
        <Route name="product" path="/product/:productId" handler={ProductDetail} />
        <Route name="listProduct" path="list" handler={ListProduct} />
        <Route name="login" path="login" handler={Login} />
        <NotFoundRoute handler={NotFound}/>

    </Route>
);