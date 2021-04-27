import './App.css'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navigation from './components/nav/Navbar';
import Homepage from './components/homepage/Homepage';

function App() {  
  return (
    <BrowserRouter>
    <div className="App">
    <Navigation />
    <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    
      
        
        
      </div>
      </BrowserRouter>
  );
}

export default App;

