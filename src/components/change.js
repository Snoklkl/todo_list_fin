//Imports:
import React from 'react';
import './change.css';
import  {useDispatch}  from 'react-redux';
import {filterDone, filterAll, filterUn} from '../features/todoSlice.js';

//Module for buttons that will conditionally display "todos" the user wants to see based on their completion:
const Change = () => {
    //Three functions for each of three buttons, changing the "visibility" state of a todo based on the state of their "done":
    const dispatch = useDispatch()
    //Only displays "todos" that have their "done" state equal to "true":
    const visibilityDone = () => {
        dispatch(filterDone())
    }
    //Displays all "todos", without care to the state of their "done":
    const visibilityAll = () => {
        dispatch(filterAll())
    }
    //Only displays "todos" that have their "done" state equal to "false":
    const visibilityUn = () => {
        dispatch(filterUn())
    }
    //Returns button for each of the condition options:
    return (   
            <div className="todoList">
                <button onClick={visibilityAll} class="toggleButton"> All</button>
                <button onClick={visibilityDone} class="toggleButton"> Finished</button>
                <button onClick={visibilityUn} class="toggleButton"> Unfinished</button>
            </div>
        )
    }    
export default Change