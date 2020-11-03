import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onLogin} from './../../Redux/Authentication/AuthAction';

class Login extends Component {
    constructor(props){
        super();
        this.state={
            email:"",
            password:"",
        }
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onLoginButton=()=>{
        //console.log(this.state);
        const {email, password}=this.state;
        const userData={email,password};
        this.props.onLogin(userData, this.props.history);

    }
    render() {
        const {email,password}=this.state;
        console.log(this.props);
        const error_msg=this.props.auth.error;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card col-md-6 py-3">
                        
                    <h1 className="text-info text-center">Login</h1>
                    {error_msg?<p className="text-center text-danger">{error_msg}</p>:null}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={this.onHandleChange}></input>
                        </div>
                        <button type="button" className="btn btn-info mb-3" onClick={this.onLoginButton}> Login </button>
                        <p>Not a registered user, <Link to="/">Click</Link> to <b>Register</b></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    auth:state.auth
})
export default  connect(mapStateToProps, {onLogin})(withRouter(Login));
