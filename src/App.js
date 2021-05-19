import React from 'react';
import './App.css';
import Input from './components/input.js';
import ToDo from './components/todo.js';


import {useSelector} from 'react-redux'
import { selectTodoList } from './features/todoSlice.js'

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Todo</Link>

            <ul class="navbar-nav mr-auto">
                    
                <li class="nav-item active">
                    <Link class="nav-link" to="/About">About <span class="sr-only">(current)</span></Link>
                    
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/Contact">Contact <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/Users">Users <span class="sr-only">(current)</span></Link>
                </li>
                
            </ul>


        </nav>
            
            
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
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
  )
}
  

function About() {

  return (
  <div className="App">
  <div className="nav">
  </div>

    <div className='container'>
      <h1> This is a test website made by Noah Cress. </h1>
    
      <h3> This project was made with react, react-redux, and react-router. If you are seeing this, thank you for checking it out!</h3>

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
        
     
        

      </div>
      
    </div>
</div>)
}

function Users() {

  return (
  <div className="App">
  <div className="nav">
  </div>

    <div className='container'>
    <h1> There are no users, because this isnt a real website. </h1>
      <div className='todo_container'>

      

      </div>
        
    </div>
</div>)
}


