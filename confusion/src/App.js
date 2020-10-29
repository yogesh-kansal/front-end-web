import React, {Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menucomp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div /*className="App"*/>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">React web App</NavbarBrand>

          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}



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
export default App;
