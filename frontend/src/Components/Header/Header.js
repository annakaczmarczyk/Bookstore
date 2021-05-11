import React from 'react';
import { Link } from 'react-router-dom';
import IsAdmin from '../Auth/IsAdmin';

const Header = () => {
  
  if (localStorage.getItem('user') === null)
    return (
      <header>
        <Link to="/newrelease"><h3>New release</h3></Link>
        <i className="fas fa-book fa-2x"></i>
        <Link to="/"><h1>Book Cards</h1></Link>
        <Link to="/login"><h5>Sign In</h5></Link>
        <Link to="/signup"><h5>Sign Up</h5></Link>  
      </header>  
    );
  else {
    let userName = localStorage.getItem('user')
    let user = JSON.parse(userName)
    let name = user.username
    let role = user.roles
    if(role == "ROLE_USER")
      return (
        <header>
          <Link to="/newrelease"><h3>New release</h3></Link>
          <i className="fas fa-book fa-2x"></i>
          <Link to="/"><h1>Book Cards</h1></Link>
          <div className="userinfo">
            <Link to="/userinfo"><h4>{name}</h4></Link>
            <button type="button" className="btn btn-primary" onClick={onClick}>Logout</button>
          </div>
        </header>       
      );
      else {
        return (
          <header>
          <Link to="/newrelease"><h3>New release</h3></Link>
          <Link to="/addbook"><h3>Add Book</h3></Link>
          <i className="fas fa-book fa-2x"></i>
          <Link to="/"><h1>Book Cards</h1></Link>
          <div className="userinfo">
            <Link to="/userinfo"><h4>{name}</h4></Link>
            <button type="button" className="btn btn-primary" onClick={onClick}>Logout</button>
          </div>
        </header> 
        )
      }
    }
    function onClick(e) {
      e.preventDefault();
      localStorage.clear();
      window.location.reload(false);
    }
}

export default Header;


