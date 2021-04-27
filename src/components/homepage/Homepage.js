import axios from 'axios';
import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import List from './List.js'

const api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes?q="
})

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
                
            };
            this.search = this.search.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.handleKeyPress = this.handleKeyPress.bind(this)
          }

          handleKeyPress(e){
              if(e.key === "Enter")
              this.search();
          }

          handleChange(e){
              this.setState({
                  query: e.target.value
              })
          }

          search(){
            let query = this.state.query;
            api.get(query)
            .then(res => {
                console.log(res.data)
                let {items} = res.data;
                this.setState({
                    items : items
                })
            })  
          }

          render() {
              return(
                <div className="homepage mt-5"> 
                    <FormControl type="text" placeholder="Search for a book" onChange={this.handleChange}
     onKeyPress={this.handleKeyPress}/>
                    <button className="btn btn-danger" onClick={this.search}>Search</button>
                    <List items={this.state.items}>
                    </List>
                </div>   
              )
          }
}
export default Homepage;