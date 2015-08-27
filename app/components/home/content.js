/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import {Link} from 'react-router'
import ConnectToStore from 'alt/utils/connectToStores'

import ProductActions from '../../actions/productActions';
import ProductStore from '../../stores/ProductStore';

import ProductListItems from '../product/productListItems';
import Search from './search';
import AddToStock from '../product/stock';
import RemoveFromStock from '../product/destock';

class Content extends React.Component {

    constructor(props){
        super(props)

        this.state = ProductStore.getState();
        this.storeChanged = this.storeChanged.bind(this);
        ProductStore.listen(this.storeChanged);
        this.state.input = '';
        this.state.classNameBTN ='btn btn-default btn-sm';

        this.searchForProduct = this.searchForProduct.bind(this);
        this.stock = this.stock.bind(this);
        this.destock = this.destock.bind(this);
        this.commande = this.commande.bind(this);
        this.devis = this.devis.bind(this);
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

    stock(prod){
        ProductActions.stock(prod);
        ProductActions.listProducts()
    }

    destock(prod){
        ProductActions.destock(prod);
        ProductActions.listProducts()
    }
    commande(prod){
        ProductActions.command(prod)
        ProductActions.listProducts()

    }
    devis(prod){
            ProductActions.devis(prod)
            ProductActions.listProducts()

        }

    render(){

        return (
            <div className="container-fluid my-container">
                <Search  searchInput={this.state.input} onChange={this.searchForProduct}/>
                <div className="row info-box">
                    <ProductListItems  products={this.state.products} stock={this.stock} destock={this.destock} command={this.commande} devis={this.devis}/>
                </div>

            </div>
        )

    }

}


export default Content