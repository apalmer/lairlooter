import { createSlice } from "@reduxjs/toolkit"

const character = {
    name: "diggy",
    hitPoints: 20,
    armorClass: 15,
    inventory: [
        { name: 'healing potion', effect: { type: "heal", magnitude: 5 } }
    ]
}

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        character: character
    },
    reducers: {
        attack: (state, attackAction) => {
            state.character.hitPoints -= attackAction.payload
        }
    }
})

export const { attack } = characterSlice.actions;
export default characterSlice.reducer;