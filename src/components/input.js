//Imports:
import React, {useState} from 'react'
import './input.css'
import  {useDispatch}  from 'react-redux'
import {saveToDo} from '../features/todoSlice';
//Input module that will go to App.js, will be used to add tasks to the todo list:
const Input = () => {
    //Consts and function to update and create new state object/todo task:
    const [input , setInput ] = useState('')  
    const dispatch = useDispatch()  
    const addToDo = () => {
        dispatch(saveToDo({
            visible: true,
            item: input,
            done: false,
            id: Date.now(),
         } ) )
    }
    //Returns html for an input and button to add a task:
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} /> 
            <button onClick={addToDo}> Add Task!  </button>
        </div>
    )
}
export default Input
