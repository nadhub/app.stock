/**
 * Created by nadir on 22/08/15.
 */

import React from 'react';
import ProductAcions from '../../actions/productActions'
import ProductStore from '../../stores/ProductStore.js'


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
                            <div className="col-sm-6 text-right"><h2><button className="btn btn-primary btn-lg">Edit <i className=" glyphicon glyphicon-pencil"></i></button></h2></div>
                    </div>

                    <hr />
                    <div className="row ">
                        <div className="col-sm-6">
                            <img className="img-rounded img-responsive product-image" src= {this.state.product.imgUrl}  />
                        </div>
                        <div className="col-sm-6">
                            <section className="col-sm-6 product-label">
                                <h2>Code article: </h2>
                                <h2>Category : </h2>
                                <h2>Quantity en Stock : </h2>
                                <h2>Price Int : </h2>
                                <h2>Price Public : </h2>
                            </section>
                           <section className="col-sm-6 text-right">
                                 <h2>{this.state.product.productCode}</h2>
                                 <h2>{this.state.product.category}</h2>
                                 <h2>{this.state.product.stock}</h2>
                                 <h2>{this.state.product.price}</h2>
                                 <h2>{this.state.product.pricePublic}</h2>
                           </section>
                        </div>

                   </div>

                   <div className="row">

                   </div>
               </div>

            </div>
        )
    }


}

export default Product;