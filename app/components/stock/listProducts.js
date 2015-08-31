/**
 * Created by nadir on 30/08/15.
 */

import React from 'react';
import Decorator from '../decoratorComponent';

import ProductStore from '../../stores/ProductStore'

@Decorator
class ListProduct extends React.Component {
    constructor(props){
        super(props);

        this.state = {
                      list: ProductStore.getState().listProducts,
                      listName: ProductStore.getState().menuAction
                    }
        this._storeChanged = this._storeChanged.bind(this);
    }

    componentDidMount(){
        ProductStore.listen(this._storeChanged)
    }

    componentWillUmount(){
        ProductStore.unlisten(this._storeChanged)
    }


    _storeChanged(){
        this.setState({
            list: ProductStore.getState().listProducts,
            listName: ProductStore.getState().menuAction
        })
    }

    render(){
        let date = new Date();
        return (
            <div className="container list-product">
                <table className="table">
                    <thead>
                        <th className="col-sm-2">Date</th>
                        <th className="col-sm-3">Product</th>
                        <th className="col-sm-2">TPN</th>
                        {this.state.listName === 'Entree' || this.state.listName === 'Sortie' ? (<th className="col-sm-5">S/N</th>) : ''}
                        <th className="col-sm-1">QTY</th>
                    </thead>
                    <tbody>
                    {this.state.list.map((product)=>{
                        return(
                            <tr>
                                <td>{date.toDateString()}</td>
                                <td>{product.productName}</td>
                                <td>{product.productCode}</td>
                                {this.state.listName === 'Entree' || this.state.listName === 'Sortie' ? (<td>A rentrer</td>) : ''}
                                <td><input type="number"/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

                <br/> <br/>
                <button className="btn btn-primary btn-lg pull-right"> Save</button>


            </div>
        )


    }


}


export default ListProduct;