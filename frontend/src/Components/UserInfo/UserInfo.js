import React, { Component } from 'react';
import request from 'superagent';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forename: '',
            surname: '',
            creditCard: ''
        }
        this.update = this.update.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }
    

    update = e => {
        let userName = localStorage.getItem('user')
        let user = JSON.parse(userName)
        let id = user.id

        e.preventDefault();

        let BASE_URL = "http://localhost:8080/api/test/update/" +id;

        request
        .put(BASE_URL)
        .send({forename: this.state.forename, surname: this.state.surname, creditCard: this.state.creditCard})
        .then(res => {
            console.log(res)
            if (res.statusCode === 200)
                this.props.history.push('/')
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
                    
                    <h3>Update</h3>
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
                        <label>Credit Card number</label>
                        <input type="text" name="creditCard" className="form-control" placeholder="Credit Card"
                        onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" onClick={this.update}>Update</button>
                    </div>
                </form>
                </div>
              </div>
        )
    }
}

export default UserInfo;