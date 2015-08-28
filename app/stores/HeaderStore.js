/**
 * Created by nadir on 25/08/15.
 */

import alt from '../lib/alt';
import ProductActions from '../actions/productActions';
import ProductStore from './ProductStore'

class HeaderStore{
 constructor(){
     this.list = [];
     this.menuAction='';
     this.bindListeners({
         addToList: ProductActions.LIST_PRODUCTS
     })
 }

 addToList(){
     this.waitFor(ProductStore);
     this.list = ProductStore.getState().listProducts;
     this.menuAction = ProductStore.getState().menuAction;
 }

}

export default alt.createStore(HeaderStore, 'HeaderStore');