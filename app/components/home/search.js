/**
 * Created by nadir on 20/08/15.
 */
import React from 'react';
import { PropTypes } from 'react';

class Search extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="row search">

                <div className="row">
                    <div className="col-md-4 col-sm-push-8">
                        <form  className="search-form">
                            <div className="form-group has-feedback">
                                <label htmlFor="search" className="sr-only">Search</label>
                                <input type="text" className="form-control" id="search" placeholder="search" value={this.props.searchInput} onChange={this.props.onChange}/>
                                <span className="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }

}




export default Search