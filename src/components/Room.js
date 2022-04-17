import React from "react";
import './Room.css';

import { useSelector } from 'react-redux'

function Room(props){

    let state = useSelector( state => {
        return state.room
    })

    return (
        <div>
            <p>{state.room.name}</p>
            <p>{state.room.description}</p>
        </div>
    ); 
} 

export default Room