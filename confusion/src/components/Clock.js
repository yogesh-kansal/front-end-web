//const { Component } = require("react")

import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state= {
            date:new Date()
        };
    }

    render() {
        return(
            <div>
                <p>It is rendering on {this.state.date.toLocaleDateString()} at {this.state.date.toLocaleTimeString()}.</p>
            </div>              
        );

    }

}


export default Clock;