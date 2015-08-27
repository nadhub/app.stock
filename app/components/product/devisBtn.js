/**
 * Created by nadir on 26/08/15.
 */
import React from 'react';

class DevisBtn extends React.Component{


    render(){

        return (
            <button className={this.props.prod.listType !== 'Devis' ? 'btn btn-default btn-sm': 'btn btn-success btn-sm glyphicon glyphicon-ok'} onClick={this.props.devis}> + Devis </button>
        )
    }

}

export default DevisBtn;