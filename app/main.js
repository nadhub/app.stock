/**
 * Created by nadir on 16/08/15.
 */
import '!style!css!sass!../public/style/sass/main.sass';
import Router from './config/routerContainer'
import React from 'react';
import AuthActions from './actions/authActions.js';

import ProductAction from './actions/productActions';

main();

function main(){


    ProductAction.getAllProducts();

    // autologin
    if(localStorage.getItem('token')){
        let token = localStorage.getItem('token');
        AuthActions.login(token);
    }
    let div = document.getElementById('main');


    Router.run((Handler)=> {
        React.render(<Handler />, div);
    })
}


