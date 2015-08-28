/**
 * Created by nadir on 25/08/15.
 */
import React from 'react';

import ProductItem from './productItem';

class ProductListItems extends React.Component{

    render(){
        let item = '';
        if (this.props.loader) {item = 'Loading...'
        }else{
            item = this.props.products.map((product, i)=>{
                return(
                    <ProductItem product={product} action={this.props.action} key={i} addToList={this.props.addToList} removeFromList={this.props.removeFromList}/>
                )
            })
            return(
                <div>
                    {item}
                </div>
            )
        }

    }

    constructor(props){
        super(props)
    }
}

export default ProductListItems;