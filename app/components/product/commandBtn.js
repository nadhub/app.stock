/**
 * Created by nadir on 26/08/15.
 */
import React from 'react';

class CommandeBTN extends React.Component{


    render(){

        return (
            <button className={this.props.prod.listType !== 'Commande' ? 'btn btn-default btn-sm': 'btn btn-success btn-sm glyphicon glyphicon-ok'} onClick={this.props.command}> + Commande </button>
        )
    }

}

export default CommandeBTN;