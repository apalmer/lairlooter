import React from "react";
import './Room.css';

function Room(props){

    return (
        <div>
            <p>{props.currentRoomName}</p>
            <p>{props.currentRoom.description}</p>
        </div>
    ); 
} 

export default Room