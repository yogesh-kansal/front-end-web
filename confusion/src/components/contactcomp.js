import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,  Button, Label, Col, Row,
        /*Form, FormGroup, Input, FormFeedback*/ } from 'reactstrap';
import { Link } from'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (value) => value && value.length;
const max_len = ((len) => (val) => !(val) ||(val.length <= len));
const min_len = ((len) => (val) => val && (val.length >= len));
const isNum =(val) => !isNaN(Number(val));
const validEmail =(val)=> /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        /*this.state = {
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
        }*/
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleInpChange=this.handleInpChange.bind(this);
        //this.handleBlur=this.handleBlur.bind(this);
        //this.validate= this.validate.bind(this);
    }

    handleSubmit(values) 
    {
        //e.preventDefault();
        alert("Current state is: "+JSON.stringify(values));
    }
   
    render() {
       // const error = this.validate(this.state.firstname,this.state.lastname, this.state.telnum, this.state.email);
        //const isEnabled = Object.keys(error).some(x => error[x].length !== 0);
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
                    <div className="col-7 Contact">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm
                        onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name"
                                    className="form-control"
                                    validators= {{
                                        required, minLength :min_len(3), maxLength: max_len(10)
                                    }} />
                                    <Errors 
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'requied',
                                            minLength: 'must greater than 2 chars',
                                            maxLength: 'mush less than 11'
                                        }}
                                        >
                                    </Errors>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname"  id="lastname" name="lastname" placeholder="Last Name"
                                    className="form-control" 
                                    validators= {{
                                        required, minLength :min_len(3), maxLength: max_len(10)
                                    }} />
                                    <Errors 
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'requied',
                                            minLength: 'must greater than 2 chars',
                                            maxLength: 'mush less than 11'
                                        }}
                                        >
                                    </Errors>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="tel. Number"
                                    className="form-control" 
                                    validators= {{
                                        required, minLength :min_len(10), maxLength: max_len(10),isNum
                                    }} />
                                    <Errors 
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'requied',
                                            minLength: 'must be 10 number',
                                            maxLength: 'must be 10 number',
                                            isNumber: 'should be a number'
                                        }}
                                        >
                                    </Errors>                                    
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>E-mail</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="E-mail"
                                    className="form-control" 
                                    validators= {{
                                        required, validEmail
                                    }} />  
                                    <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'requied',
                                            validEmail: 'format should be correct'
                                        }}
                                        >
                                    </Errors>    
                                                          
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                            className="form-check-input"/> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:4, offset:0}}>
                                    <Control.select model=".contactType" name="contactType"
                                    className="form-control" >
                                        <option>Tel.</option>
                                        <option>Email</option>                                   
                                    </Control.select>
                                </Col>                                
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="6"
                                    className="form-control" /> 
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary" disabled={false}>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>                          
                        </LocalForm>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;

/**
 * value={this.state.firstname}  
    onChange={this.handleInpChange}
    valid={error.firstname===''}
    invalid={error.firstname!==''}
    onBlur={this.handleBlur('firstname')}
 */

    /*handleInpChange(e)
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


    }*/

    /*
    handleBlur = ((feild) => (e) => {
        //console.log(e);
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

        //const reg = /^\d+$/;
        const reg = /^-?\d{10}$/;
        //console.log(reg);
        if(this.state.touched.telnum && !reg.test(telnum))
            err.telnum = "Tel. should contain only 10 numeric numbers ";


        const pattern= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            //if(this.state.touched.email && email.split('').filter(x => x === '@').length !==1)
            if(this.state.touched.email && ! pattern.test(email))
                err.email = "Email should of form abc@gmail.com";

        
        return err;

    }*/