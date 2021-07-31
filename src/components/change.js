import React from 'react';
import './change.css';
import  {useDispatch}  from 'react-redux';
import {filterDone, filterAll, filterUn} from '../features/todoSlice.js';


const Change = () => {
    const dispatch = useDispatch()
    const visibilityDone = () => {
        dispatch(filterDone())
    }
    const visibilityAll = () => {
        dispatch(filterAll())
    }
    const visibilityUn = () => {
        dispatch(filterUn())
    }


    return (   
            <div className="todoList">
                <button onClick={visibilityAll} class="toggleButton"> All</button>
                <button onClick={visibilityDone} class="toggleButton"> Finished</button>
                <button onClick={visibilityUn} class="toggleButton"> Unfinished</button>
            </div>
        )
    }
    
    
    
    
    export default Change