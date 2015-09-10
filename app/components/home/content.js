/**
 * Created by nadir on 16/08/15.
 */

import React from 'react';
import {Link} from 'react-router'
import ConnectToStore from 'alt/utils/connectToStores';

import Decorator from '../decoratorComponent'
import ProductActions from '../../actions/productActions';
import ProductStore from '../../stores/ProductStore';
import RouterStore from '../../stores/RouterStore.js';

import ProductListItems from '../product/productListItems';
import Navbar from '../navigation/navbar';
import Search from './search';
import ModalAddProduct from '../product/modalAddProduct';


@Decorator
 class Content extends React.Component {

        constructor(props){
            super(props)

            this.state = ProductStore.getState();
            this.storeChanged = this.storeChanged.bind(this);
            ProductStore.listen(this.storeChanged);
            this.state.input = '';
            this.state.modalIsOpen = false;


            this.searchForProduct = this.searchForProduct.bind(this);
            this.menuAction = this.menuAction.bind(this);
            this.addToList = this.addToList.bind(this);
            this.removeFromList = this.removeFromList.bind(this);
            this.closeModal = this.closeModal.bind(this)
            this.openModal = this.openModal.bind(this)

        }

        componentDidMount(){
            ProductStore.listen(this.storeChanged);
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
            ProductActions.menuAction(text)
            switch (text){
                case  'Entree':
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

        closeModal(){
            this.setState({modalIsOpen: false})
        }
        openModal(){
            this.setState({modalIsOpen: true})
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
                            {this.state.products.length ? <ProductListItems  products={this.state.products} action={this.state.menuAction} addToList={this.addToList} removeFromList={this.removeFromList}/> : 'Loading...'}

                        </div>
                        <div className="add-product">
                            <button className="btn btn-primary" onClick={this.openModal}><i className="glyphicon glyphicon-plus"></i></button>
                        </div>
                        <ModalAddProduct modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
                    </div>
                </div>

            )

        }

    }





export default Content