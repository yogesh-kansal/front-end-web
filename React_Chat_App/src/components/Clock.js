//const { Component } = require("react")

import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state= {
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
        };
    }
    
    componentDidMount() {
        //console.log("ppp");
        this.setState({
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()            
        })
    }

    render() {
        //console.log("jjj");
        return(
            <div className="text-white">
                <p >It is rendering on {this.state.date} at {this.state.time}.</p>
                
            </div>              
        );
    }

}


export default Clock;