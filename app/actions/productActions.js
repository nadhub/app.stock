/**
 * Created by nadir on 16/08/15.
 */

import alt from '../lib/alt';
import ProductAPI from '../utils/api/productAPI'

class ProductActions{


    receivedProducts(products){
        this.dispatch(products);
    }


    filterProducts(search){
        this.dispatch(search);
    }

    getAllProducts(){
        var that = this;
        ProductAPI.getAllProducts()
        .then((products) => {
                that.actions.receivedProducts(products)
            })
    }

    getProduct(id){
        this.dispatch(id);
    }
    menuAction(text){
        this.dispatch(text);
    }

    addToList(prod){
        this.dispatch(prod)
    }

    removeFromList(prod){
        this.dispatch(prod)
    }

    listProducts(){
        this.dispatch()
    }



}

export default alt.createActions(ProductActions);