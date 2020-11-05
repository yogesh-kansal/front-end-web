import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarText, Jumbotron, Nav, NavbarToggler, NavItem, Collapse, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Clock from './Clock'
//import H from '../shared/assets/images/logo.png'

class Header extends Component{
    constructor(props) {
        //console.log('ak :-',props);
        super(props);
        //console.log('pp :-',props);
        this.state = {
            isNavOpen : false
        }

        this.toggleNav= this.toggleNav.bind(this);
    }
 
    toggleNav() {
        this.setState ({
            isNavOpen:!this.state.isNavOpen
        })
    }



    render() {
        return (
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" alt="logo" height="30" width="41"/>
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>                                
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About
                                    </NavLink>                                
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>                         
                                </NavItem>

                                <NavItem>                                    
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    <NavbarText className="text-white">
                        <Clock />
                    </NavbarText>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1> Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        );
    }
}

export default Header;