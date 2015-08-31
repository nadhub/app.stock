/**
 * Created by nadir on 29/08/15.
 */

import React from 'react';
import AuthActions from '../../actions/authActions';
import userApi from '../../utils/api/userAPI';
//import AuthStore from '../../stores/AuthStore';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {};
        this.state.credentials = {name:'', password: ''};
        this.state.error = null;
    }



    changeHandler(e){
        this.state.credentials[e.target.name] = e.target.value
        this.setState({
            credentials: this.state.credentials
        })
    }

    submit(e){
       e.preventDefault();
        userApi.login(this.state.credentials)
        .then((token)=> {
              AuthActions.login(token);
        })
        .catch((err)=>{
               this.setState({error: 'Login/password incorrect'})
            })

    }

    render(){

        return(
            <div className="col-sm-4 col-sm-push-4">
                <div className="login jumbotron">
                    <h1 className="text-center">Login</h1>
                    <form role="form">
                        <div className="form-group">
                            <label htmlFor="username">Login</label>
                            <input type="text" value={this.state.credentials.name} onChange={this.changeHandler.bind(this)} className="form-control" name="name" placeholder="Username" />
                        </div>
                        <div classNam e="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.credentials.password} onChange={this.changeHandler.bind(this)} className="form-control" name="password" placeholder="Password" />
                        </div>
                        {this.state.error ? <div className="alert alert-danger"> {this.state.error} </div>: ''}<br/>
                        <button type="submit" className="btn btn-default pull-right" onClick={this.submit.bind(this)}>Submit</button>
                    </form>
                </div>
            </div>


        )
    }

}

export default Login;