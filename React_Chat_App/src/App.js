import React, {Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import './App.css';
import './component.css'
import Clock from './components/Clock'
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import Data from './shared/dishes';
import Rooms from './shared/rooms'
import Login from './components/Login'

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      messages:[],
      rooms:Rooms,
      roomId:null
    };
    this.currentUser={
      name: '',
      joinedrooms:[]
    }
    this.SendMessage = this.SendMessage.bind(this);
    this.subscriberoom = this.subscriberoom.bind(this);
    //this.getusername=this.getusername.bind(this);
  }
  componentDidMount() {

  }
  SendMessage(text)
  {
    var message={
      senderId:this.currentUser.name,
      text:text
    }
    //console.log(message);
    if(this.currentUser.name.length===0 ) {
      alert("you have not been logged in.");
    }
    else {
      this.setState({
        messages: [...this.state.messages,message]
      })  
    } 
  }
  subscriberoom(roomId) {
    //console.log(roomId);
    this.setState({
      messages: Data
    })
    
    this.setState({
      currentUser:{
        joinedrooms:this.currentUser.joinedrooms.push(roomId)
      },
      roomId:roomId
    })

  }

  getusername(Name) {
    console.log(Name);
    this.currentUser.name=Name

  }

  render() {
    //console.log(this.currentUser);
    //console.log(this.roomId);
    return (
      <div /*className="App"*/> 
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="#"><span className="fa fa-whatsapp fa-lg"> </span> React Chat App</NavbarBrand>
            <NavbarText>
              <Login username={(name) => this.getusername(name)}/>
            </NavbarText>
            </div>
          </Navbar>
  
            <div className="row row-content-main">
              <RoomList 
              roomId={this.state.roomId}
              subscribetoroom={this.subscriberoom} rooms={this.state.rooms}/>
              <MessageList messages={this.state.messages} 
              length={this.currentUser.joinedrooms.length}/>
            </div>
            <footer className="row row-content">
              <NewRoomForm />
              <SendMessageForm 
              length={!this.currentUser.joinedrooms.length}
              SendMessage={this.SendMessage} />
              
            </footer>
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

