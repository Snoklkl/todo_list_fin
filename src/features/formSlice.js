import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    FormData: [
    ]
}
//Updates the state of form data to reflect what is being done to the form on the user end:
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
//Export reducer for form.js:
export const { saveForm } = formSlice.actions           
export default formSlice.reducer

