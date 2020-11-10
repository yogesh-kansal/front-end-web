import React, { Component } from 'react';

class SendMessageForm extends Component {
    constructor(props) {
        super(props);

        this.state= {
            message: []
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        })

    }
    handleSubmit(e) {
        e.preventDefault() 
        /* sends messages */
        this.props.SendMessage(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        //console.log(this.state.message);
        return(
            <form 
            onSubmit={this.handleSubmit}
            className="col mb-2">
                <div className="form group row">
                <input  
                    disabled={this.props.length}
                    onChange={this.handleChange} 
                    value={this.state.message}
                    className="form-control form-control-lg" placeholder="type message here" type="text">
                </input>
                </div>

                
            </form>
                          
        );

    }

}


export default SendMessageForm;