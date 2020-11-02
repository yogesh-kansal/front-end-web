import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state= {
            date:new Date()
        };
    }

    render() {
        if(this.props.dishdetail != null) {
            return(
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
                            {this.props.dishdetail.comments.map((comment) => {
                                return(
                                <div key={comment.id}>
                                    <CardText className="ml-2">{comment.comment}</CardText>
                                    <CardText className="ml-2">--{comment.author}, {comment.date}{<br></br>} {<br></br>}</CardText>                                  
                                </div>
                                );
                            })}                           
                        </Card>

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

    