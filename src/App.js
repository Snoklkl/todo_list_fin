import React from 'react';
import './App.css';
import Input from './components/input.js';
import ToDo from './components/todo.js';

import {useSelector} from 'react-redux'
import { selectTodoList } from './features/todoSlice.js'


function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
        <div className='container'>
          <div className='todo_container'>

            {
              todoList.map( item => { return(
                <ToDo 
                      name={item.item}
                      done={item.done}
                      id={item.id}
               />)}
              )
              }
            

          </div>
          <Input />   
        </div>
    </div>
  );
}

export default App;
