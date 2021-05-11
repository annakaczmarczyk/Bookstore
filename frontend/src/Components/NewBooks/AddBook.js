import React, { Component } from 'react';
import request from 'superagent';
import authHeader from '../Auth/Auth-header'
import Header from '../Header/Header'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            image: ''
        }
        this.addBook = this.addBook.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }
    

    addBook = e => {
        e.preventDefault();

        let BASE_URL = "http://localhost:8080/api/book/addbook";

        request
        .post(BASE_URL)
        .set(authHeader())
        .send({title: this.state.title, price: this.state.price, image: this.state.image})
        .then(res => {
            console.log(res)
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
            <div><Header />
            
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form>
                    
                    <h3>Add Book</h3>
                    <div className="form-group">
                        <label>Title of book</label>
                        <input type="text" name="title" className="form-control" placeholder="Title"
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" name="price" className="form-control" placeholder="Price"
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Image (url)</label>
                        <input type="text" name="image" className="form-control" placeholder="Image"
                        onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" onClick={this.addBook}>Add Book</button>
                    </div>
                </form>
                </div>
              </div>
            </div>
        )
    }
}

export default AddBook;