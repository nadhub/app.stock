/**
 * Created by nadir on 30/08/15.
 */

import React from 'react';
import AuthStore from'../stores/AuthStore';
import RouterActions from '../actions/routerActions';

export default (ComposedComponent) => {

    return class DecoratorComponent extends React.Component{

        /* source modifié  https://goo.gl/B8Zh2x */

        static willTransitionTo(transition) {

            //console.log('&*&*&* willTransitionTo for authenticated page. Next transition path:', transition.path, 'logged in:', AuthStore.getState()._isLogin);

            if (!AuthStore.getState()._isLogin) {

                let transitionPath = transition.path;
                RouterActions.storeRouterTransitionPath(transitionPath);

                //go to login page
                transition.redirect('/login');
            }
        }

        constructor(){
            super();
            this.state = AuthStore.getState();
            this.storeChanged = this.storeChanged.bind(this);
        }

        componentDidMount() {
            AuthStore.listen(this.storeChanged)
        }

        storeChanged() {
            this.setState(AuthStore.getState());
        }

        componentWillUnmount() {
           AuthStore.unlisten(this.storeChanged)
        }

        render(){
            return(
                <ComposedComponent
                 {...this.props}
                 user={this.state.user}
                 />
            )

        }

    }




}