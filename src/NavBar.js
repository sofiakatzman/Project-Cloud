import React from 'react'
import { Link } from 'react-router-dom';

function NavBar({ onChangePage }){

    function handleLinkClick(e) {
        //Event Default is Commented out because with it my links wont load (?)
        // e.preventDefault()
        onChangePage(e.target.pathname)  
    }
 
    return(
        <nav className="links"> 
            <Link to="/" onClick={handleLinkClick}>my cloud</Link>
            <Link to="/create" onClick={handleLinkClick}>new project</Link>
            <Link to="/inspo" onClick={handleLinkClick}>view inspo</Link>
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
