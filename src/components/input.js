import React, {useState} from 'react'
import './input.css'

import  {useDispatch}  from 'react-redux'
import {saveToDo} from '../features/todoSlice';

const Input = () => {
    const [input , setInput ] = useState('')
    
    const dispatch = useDispatch()  

    const addToDo = () => {
        console.log("Add " + input)

        dispatch(saveToDo({
            

            item: input,
            done: false,
            id: Date.now()


         } ) )
    }

    return (
        <div className='input'>

            <input type="text" value={input} onChange={e => setInput(e.target.value)} /> 
            <button onClick={addToDo}> Add Task!  </button>
       

        </div>
    )
}
 

export default Input
