//const { Component } = require("react");

import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import Dishdetail from './dishDetails';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props)
    {
        console.log('cons. Did called');
        super(props);

/*        this.state= {
            selectedDish:null
            };*/
        
            
    }
    componentDidMount() {
        console.log('Did called');
    } 
    componentWillMount() {
        console.log('will called');
    }

   /* onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }*/
    
    /*renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                <CardImg width="40%" src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
            );            
        }
        else {
            return(<div></div>);
        }
        
    }*/
    render() {
        console.log('render Did called');

        const menu= this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card >
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>    
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu  
                        </BreadcrumbItem>                     
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>
                </div>

                <div className="row">
                        {menu}
                </div>
                    
            </div>
        );
    } 
}

export default Menu;

/*
<Dishdetail dishdetail={this.state.selectedDish} />
*/