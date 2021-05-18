import React from 'react'
import './todo.css'
import  {useDispatch}  from 'react-redux';


const ToDo = ( {name, done, id}) => {

    const itemDone = () => {
        if ({done} === true){
            document.getElementById('toggle').style.textDecoration = "strike-through";
            
        }
        else {
            document.getElementById('toggle').style.textDecoration = "none";
        }
    }


    return (   
        <div className='todoList'>
            
            <button id='toggle' onClick={itemDone} className={'list_item'} >
  
                  {name}
                  

               </button>
 
                                        
                            


        </div>
    )


}

export default ToDo