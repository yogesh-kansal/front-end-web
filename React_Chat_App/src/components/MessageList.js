import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class MessageList extends Component {
    constructor(props) {
        super(props);
        
        this.state= {
        };
    }

    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight


    }

    render() {
        //console.log(this.props);
        if(this.props.length ===0) {
            return(
                <div className="col-9">
                    <div className="row align-items-cneter">
                        <div className="offset-4 mt-5">
                        <p>&larr; Join a room!</p>
                        </div>
                    
                    </div>
                    
                </div>
            );
        }
        return(
            <div className="message-list col-9">
                <h2>MessageList</h2>
                {this.props.messages.map((message, index) => {
                    return(
                        <Message key={index} username={message.senderId} text={message.text}/>                        
                    );
                })}
            </div>              
        );

    }

}


export default MessageList;