import React from 'react'
import './todo.css'
import  {useDispatch}  from 'react-redux';
import {toggleCheck, removeTodo} from '../features/todoSlice.js'

const ToDo = ( {name, done, id}) => {
    let inputStyle = {
        visibility: "line-through"
    };
    const changeView = (view) => {
        if (view === "all") {
            
        }
        else if (view === "done") {

        }

        else{

        }

    }
    
    if (done === true){
        inputStyle = {
            textDecoration: 'line-through'
        }
    }

    else{
        inputStyle = {
            textDecoration: 'none'
        }
    }
    
    



    return (   
    
        <div className='todoList'>
    

            <button style={inputStyle} onClick={itemDone} className={'list_item'} >
                    <p id={id}>
                  {name}
                
                    </p>
                    
               </button>
               <button class="bi bi-trash" onClick={deleteTodo} ></button>
                                        
                            


        </div>
    

    )
}


export default ToDo