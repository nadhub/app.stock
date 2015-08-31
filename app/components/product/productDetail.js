/**
 * Created by nadir on 22/08/15.
 */

import React from 'react';
import ProductAcions from '../../actions/productActions'
import ProductStore from '../../stores/ProductStore.js'
import Decorator from '../decoratorComponent'

@Decorator
class Product extends React.Component{

    constructor(props){
        super(props)
        this.storeChanged = this.storeChanged.bind(this);
        this.productId = this.props.params.productId;
        ProductStore.listen(this.storeChanged);
        this.state = ProductStore.getState();
    }

    componentDidMount(){
        ProductAcions.getProduct(this.productId);
    }

    componentWillUnmount(){
        ProductStore.unlisten(this.storeChanged)
    }


    storeChanged(){
        this.setState(ProductStore.getState())
    }

    commande(prod){
       ProductAcions.command(prod)
       ProductAcions.listProducts()
    }

    render(){

        let prod = this.state.product;
        return (

            <div className=" row product wow fadeInRight">
               <div className="col-sm-8 col-sm-push-2">
                    <div className="row header">
                            <div className="col-sm-6"><h1> {this.state.product.productName} </h1></div>
                    <div className="col-sm-6 text-right"><p><button className="btn btn-primary btn-lg">Edit <i className=" glyphicon glyphicon-pencil"></i></button></p></div>
                    </div>

                    <hr />
                    <div className="row ">
                        <div className="col-sm-6">
                            <img className="img-rounded img-responsive product-image" src= {this.state.product.imgUrl}  />
                        </div>
                        <div className="col-sm-6">
                            <section className="col-sm-6 product-label">
                                <p>Code article: </p>
                                <p>Category : </p>
                                <p>Quantity en stock : </p>
                                <p>Price Int : </p>
                                <p>Price Public : </p>
                            </section>
                           <section className="col-sm-6 text-right">
                                 <p>{this.state.product.productCode}</p>
                                 <p>{this.state.product.category}</p>
                                 <p>{this.state.product.stock}</p>
                                 <p>{this.state.product.price}</p>
                                 <p>{this.state.product.pricePublic}</p>
                           </section>

                        </div>
                        <hr />
                   </div>

                   <div className="row">

                   </div>
               </div>

            </div>
        )
    }


}

export default Product;