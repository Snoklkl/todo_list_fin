import React from 'react'
import './todo.css'
import  {useDispatch}  from 'react-redux';
import {toggleCheck, removeTodo} from '../features/todoSlice.js'


const ToDo = ( {name, done, id, visible}) => {

  

    const deleteTodo = ()  => {
        dispatch(removeTodo(id))
    }

    const dispatch = useDispatch()

    const itemDone = () => {
      dispatch(toggleCheck(id))
    }

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