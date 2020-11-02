import React, {Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import Menu from './menucomp';
import Dishes from '../shared/dishes';
import Clock from './Clock'
import Dishdetail from './dishDetails';

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
    return (
      <div /*className="App"*/>
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
      </div>
    );
  }
  
  

}

export default Maincomp;