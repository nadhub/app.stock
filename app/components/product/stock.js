/**
 * Created by nadir on 23/08/15.
 */

import React from 'react';

class AddToStock extends React.Component{

    render(){
        return (
            <button className="btn btn-default btn-sm" onClick={this.props.stock}> <i className="glyphicon glyphicon-plus"></i> Stock </button>
        )

    }

}

export default AddToStock;