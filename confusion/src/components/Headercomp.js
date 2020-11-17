import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarText, Jumbotron, Nav, NavbarToggler, NavItem, 
            Collapse, Col,
            Button, Modal,ModalBody, ModalHeader, 
            Form, Label, Input, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Watch from './Clock';
//import Clock from './Clock'
//import H from '../shared/assets/images/logo.png'
//import ErrorBoundary from './ErrorBoundary';

class Header extends Component{
    constructor(props) {
        //console.log('ak :-',props);
        super(props);
        //console.log('pp :-',props);
        this.state = {
            isNavOpen : false,
            isModalOpen :false
        }

        this.toggleNav= this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
 
    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState ({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(e) {
        this.toggleModal();
        alert("Username: "+this.username.value + " Password: "+this.password.value + " Remember: "+ this.remember.checked);
        e.preventDefault();

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
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline={false} onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span> login
                                </Button>
                            </NavItem>
                        </Nav>
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
                        <div className="col-12 col-sm">

                            <Watch x ="jo\ker" />
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} charCode="x">Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" 
                            Ref={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" 
                            innerRef={(input) =>  {this.password = input; console.log((input));}} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="check" name="remember"
                                innerRef={(input) => this.remember = input} />
                                Remember Me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" >Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header;