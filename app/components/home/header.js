/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import {Link} from 'react-router';
import HeaderStore from '../../stores/HeaderStore';
import ProductStore from '../../stores/ProductStore';
import ProductActions from '../../actions/productActions';

export default class Header extends React.Component {

    constructor(props){
        super(props)
        ProductActions.listProducts();
        this.state = HeaderStore.getState();
        this.storeChanged = this.storeChanged.bind(this);
        HeaderStore.listen(this.storeChanged);
    }

    componentDidMount() {
     HeaderStore.listen(this.storeChanged)
    }

    componentWillUnmount(){
        HeaderStore.unlisten(this.storeChanged)
    }

    storeChanged(){
        this.setState(HeaderStore.getState())
    }



    render(){

        let button, qty = 0;
        if (this.state.list.length) {
            for(let i=1; i< this.state.list.length; i++){
                qty += this.state.list[i]['quantity'];
            }
            button = (
                <button className="btn btn-success btn-lg">{this.state.menuAction}  : {this.state.list.length} Produit(s) <br/> Cliquer pour voir la liste</button>
            )
        }else{
            button = '';
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

                    </div>
                </div>
            </header>

        )

    }
}