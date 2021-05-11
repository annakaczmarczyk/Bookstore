import React, { Component } from 'react';
import { Redirect } from 'react-router';
import request from 'superagent';
import './auth.css'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login = e => {
        e.preventDefault();
        
        let BASE_URL = "http://localhost:8080/api/auth/signin";

        request
        .post(BASE_URL)
        .send({username: this.state.username, password: this.state.password})
        .then(res => {
            console.log(res)
            localStorage.setItem("user", JSON.stringify(res.body));
            this.setState({
                loggedIn: true
            });
            this.props.setUser(res.data.username)
        })
        .catch (err => {
            console.log(err)
        })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){

        if(this.state.loggedIn) {
            return (<Redirect to={'/'} />);
        }

        return(
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form>
                    
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" name="username" className="form-control" placeholder="Username"
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password"
                        onChange={this.onChange}/>
                    </div>

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