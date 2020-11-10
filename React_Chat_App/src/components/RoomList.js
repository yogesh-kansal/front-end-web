import React, { Component } from 'react';

class Roomlist extends Component {
    constructor(props) {
        super(props);

        this.state= {
        };
    }

    render() {
        //console.log(this.props.rooms);
        return(
            <div className="col-2 bg-info">
                <h3 className="room-head ml-2">  Your Room List</h3>
                <ul className="list-unstyled">
                {this.props.rooms.map((room) => {
                    const active = this.props.roomId === room.Id ? "active":"";
                    //console.log(room.Id);
                    //console.log(this.props.roomId);
                    return(
                        <li key={room.Id} className={active}>
                        
                            <a onClick={()=> this.props.subscribetoroom(room.Id)} 
                                href="#" className="room-name offset-1">
                                {room.name}
                            </a>
                        </li>
                    );
                    
                })}
                </ul>
                
            </div>              
        );
 
    }

}


export default Roomlist;