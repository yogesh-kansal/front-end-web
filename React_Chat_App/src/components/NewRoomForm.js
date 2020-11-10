import React, { Component } from 'react';

class Newroom extends Component {
    constructor(props) {
        super(props);

        this.state= {
            
        };
    }

    render() {
        return(
            <div className="col-2">
                <form>
                    <div className="form-row">
                    <input type="twxt" placeholder="CreateNewRoom" className="col-10 form-control form-control-lg" required></input>
                    <button id="creteroom-btn" type="submit" className="col btn"> + </button>

                    </div>
                    
                </form>
                
            </div>              
        );

    }

}


export default Newroom;