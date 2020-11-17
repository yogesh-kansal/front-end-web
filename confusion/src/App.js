import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
//import Main from './components/menucomp';

import './App.css';
import Maincomp from './components/mainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigStore } from './redux/configStore';
import ErrorBoundary from './components/ErrorBoundary'
const store= ConfigStore();
console.log("store is", store);

//import Dishes from './shared/dishes';
//import Clock from './components/Clock'

class App extends Component {
  /*constructor(props) {
    super(props);

    this.state={
      dishes:Dishes
    };

  }*/

  render() {
    //console.log(Component);
    return (
      <BrowserRouter>
        <div /*className="App"*/> 
        <ErrorBoundary>     
          <Maincomp/>
          </ErrorBoundary>                
        </div>
      </BrowserRouter>
      
    );
  }
  
  

}

export default App;
/*
<Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">React web App</NavbarBrand>
    <NavbarText className="text-white">
      <Clock />
    </NavbarText>
          </div>
        </Navbar>*/
       

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          now date is { new Date().toLocaleDateString()}{<br></br>}  tiem is {new Date().toLocaleTimeString()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}
*/


