import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
        Form, FormGroup, Button, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInpChange=this.handleInpChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.validate= this.validate.bind(this);
    }
    handleInpChange(e)
    {
        //console.log(e);
        const target=e.target;
        //console.log(target);
        const value = target.type === 'checkbox' ? target.checked :target.value;
        const name = target.name;
        //console.log(name, value);
        this.setState({            
            [name]: value
        });


    }

    handleSubmit(e) 
    {
        e.preventDefault();
        alert("Current state is: "+JSON.stringify(this.state));
    }

    handleBlur = ((feild) => (e) => {
        this.setState({
            touched: {...this.state.touched,[feild]:true}
        });
    })

    validate(firstname, lastname, telnum, email) {
        const err= {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',         
        };

        if(this.state.touched.firstname && firstname.length < 3)
            err.firstname ="First Name should br >= 3 characters";
        else if(this.state.touched.firstname && firstname.length > 10)
            err.firstname ="First Name should br <= 10 characters";

        if(this.state.touched.lastname && lastname.length < 3)
            err.lastname ="Last Name should br >= 3 characters";
        else if(this.state.touched.lastname && lastname.length > 10)
            err.lastname ="Last Name should br <= 10 characters";

        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
            err.telnum = "Tel. should contain only numbers";
        
            if(this.state.touched.email && email.split('').filter(x => x === '@').length !==1)
                err.email = "Email should contain @ sign";

        return err;

    }

    render() {
        const error = this.validate(this.state.firstname,this.state.lastname, this.state.telnum, this.state.email);
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb className="col-12">
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>    
                            </BreadcrumbItem>
                            <BreadcrumbItem active>contact us   
                            </BreadcrumbItem>                     
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contacts</h3>
                        </div>
                    </div>
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form
                        onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                    value={this.state.firstname}  
                                    onChange={this.handleInpChange}
                                    valid={error.firstname===''}
                                    invalid={error.firstname!==''}
                                    onBlur={this.handleBlur('firstname')} />
                                    <FormFeedback>{error.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleInpChange}
                                    valid={error.lastname ===''}
                                    invalid={error.lastname !==''}
                                    onBlur={this.handleBlur('lastname')}></Input>
                                    <FormFeedback>{error.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="tel. Number"
                                    value={this.state.telnum} 
                                    onChange={this.handleInpChange}
                                    valid={error.telnum ===''}
                                    invalid={error.telnum !==''}
                                    onBlur={this.handleBlur('telnum')}></Input>
                                    <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="E-mail"
                                    value={this.state.email} 
                                    onChange={this.handleInpChange}
                                    valid={error.email===''}
                                    invalid={error.email !==''}
                                    onBlur={this.handleBlur('email')} />
                                    <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <Col check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                            checked={this.state.agree}  onChange={this.handleInpChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </Col>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactType"
                                    value={this.state.contactType} onChange={this.handleInpChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>                                   
                                    </Input>
                                </Col>                                
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="6"
                                    value={this.state.message} onChange={this.handleInpChange} /> 
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>                           
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;