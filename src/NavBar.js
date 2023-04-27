import React from 'react'
import { Link } from 'react-router-dom';

function NavBar(){

    const cloud = <span role="img" aria-label="cloud">☁️</span>

    return(
        <nav className="links"> 
            <Link to="/">{cloud} my cloud {cloud}</Link>
            <Link to="/create">{cloud} new project {cloud}</Link>
            <Link to="/inspo">{cloud} view inspo {cloud}</Link>
        </nav>
)}

export default NavBar



//Here I need to create my navigation Links. 
//These will be to components: 
// Home -- home will display all of our saved projects 
// Projects -- projects will display our saved projects with the option to delete them 
// Create New Project -- will display a form where you can add new projects
// Display Database  -- will display "cards" for each API database that can be used to create a new project 

//I will want to use route switch statements here 
