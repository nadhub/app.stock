/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import {Link} from 'react-router';


export default class Header extends React.Component {

    constructor(props){
        super(props)

    }


    render(){

        let button, qty = 0;
        if (this.props.list.length) {
            for(let i=1; i< this.props.list.length; i++){
                qty += this.props.list[i]['quantity'];
            }
            button = (
                <Link to="/list"><button className="btn btn-success btn-lg btn-list">{this.props.menuAction}  : {this.props.list.length} Produit(s) <br/> Cliquer pour voir la liste</button></Link>
            )
        }else{
            button = '';
        }

        let styleLiA = {cursor: 'pointer'};
        let buttonLogout;
        if(this.props.user){
            buttonLogout = (<div className="btn-group btn-logout">
                                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="glyphicon glyphicon-user"></i> &nbsp;Welcome {this.props.user.name}&nbsp;
                                <span className="caret"></span>
                                <span className="sr-only"></span>
                                </button>
                                    <ul className="dropdown-menu" >
                                        <li onClick={this.props.logout}><a style={styleLiA}> Logout</a></li>
                                    </ul>
                            </div>
                        )
        }else{
            buttonLogout = ''
        }


        return (
            <header className="">
                <div className="jumbotron">
                    <div className="col-sm-6 pull-left" >
                        <Link to="home"> <h2> Teleste | SAV </h2> </Link>
                    </div>
                    <div className="col-sm-6 text-right ">
                        <div className="btn-list">
                            {button}
                        </div>
                        {buttonLogout}
                    </div>
                </div>
            </header>

        )

    }
}