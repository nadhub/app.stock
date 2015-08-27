/**
 * Created by nadir on 16/08/15.
 */
import alt from '../lib/alt'
import _ from 'lodash';
import ProductActions from '../actions/productActions';
import HeaderStore from './HeaderStore';

class ProductStore {

    constructor(){
        this.bindActions(ProductActions);

        this.products=[];
        this.product = {};
        this.cache = {};
        this.loader = true;
        this.listProducts = [];


    }

    onReceivedProducts(products){
       this.products = JSON.parse(products);
       this.loader = false;
       this.cache.products = this.products;
    }

    onFilterProducts(criteria){

     let newProducts = [];

        if(criteria.trim() !==''){

             this.cache.products.forEach((product) => {
                 let str = product.productName.toLowerCase(), test= criteria.toLocaleLowerCase();
                 if(str.search(test) !==-1){
                     newProducts.push(product);
                     this.products = newProducts;
                 }
                 return this.products;
             })
         } else {
             this.products = this.cache.products;
             return this.products;
         }

    }

    onGetProduct(id){
        const products = this.products;

        products.forEach((prod)=>{
            if(prod._id === id){
                this.product = prod;
            }
        })
    }



    onStock(prod){

        if(prod.inList){
            if(prod.forList === 'Destocker'){
                this.products.forEach((product)=>{
                    while (product._id === prod._id){
                        product.stock++;
                        prod.inList = false;
                        _.remove(this.listProducts, prod)
                        if(!this.listProducts.length){
                           this.listProducts = [];
                        }
                        break;
                    }
                })
            }

        }else{
            if(!prod.inList && !this.listProducts.length){
                this.products.forEach((product)=>{
                    while (product._id === prod._id){
                        product.forList = 'Stocker';
                        product.inList = true;
                        this.listProducts.push(product)
                        break;
                    }
                })
            }
        }
    }


    onDestock(prod){

        if(prod.inList){
            if(prod.forList === 'Stocker'){
                this.products.forEach((product)=>{
                    while (product._id === prod._id){
                        prod.inList = false;
                        _.remove(this.listProducts, prod)
                        if(!this.listProducts.length){
                            this.listProducts = [];
                        }
                        break;
                    }
                })
            }

        }else {
            if(!prod.inList && !this.listProducts.length){
                this.products.forEach((product)=>{
                    while (product._id === prod._id){
                        product.stock--;
                        product.forList = 'Destocker';
                        product.inList = true;
                        this.listProducts.push(product)
                        break;
                    }
                })
            }
        } 
    }

    onCommand(prod){

    }



}

export default alt.createStore(ProductStore, 'ProductStore');