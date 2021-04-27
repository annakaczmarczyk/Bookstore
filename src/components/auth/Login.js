import React, { Component } from "react";
import axios from 'axios';

class Login extends Component
{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }



    login = e => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', this.state)
        .then(
            res=> {
                console.log(res.data)
                this.props.history.push('/')
            }
        ).catch (
            err=> {
                console.log(err)
            }
        )
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form>
                <h3>Login</h3>
                <div className="form-gorup">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Email"
                    onChange={this.onChange}></input>
                </div>
                <div className="form-gorup">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"
                    onChange={this.onChange}></input>
                </div>
                <br />
                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                </div>
            </form>
                </div>
            </div>
        )
    }
}
export default Login;
