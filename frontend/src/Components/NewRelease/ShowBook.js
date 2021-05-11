import React, { Component } from 'react';
import request from 'superagent';
import BookList from "../Books/BookList"
import Header from '../Header/Header';

class ShowBook extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            sort: ''
        }
    }

    componentDidMount() {
        const BASE_URL = "http://localhost:8080/api/book/getbooks";
    request
        .get(BASE_URL)
        .then((data) => {
            this.setState({ items: [...data.body] })
        })
    }

    
    

    render() {
        const filteredBooks = this.state.items.sort((a, b) => {
            if(this.state.sort == 'Descending'){
                return parseInt(b.price.substring(1, 4)) - parseInt(a.price.substring(1, 4));
            }
            else if(this.state.sort == 'Ascending'){
                return parseInt(a.price.substring(1, 4)) - parseInt(b.price.substring(1, 4));
            }
          
          return;
        })

        return (
            <div className="wrapper">
                <Header />
               <BookList books={filteredBooks}/>
            </div>
        );
    }
}

export default ShowBook;