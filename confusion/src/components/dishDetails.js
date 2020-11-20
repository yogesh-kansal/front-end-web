import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';

import { Modal, Col, Row, Label, ModalHeader, ModalBody} from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link }  from 'react-router-dom';

import LoadingSpinner from './loadingSpinner';

const required = (value) => value && value.length;
const max_len = ((len) => (val) => !(val) ||(val.length <= len));
const min_len = ((len) => (val) => val && (val.length >= len));

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            isOpen:true
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleSubmit(values) {
        //alert("Comment state is: "+JSON.stringify(values));
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(values);
        this.props.comment(this.props.dishId, values.rating,values.name, values.message);
    }
    
    render() {
        return (            
            <Modal isOpen ={this.state.isOpen} toggle ={this.handleToggle}>
                <ModalHeader toggle={this.handleToggle} >Add comment</ModalHeader>
                <ModalBody>
                    <LocalForm
                    onSubmit={(values)=> this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" name="rating" className="col-12">Rating</Label>
                            <Col className="m-2 mt-0">
                                <Control.select model=".rating" id="rating" name="rating"
                                className="form-control row">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                            
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" id="name" className="col-12">Name</Label>
                            <Col className="m-2 mt-0">
                                <Control.text model=".name" id="name" name="autor" placeholder="Your name"
                                className="form-control row"
                                validators={{
                                required, minLength: min_len(3),maxLength:max_len(15)}}/>
                                <Errors 
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                    required: 'required!!!',
                                        minLength: 'name must greater than 2 chars',
                                        maxLength: 'name must less than 15 chars'
                                    }}
                                    >
                                </Errors>
                            </Col>    
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="message" className="col-12">your Feedback</Label>
                                <Col className="m-2 col-8 mt-0">
                                    <Control.textarea model=".message" id="message" name="comment" rows="6"
                                    className="form-control" /> 
                                </Col>
                        </Row>
                        <Row className="form-group">
                             <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary" disabled={false}>
                                    Add Comment
                                </Button>
                            </Col>
                        </Row> 
                    </LocalForm>
                </ModalBody>      
            </Modal>
        );
    }
}


class Dishdetail extends Component {
    constructor(props) {
        super(props);
        //console.log(props);

        this.state= {
            date:new Date(),
            yes: false
        };
        this.call=this.call.bind(this);
    }

    call() {
        this.setState({
            yes:!this.state.yes
        })
    }

    render() {
        if(this.props.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <LoadingSpinner />
                    </div>
                </div>
            );
        }
        else if(this.props.err) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.err}</h4>
                    </div>
                </div>
            );
        }
        else if(this.props.dishdetail != null) {
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dishdetail.name}</BreadcrumbItem>                     
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dishdetail.name}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                            <CardImg width="40%" src={this.props.dishdetail.image} alt={this.props.dishdetail.name} />
                            <CardBody>
                                <CardTitle>{this.props.dishdetail.name}</CardTitle>
                                <CardText>{this.props.dishdetail.description}</CardText>
                            </CardBody>
                        </Card>                      
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardTitle>Comments</CardTitle>
                            {this.props.comments.map((comment) => {
                                return(
                                <div key={comment.id}>
                                    <CardText className="ml-2">{() => {
                                        return(                                       
                                            <span className="fa fa-star"></span>                                        
                                        );
                                    }}<span className="fa fa-star"></span></CardText>
                                    <CardText className="ml-2">{comment.comment}</CardText>
                                    <CardText className="ml-2">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} {<br></br>} {<br></br>}</CardText>                                  
                                </div>
                                );
                            })}  
                            <div className="col">
                                <Button outline={true} color="primary" onClick={this.call}>
                                    <span className="fa fa-pencil fa-lg"> </span> Add Comments
                                </Button>
                                {this.state.yes?<CommentForm dishId={this.props.dishdetail.id} comment={this.props.addComment} /> : null}
                            </div>  
                                             
                        </Card>

                    </div>
                                   
                </div>   
                </div>      
            );
        }
        else {
            return(<div></div>);
        }       
    }
}


export default Dishdetail;

    