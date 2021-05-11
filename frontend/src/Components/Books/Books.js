import React, { Component } from 'react';
import BookList from './BookList';
import SearchBox from '../SearchBox/SearchBox';
import request from 'superagent';

class Books extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            searchField: '',
            sort: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        const BASE_URL = "https://api.itbook.store/1.0/search/";
        const updatedURL = `${proxyURL}${BASE_URL}`;
        request
        .get(updatedURL)
        .query({ q: this.state.searchField })
        .then((data) => {
            console.log(data)
            this.setState({ items: [...data.body.books] })
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        this.setState({ sort: e.target.value});
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
                <SearchBox 
                    data={this.state} 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    handleSort={this.handleSort}
                />
               <BookList books={filteredBooks}/>
            </div>
        );
    }
}

export default Books;