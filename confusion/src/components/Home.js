import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'; 
import LoadingSpinner from './loadingSpinner';

function RenderCard({item,isLoading, err}) {
    if(isLoading) {
        return(
            <LoadingSpinner />
        );
    }
    else if(err) {
        return (
        <h4>{err}</h4>
        );
    }
    else {
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }   
}


function Home(props) {
    //console.log(props);
    return(
    <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard 
                    item={props.dish} 
                    isLoading ={props.dishloading} 
                    err={props.disherr}
                />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promos}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader}/>
            </div>
        </div>
    </div>);
}

export default Home;