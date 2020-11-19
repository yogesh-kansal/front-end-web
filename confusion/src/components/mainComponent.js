import React , {Component } from 'react';
import { Switch, Route , Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
//import Clock from './Clock'

// moved to redux store
//import Dishes from '../shared/dishes';
//import { Comments } from '../shared/comments';
//import { Promotions } from '../shared/promotions';
//import { Leaders } from '../shared/leaders';

import Home from './Home';
import Header from './Headercomp';
import Footer from './Footercomp';
import Menu from './menucomp';
import Contact from './contactcomp';
import Dishdetail from './dishDetails';
import About from './aboutcomp';
import {addcomment} from '../redux/actions';

const takedataASProps = state => {
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions: state.promotions,
    leaders : state.leaders
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addComment: (dishId, rating, author, comment) => dispatch(addcomment(dishId, rating, author, comment))
  }
}

class Maincomp extends Component {
  /*constructor(props) {
    super(props);
    /*this.state={
      dishes:Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      selectedDish: null
    };

  }

  /*onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
    }*/

  render() {

    const HomePage = () => {
      return(
        <Home 
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promos={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishwithId = ({match}) => {
      //console.log(match);
      return(
        <Dishdetail dishdetail={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment = {this.props.addComment}/>
      );
    }
    return (
      <div /*className="App"*/>
        <Header /> 
        <Switch>
          <Route path="/home" component={HomePage} /> 
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(takedataASProps, mapDispatchToProps)(Maincomp));


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