/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import {Link} from 'react-router'
import ConnectToStore from 'alt/utils/connectToStores'

import ProductActions from '../../actions/productActions';
import ProductStore from '../../stores/ProductStore';

import ProductListItems from '../product/productListItems';
import Navbar from '../navigation/navbar';
import Search from './search';


class Content extends React.Component {

    constructor(props){
        super(props)

        this.state = ProductStore.getState();
        this.storeChanged = this.storeChanged.bind(this);
        ProductStore.listen(this.storeChanged);
        this.state.input = '';


        this.searchForProduct = this.searchForProduct.bind(this);
        this.menuAction = this.menuAction.bind(this);
        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);

    }

    componentWillUnmount(){
        ProductStore.unlisten(this.storeChanged)
    }

    storeChanged(){
        this.setState(ProductStore.getState())
    }

    searchForProduct(e) {
        this.setState({input: e.target.value });
        ProductActions.filterProducts(e.target.value)
    }

    menuAction(text){
        //this.setState({menuAction: text});
        ProductActions.menuAction(text)
        switch (text){
            case  'Entree':
                alert('Veuillez cliquez sur ajouter pour selectionner le(s) produit(s)');
            break;
        }
    }

    addToList(prod){
        ProductActions.addToList(prod)
        ProductActions.listProducts()
    }

    removeFromList(prod){
            ProductActions.removeFromList(prod)
            ProductActions.listProducts()
        }



    render(){

        return (
            <div>
                <div className="row">
                    <Navbar action={this.menuAction}/>
                </div>
                <div className="row container-fluid my-container">

                    <Search  searchInput={this.state.input} onChange={this.searchForProduct}/>
                    <div className="row info-box">
                        <ProductListItems  products={this.state.products} action={this.state.menuAction} addToList={this.addToList} removeFromList={this.removeFromList}/>
                    </div>

                </div>
            </div>

        )

    }

}


export default Content