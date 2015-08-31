/**
 * Created by nadir on 29/08/15.
 */

import alt from '../lib/alt';
import jwt from 'jwt-decode';
import AuthActions from '../actions/authActions'

class AuthenticationStore{

    constructor(){
        this.bindActions(AuthActions);
        this.exportPublicMethods({
            isLoggedIn: this.isLoggedIn
        })
        this.user = null;
        this._isLogin = false;
    }

    onLogin(token){
           localStorage.setItem('token', token);
           let decodeToken = jwt(token);
           this.user = decodeToken;
           this._isLogin = true;
    }

     isLoggedIn(){
        return !!this.user;
    }

    onLogout(){
        this.user = null;
        this._isLogin = false;
    }



}

export default alt.createStore(AuthenticationStore, 'AuthenticationStore');
