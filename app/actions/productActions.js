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

    stock(prod){
        this.dispatch(prod);
    }

    destock(prod){
        this.dispatch(prod);
    }

    listProducts(){
        this.dispatch()
    }

    command(prod){
        this.dispatch(prod)
    }

    devis(prod){
        this.dispatch(prod)
    }

}

export default alt.createActions(ProductActions);