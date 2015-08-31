/**
 * Created by nadir on 16/08/15.
 */
import '!style!css!sass!../public/style/sass/main.sass';
import Router from './config/routerContainer'
import React from 'react';
//import Router from 'react-router';
//import routes from './config/routes';

import ProductAction from './actions/productActions';

main();

function main(){

    ProductAction.getAllProducts();
    let div = document.getElementById('main');

    /*Router.run(routes, (Root, state)=> {
        React.render(<Root {...state} />, div);
    });*/

    Router.run((Handler)=> {
        React.render(<Handler />, div);
    })
}


