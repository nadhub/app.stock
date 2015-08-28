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
                        <ul className="nav navbar-nav pull-left">

                            <li>
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Stock <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a onClick={this.props.action.bind(null, 'Entree')} >Entrer Stock</a></li>
                                    <li><a onClick={this.props.action.bind(null, 'Sortie')}>Sortir Stock</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a >Lister Entrees</a></li>
                                    <li><a >Lister Sorties</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Commandes <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a onClick={this.props.action.bind(null, 'Commande')}>Creer une Commande</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a>Lister toutes les commandes</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Devis <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a onClick={this.props.action.bind(null, 'Devis')}>Creer un  Devis</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a>Lister tous les devis</a></li>
                                </ul>
                            </li>



                        </ul>
                    </div>
            </nav>

        )

    }
}
