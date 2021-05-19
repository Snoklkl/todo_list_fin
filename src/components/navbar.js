import React from 'react';
import './navbar.css';



const Nav = () => {



    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Todo</a>

            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
                </li>
                
            </ul>


        </nav>
    )

}

export default Nav