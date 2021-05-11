import React, { Component } from 'react';
import request from 'superagent';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);      
    }

    signup = e => {
        e.preventDefault();

        let BASE_URL = "http://localhost:8080/api/auth/signup";

        request
        .post(BASE_URL)
        .send({username: this.state.username, password: this.state.password, email: this.state.email})
        .then(res => {
            console.log(res)
            if (res.statusCode === 200)
                this.props.history.push('/login')
        })
        .catch (err => {
            console.log(err)
        });
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form>
                    
                    <h3>Sign up</h3>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" name="username" className="form-control" placeholder="Username"
                        onChange={this.onChange}  required/>
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" name="email" className="form-control" placeholder="E-mail"
                        onChange={this.onChange}  required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password"
                        onChange={this.onChange} required/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" onClick={this.signup}>Sign Up</button>
                    </div>
                </form>
                </div>
              </div>
        )
    }
}

export default Register;