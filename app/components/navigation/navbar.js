/**
 * Created by nadir on 22/08/15.
 */

import React from 'react';

export default class Navbar extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                        <ul className="nav navbar-nav pull-right">
                            <li className="active"><a href="">Add + <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Commandes</a></li>
                            <li><a href="#">Devis</a></li>

                        </ul>
                    </div>
                </nav>

        )

    }
}