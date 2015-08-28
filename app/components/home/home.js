/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import { PropTypes } from 'react';
import {RouteHandler, Link} from 'react-router';

import Header from './header';
import Navbar from '../navigation/navbar'


class Home extends React.Component {
    
    constructor(props){
        super(props);

    }


    render(){

        return (

            <div classNameName="">
                <Header {...this.state}/>

                <RouteHandler {...this.state} search={this.setSearchCriteria} />
            </div>
        )

    }

}

export default Home