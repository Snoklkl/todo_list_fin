import { createSlice } from '@reduxjs/toolkit'



const todosSlice = createSlice({
    name: 'todos',
 
    initialState: [],

    reducers: {
        saveToDo: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {
    saveToDo
} = todosSlice.actions

export default todosSlice.reducer