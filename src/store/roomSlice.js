import { createSlice } from "@reduxjs/toolkit";

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
  
  const roomName = "start";
  const room = lair.rooms[roomName];
  room.name = roomName;
  
  const roomSlice = createSlice({
    name: 'room',
    initialState: {
        room: room
    },
    reducers: {
      navigate: (state, exitAction) => {

        const exits = state.room.exits;
        if (!exits) { return }
  
        const nextRoomName = exits[exitAction.payload];
        if (!nextRoomName) { return }
  
        const nextRoom = lair.rooms[nextRoomName];
        if (!nextRoom) { return }
        if(!nextRoom.name){
          nextRoom.name = nextRoomName
        }
  
        state.room = nextRoom;
      }
    }
  })
  
  export const { navigate } = roomSlice.actions;
  export default roomSlice.reducer;