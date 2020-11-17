//const { Component } = require("react")

import React from 'react';
//import ErrorBoundary from './ErrorBoundary';

function Watch({x}) {
    if(x==="joker")
        throw new Error('ooooh');
    return (
        <div>{x}</div>
    );
    
}

/*class Clock extends Component {
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

*/
export default Watch;