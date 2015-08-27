/**
 * Created by nadir on 16/08/15.
 */
import React from 'react';
import {Router, Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Home from '../components/home/home.js'
import Content from '../components/home/content';
import ProductDetail from '../components/product/productDetail';
import NotFound from '../components/notFound';


export default (
    <Route name="home" handler={Home} path="/">

        <Route name="detail" path=":productId" handler={ProductDetail} />
        <DefaultRoute handler={Content}/>

        <NotFoundRoute handler={NotFound}/>

    </Route>
);