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
        ProductAcions.getProduct(this.productId);
        ProductStore.listen(this.storeChanged);
        this.state = ProductStore.getState().product;
    }


    componentDidMount(){
      //  ProductAcions.getProduct(this.productId);
       ProductStore.listen(this.storeChanged)
    }

    componentWillUnmount(){
        ProductStore.unlisten(this.storeChanged)
    }


    storeChanged(){
        this.setState(ProductStore.getState().product)
    }

    render(){

        let sn;

        if(this.state.details.length){
            sn = (
                <table className="table product-table-details">
                    <thead>
                    <th className="text-center">Details</th>
                    </thead>
                    <tbody className="text-center">
                    <td>
                        <div className="panel">
                            <div className="panel-body">{this.state.details}</div>
                        </div>
                    </td>
                    </tbody>
                </table>
            )
        }else{
            sn = '';
        }

        return (

            <div className=" row product wow fadeInRight">
                <div className="col-sm-8 col-sm-push-2">
                    <div className="row header">
                        <div className="col-sm-6"><h1> {this.state.productName} </h1></div>
                        <div className="col-sm-6 text-right"><p><button className="btn btn-primary btn-lg">Edit <i className=" glyphicon glyphicon-pencil"></i></button></p></div>
                    </div>

                    <hr />
                    <div className="row ">


                        <div className="col-sm-6">

                            <img className="img-rounded img-responsive product-image" src= {this.state.imgUrl}  />
                        </div>
                        <div className="col-sm-6">

                            <section className="product-details">
                                <table className="table">
                                    <tr> <td><div className="col-sm-6"> <h4>Code:</h4>  </div><div className="col-sm-6 text-center"><h4>{this.state.productCode}</h4></div></td></tr>
                                    <tr> <td><div className="col-sm-6"> <h4>Category:</h4>  </div><div className="col-sm-6 text-center"><h4>{this.state.category}</h4></div></td></tr>
                                    <tr> <td><div className="col-sm-6"> <h4>Stock:</h4>  </div><div className="col-sm-6 text-center"><h4>{this.state.stock}</h4></div></td></tr>
                                    <tr> <td><div className="col-sm-6"> <h4>Price Pol:</h4>  </div><div className="col-sm-6 text-center"><h4>{this.state.price}</h4></div></td></tr>
                                    <tr> <td><div className="col-sm-6"> <h4>Price public:</h4>  </div><div className="col-sm-6 text-center"><h4>{this.state.pricePulic}</h4></div></td></tr>
                                </table>
                            </section>
                        </div>

                    </div>
                    <div className="row">
                        {sn}
                    </div>
                </div>

            </div>
        )
    }


}

export default Product;