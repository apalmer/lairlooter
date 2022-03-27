import React from "react";
import './Character.css'

function Character(props) {

    function handleAction(event, action) {
        event.preventDefault();
        if(props.onCharacterAction){
            return props.onCharacterAction(event, action)
        }
    }

    return (
        <div>
            <h1>{props.character.name}</h1>
            <ul>
                <li><span>Hit Points: 20</span></li>
                <li><span>Defense: 15</span></li>
            </ul>
            <ul>
                <li><button onClick={(event) => handleAction(event, "attack")}>Attack</button></li>
                <li><button onClick={(event) => handleAction(event, "item")}>Use Item</button></li>
            </ul>
        </div>
    );
}

export default Character;