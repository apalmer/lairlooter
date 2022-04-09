import { useState } from 'react';

import './App.css';

import Character from './components/Character';
import Room from './components/Room';

function App() {

  const character = {
    name: "diggy"
  }

  const lair = {
    rooms: {
      "start": {
        description: "starting room",
        exits: {
          "north": "first"
        }
      },
      "first": {
        description: "looks like a room",
        exits: {
          "north": "second"
        }
      },
      "second": {
        description: "looks like another room",
        exits: {
          "north": "third",
          "south": "first"
        }
      },
      "third": {
        description: "surprise, yet another room",
        exits: {
          "north": "end",
          "south": "second"
        }
      },
      "end": {
        description: "end",
      }
    }
  }

  const currentRoomName = "start";
  const currentRoom = lair.rooms[currentRoomName];

  const [state, setState] = useState({
    character: character,
    lair: lair,
    currentRoomName: currentRoomName,
    currentRoom: currentRoom
  })

  function handleNavigation(event, direction) {
    event.preventDefault();

    setState((prevState) => {

      const exits = prevState.currentRoom.exits;
      if (!exits) { return prevState }

      const nextRoomName = exits[direction];
      if (!nextRoomName) { return prevState }

      const nextRoom = prevState.lair.rooms[nextRoomName];
      if (!nextRoom) { return prevState }

      return {
        ...prevState,
        currentRoomName: nextRoomName,
        currentRoom: nextRoom
      }
    });
  }

  function handleCharacterAction(event, action) {
    event.preventDefault();

    console.log('char act');
  }

  return (
    <main>
      <aside>
        <Character character={state.character} onCharacterAction={handleCharacterAction}></Character>
      </aside>
      <div className="wrapper">
        <nav className="nav-wrapper">
          <ul className="ul-wrapper">
            <li className="north"><a href="#/north" onClick={(event) => handleNavigation(event, "north")}>north</a></li>
            <li className="south"><a href="#/south" onClick={(event) => handleNavigation(event, "south")}>south</a></li>
            <li className="west"><a href="#/west" onClick={(event) => handleNavigation(event, "west")}>west</a></li>
            <li className="east"><a href="#/east" onClick={(event) => handleNavigation(event, "east")}>east</a></li>
          </ul>
        </nav>
        <div className="viewer">
          <Room currentRoomName={state.currentRoomName} currentRoom={state.currentRoom}></Room>
        </div>
      </div>
    </main>
  );
}

export default App;