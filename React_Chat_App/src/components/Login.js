

//const { Component } = require("react")

import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state= {
            username:''
            
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e) {
        //console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        
        this.props.username(this.state.username)
        this.setState({
            username:''
        })
    }
    render() {
        //console.log(this.username);
        //console.log('kk');
        return(
            <div>
                
                <span >
                    <a data-toggle="modal" data-target="#loginmodal">
                        <span className="fa fa-sign-in"></span> login
                    </a>
                </span>
                
                <div id="loginmodal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-lg" role="content">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">login</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    &times;                        
                                </button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-sm-4">
                                            <label className="sr-only" htmlFor="exampleInputEmail3">UserName</label>
                                            <input type="text" className="form-control form-control-sm mr-1" id="username" placeholder="UserName"
                                            onChange={this.handleChange} value={this.state.username}></input>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                                            <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"></input>
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"></input>
                                                <label className="form-check-label"> Remember me </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary btn-sm ml-1"
                                        onClick={this.handleSubmit} data-dismiss="modal">log in</button>        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              
        );
    }

}


export default Login;