//Imports:
import React from 'react'
import './todo.css'
import  {useDispatch}  from 'react-redux';
import {toggleCheck, removeTodo} from '../features/todoSlice.js'
//Module that App.js will use to display each "todo":
const ToDo = ( {name, done, id, visible}) => {
    //Function to delete a todo from the list:
    const deleteTodo = ()  => {
        dispatch(removeTodo(id))
    }
    const dispatch = useDispatch()
    //Function used to toggle whether the state of a todo is "done":
    const itemDone = () => {
      dispatch(toggleCheck(id))
    }
    //inputStyle and visStyle are used to give a "todo" stylings based on being "done" or what the user wants to see between "All, Finished, Unfinished":
    let inputStyle = {
        textDecoration: "line-through"
    };
    if (done === true){
        inputStyle = {
            textDecoration: 'line-through'
        }
    }
    else{
        inputStyle = {
            textDecoration: 'none',
        }
    }
    let visStyle = {
        display: "block"
    }
    if (visible === true){
        visStyle = {
            display: 'block'
        }
    }
    else{
        visStyle = {
            display: 'none',
        }
    }
   //Returns the html to display a "todo":
    return (   
        <div style={{visStyle}} className='todoList'>   
            <button style={{...inputStyle, ...visStyle}} onClick={itemDone} className={'list_item'}>
                    <p id={id}>
                  {name}
                    </p>
                    <button class="bi bi-trash" property={done} onClick={deleteTodo} ></button>
               </button>
                </div>
    )
}
export default ToDo