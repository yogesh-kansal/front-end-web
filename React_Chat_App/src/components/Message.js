//const { Component } = require("react")

import React, { Component } from 'react';
import '../component.css'
class Message extends Component {
    constructor(props) {
        super(props);

        this.state= {
            date:new Date()
        };
    }

    render() {
        return(
            <div className="">
                <div className="message">
                            <div className="message-username">{this.props.username}</div>
                            <div className="message-text"><span className="badge-pill badge-primary">{this.props.text}</span></div>
                        </div>
                
            </div>              
        );

    }

}


export default Message;