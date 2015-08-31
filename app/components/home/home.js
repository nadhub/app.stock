/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import AuthActions from '../../actions/authActions'
import AuthStore from '../../stores/AuthStore';
import RouterStore from '../../stores/RouterStore';
import HeaderStore from '../../stores/HeaderStore'
import router from '../../config/routerContainer';

import DecoratorComponent from '../decoratorComponent';
import Header from './header';
import Navbar from '../navigation/navbar'


export default  class Home extends React.Component {

        constructor(){
            super();
            this.state = {};
            this.state.auth = AuthStore.getState();
            this.state.header = HeaderStore.getState();
            this.storeChanged = this.storeChanged.bind(this);
            this.storeChangedHeader = this.storeChangedHeader.bind(this);
            AuthStore.listen(this.storeChanged);
            this.logout = this.logout.bind(this);
        }

        componentDidMount(){
         AuthStore.listen(this.storeChaged)

        }
        componentDidMount() {
        AuthStore.listen(this.storeChanged);
        HeaderStore.listen(this.storeChangedHeader)
        }

        storeChanged() {
        this.setState({auth: AuthStore.getState()});

        let transitionPath = RouterStore.getState()._nextRoutePath || '/';


        if(AuthStore.getState()._isLogin){
            router.transitionTo(transitionPath);
        }else{
            router.transitionTo('/login');
        }
        }

        storeChangedHeader(){
           this.setState({header: HeaderStore.getState()})
        }

        componentWillUnmount() {
            AuthStore.unlisten(this.storeChanged);
            HeaderStore.unlisten(this.storeChangedHeader)
        }

        logout(){
            AuthActions.logout()
        }

        render(){
            let header;
            if(AuthStore.getState()._isLogin){
                header = (<Header {...this.state.header} user={this.state.auth.user} logout={this.logout}/>)
            }else{
                header = ''

            }
            return (

                <div classNameName="">
                    {header}
                    <RouteHandler/>
                </div>
            )

        }


}

