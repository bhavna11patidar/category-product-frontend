import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {onRegister} from './../../Redux/Authentication/AuthAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
 class Registration extends Component {
    constructor(props){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            gender:"",
        }
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    _onSubmit=()=>{
        //console.log(this.state);
        const {name,email,password,gender} = this.state;
        const newUser={
            name,email,password,gender
        }
        this.setState({name:"",email:"",gender:"",password:""});
        this.props.onRegister(newUser, this.props.history);
    }
    render() {
        const {name,email,password,gender} = this.state;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 card py-3">
                        <h1 className="text-info text-center">Registration</h1>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" name="name" className="form-control" value={name} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Gender : </label>
                            <input type="radio" name="gender" className="form-control-check" value="male" onChange={this.onHandleChange}/>Male
                            <input type="radio" name="gender" className="form-control-check" value="female" onChange={this.onHandleChange}/>Female
                        </div>
                        <div className="">
                            <button className="btn btn-info" onClick={this._onSubmit}>Register</button>
                            <p>Already a registered user, <Link to="/login">Click</Link> to <b>Login</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null,{onRegister})(withRouter(Registration))