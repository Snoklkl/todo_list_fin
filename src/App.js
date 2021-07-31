import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Input from './components/input.js';
import ToDo from './components/todo.js';
import Change from './components/change.js'

import {useSelector} from 'react-redux'
import { filterVisible, selectTodoList } from './features/todoSlice.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



export default function App() {
  

  return (
            

    
    <div className="nav">
           <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Todo</Link>

            <ul class="navbar-nav mr-auto">
                    
                <li class="nav-item active">
                    <Link class="nav-link" to="/About">About <span class="sr-only">(current)</span></Link>
                    
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/Contact">Contact <span class="sr-only">(current)</span></Link>
                </li>
             
                
            </ul>


        </nav>
            
            
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/Contact">
                    <Contact />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
            </Router>

    </div>

  );
}


function Home() {
  const todoList = useSelector(selectTodoList)



  return (
  <div className="App">
  <div className="nav">
    
  </div>

    <div className='container'>
      
      <div className='todo_container'>
      <Change />
        {
          todoList.map( item => { return(
            <ToDo 
          
                  name={item.item}
                  done={item.done}
                  id={item.id}
                  visible={item.visible}
                  
           />)}
          )
          }
          
     
          

      </div>
      <Input  />  
           
    </div>
</div>
  )
}
  

function About() {

  return (
  <div className="App">
  <div className="nav">
  </div>

    <div className='container'>
      <h3> This was a test project to learn react, react-redux, and react-router.</h3>
    
      <h3> -Noah Cress</h3>

      <div className='todo_container'>

        

      </div>
 
    </div>
</div>)
}

function Contact() {

  return (
  <div className="App">
  <div className="nav">
  </div>

    <div className='container'>
      
      <div className='todo_container'>

      <form>
          <div class="form-group">
          <label for="NameInput"> Name </label>
          <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter your name" />
          
          </div>
        <div class="form-group">
          <label for="EmailInput">Email</label>
          <input type="email" class="form-control" id="Email" placeholder="Enter your email" />
          <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label  for="Textarea">Message</label>
          <textarea type="text" rows="3" class="form-control" id="Message" > </textarea>
        
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        

      </div>
      
    </div>
</div>)
}
