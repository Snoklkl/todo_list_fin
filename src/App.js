import React from 'react';
import './App.css';
import Input from './components/input.js';
import ToDo from './components/todo.js';

const todoList = [{
  item: 'todos',
  done: false,
  id: 8989},
  {
    item: 'second',
    done: true,
    id: 8080
  }
]

function App() {
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
