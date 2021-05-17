import React from 'react'
import './todo.css'


const ToDo = ( {name, done, id}) => {



    return (   
        <div className='todoList'>
            
            <div className={`list_item ${done ? "completed_item" : ""} 
              `} >
  
                  {name}


                
            </div>
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input>

        </div>
    )


}

export default ToDo