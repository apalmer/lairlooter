import React from "react";
import './Character.css'

import { useSelector } from 'react-redux'

function Character(props) {

    let state = useSelector( state => {
        return state.character
    })
        
    function handleAction(event, action) {
        event.preventDefault();
        if(props.onCharacterAction){
            return props.onCharacterAction(event, action)
        }
    }

    return (
        <div>
            <h1>{state.character.name}</h1>
            <ul>
                <li><span>Hit Points: {state.character.hitPoints}</span></li>
                <li><span>Defense: {state.character.armorClass}</span></li>
            </ul>
            <ul>
                <li><button onClick={(event) => handleAction(event, "attack")}>Attack</button></li>
                <li><button onClick={(event) => handleAction(event, "item")}>Use Item</button></li>
            </ul>
        </div>
    );
}

export default Character;