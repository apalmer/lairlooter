import { configureStore } from "@reduxjs/toolkit";
import roomReducer from './roomSlice';
import characterReducer from './characterSlice';

export default configureStore({ 
    reducer: { 
      room: roomReducer,
      character: characterReducer
    },
});
