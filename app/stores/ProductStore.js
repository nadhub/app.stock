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
        this.menuAction = '';
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

    onMenuAction(text){
        this.menuAction = text;
    }

   onAddToList(prod){
       for(let product of this.products){
               if(product._id === prod._id){
                   product.inCart = true;
                   product.isSelected = true;
                   this.listProducts.push(prod)
                   break;
               }
       }
   }

   onRemoveFromList(prod){
       for(let product of this.products){
           if(product._id === prod._id){
               product.isSelected = false;
               _.remove(this.listProducts, prod);
               break;
           }
       }
   }
}

export default alt.createStore(ProductStore, 'ProductStore');