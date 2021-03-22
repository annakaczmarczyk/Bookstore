import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {
constructor(props){
super(props);

  this.state = {
  books:[
        {id:0, rating: 5, title: 'Czysty kod', image: 'picture1.jpg'},
        {id:1, rating: 3, title: 'Mein Kampf', image: 'picture2.jpg'},
        {id:2, rating: 2, title: 'Cyrk nocy', image: 'picture3.jpg'},
        {id:3, rating: 5, title: 'Kwestia ceny', image: 'picture4.jpg'},
        {id:4, rating: 3, title: 'Paragraf 22', image: 'picture5.jpg'},
        {id:5, rating: 5, title:'JavaScript Wzorce', image:'picture6.jpg'},
        {id:6, rating: 5, title:'Pan Tadeusz', image:'picture7.jpg'},
        {id:7, rating: 5, title:'Lalka', image:'picture8.jpg'}
      ],
      
      };
}
  render(){
  return (
    <div className="app">
      <Menu title="Bookstore★SMART★" />
      <List items={this.state.books} />
    </div>
  );
}
}
export default App;
