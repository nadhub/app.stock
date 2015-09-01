/**
 * Created by nadir on 25/08/15.
 */

import React from 'react';
import {Link} from 'react-router';




class ProductItem extends React.Component{



    render(){
        let prod = this.props.product;
        return(
            <div className="col-md-4">
                <div className="panel panel-default">

                    <div className="panel-body">
                        <h3>{prod.productName}</h3>
                        <img className="img-rounded img-responsive image" src={prod.imgUrl} />
                        {prod.isSelected ? <button className='btn btn-success pull-right selected' >Selected <i className="glyphicon glyphicon-ok"></i></button> : ''}
                        <p className="qty"><small>Stock</small> <span  className="stock">{prod.stock}</span> </p>
                        <p className="tpn"> {prod.productCode} </p>
                        <div className="">
                            <Link to="product" params={{productId: prod._id}}><button className="btn btn-default">Details...</button></Link>
                            {this.props.action !== '' &&  !prod.isSelected ? <button className='btn btn-primary pull-right' onClick={this.props.addToList.bind(null, prod)}>Ajouter à la liste</button> : ''}
                            {prod.isSelected ? <button className='btn btn-default pull-right' onClick={this.props.removeFromList.bind(null, prod)} >Retirer de la liste <i className="glyphicon glyphicon-minus"></i></button>  : ''}

                        </div>
                        </div>
                </div>
                <hr/>

            </div>
        )
    }

}

export default ProductItem;