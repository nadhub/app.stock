/**
 * Created by nadir on 25/08/15.
 */

import React from 'react';
import {Link} from 'react-router';
import Stock from './stock';
import Destock from './destock';
import CommandBtn from './commandBtn'
import DevisBtn from './devisBtn'



class ProductItem extends React.Component{



    render(){
        let prod = this.props.product;
        return(
            <div className="col-md-4">
                <div className="panel panel-default">

                    <div className="panel-body">
                        <Link to="detail" params={{productId: prod._id}}><h3>{prod.productName}</h3></Link>
                        <img className="img-rounded img-responsive image" src={prod.imgUrl} />
                        <p className="qty"><small>Stock</small> <span  className="stock">{prod.stock}</span> </p>
                        <p className="tpn"> {prod.productCode} </p>
                        <div className="menu-option">
                                <div className="row">
                                    <div className="col-sm-6 pull-left">
                                        <CommandBtn command={this.props.command.bind(null, prod)} prod={prod}/> &nbsp;
                                        <DevisBtn devis={this.props.devis.bind(null, prod)} prod={prod}/>
                                    </div>
                                    <div className="col-sm-6 pull-right">
                                        <Stock  stock={this.props.stock.bind(null, prod)} /> &nbsp;
                                        <Destock destock={this.props.destock.bind(null, prod)} prod={prod}/>
                                    </div>
                                </div>


                                   <p>{prod.inList ? <button className="btn btn-primary product-selected">A {prod.forList}</button>: '' }</p>
                                </div>
                        </div>
                </div>
                <hr/>

            </div>
        )
    }

}

export default ProductItem;