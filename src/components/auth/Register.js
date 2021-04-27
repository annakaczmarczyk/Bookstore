import React, { Component } from "react";
import axios from "axios";
import { withRouter  } from "react-router-dom"

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            forename: '',
            surname: '',
            password: ''
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup = e => {
        e.preventDefault();

        axios.post('http://localhost:3001/register', this.state)
        .then(
            res =>{
                console.log(res.data)
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
        this.props.history.push('/login')
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }



    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Create Accout</h3>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="text" name="email" className="form-control" placeholder="E-mail"
                    onChange={this.onChange} />
                </div>
                
                <div className="form-group">
                    <label>Forename</label>
                    <input type="text" name="forename" className="form-control" placeholder="Forename"
                    onChange={this.onChange} />
                </div>
                
                <div className="form-group">
                    <label>Surname</label>
                    <input type="text" name="surname" className="form-control" placeholder="Surname"
                    onChange={this.onChange} />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"
                    onChange={this.onChange} />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={this.signup}>Create Accout</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default Register

