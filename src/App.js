//Imports:
import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Input from './components/input.js';
import ToDo from './components/todo.js';
import Change from './components/change.js'
import ContactForm from './components/form.js'
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
    //Displays navbar which has links to the possible pages a user can be routed to and main body content that will be displayed based on this       
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
  //Displays "todos" that are contained in "todoList", "Change" to display buttons for filtering, and "Input" to display the ui for adding a todo
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
      <Input />  
    </div>
</div>
  )
}
  
function About() {
  //Displays About Page
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
  //Displays the contact form
  return (
  <div className="App">
  <div className="nav">
  </div>
      <div className='form_container'>
      <ContactForm />
      </div>
</div>)
}
