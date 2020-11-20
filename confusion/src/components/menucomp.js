//const { Component } = require("react");

import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import LoadingSpinner from './loadingSpinner';
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
        const menu= this.props.dishes.dishes.map((dish) => {
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

        if(this.props.dishes.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <LoadingSpinner />
                    </div>
                </div>
            );
        }
        else if(this.props.dishes.err) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.dishes.err}</h4>
                    </div>
                </div>
            );
        }
        else {
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
}
export default Menu;

/*
<Dishdetail dishdetail={this.state.selectedDish} />
*/