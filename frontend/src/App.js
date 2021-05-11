import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Books from './Components/Books/Books';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import UserInfo from './Components/UserInfo/UserInfo';
import AddBook from './Components/NewBooks/AddBook';
import ShowBook from './Components/NewRelease/ShowBook';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Register} />
      <Route exact path='/userinfo' component={UserInfo} />
      <Route exact path='/addbook' component={AddBook} />
      <Route exact path='/newrelease' component={ShowBook} />
      <div className="App">
        <Header />
        <Books />
      </div>
    </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
