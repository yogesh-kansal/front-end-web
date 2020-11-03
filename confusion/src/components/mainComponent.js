import React, {Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import Menu from './menucomp';
import Dishes from '../shared/dishes';
//import Clock from './Clock'
import Dishdetail from './dishDetails';
import Header from './Headercomp';
import Footer from './Footercomp';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

class Maincomp extends Component {
  constructor(props) {
    super(props);

    this.state={
      dishes:Dishes,
      selectedDish: null
    };

  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
    }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
      <div /*className="App"*/>
        <Header /> 
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  
  

}

export default Maincomp;

/*
<Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">React web App</NavbarBrand>
    <NavbarText className="text-white">
      <Clock />
    </NavbarText>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes}
              onClick={(dishId) => this.onDishSelect(dishId)}/>
        <Dishdetail dishdetail={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        
*/