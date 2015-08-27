/**
 * Created by nadir on 23/08/15.
 */


import React from 'react';

class RemoveFromStock extends React.Component{


    render(){

        return (
            <button className={this.props.prod.listType !== 'Destock' ? 'btn btn-default btn-sm': 'btn btn-success btn-sm glyphicon glyphicon-ok'} onClick={this.props.destock}>
                Destock <i className="glyphicon glyphicon-minus"></i>
            </button>
        )
    }

}

export default RemoveFromStock;