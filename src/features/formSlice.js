import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    FormData: [
        
    ]
}

const formSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        saveForm: (state, action) => {
            
            return {
                ...state,
                Form: action.payload.Form
            }

            
        },

    }
});



        
export const { saveForm } = formSlice.actions       
        
export default formSlice.reducer

