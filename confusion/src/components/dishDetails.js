import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link }  from 'react-router-dom';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state= {
            date:new Date()
        };
    }

    render() {
        if(this.props.dishdetail != null) {
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
                                    <CardText className="ml-2">{comment.comment}</CardText>
                                    <CardText className="ml-2">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} {<br></br>} {<br></br>}</CardText>                                  
                                </div>
                                );
                            })}                           
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

    