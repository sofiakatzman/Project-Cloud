import react from 'react'

function NavBar(){
return(
    <div className = "links">
            <a href = "/"> HOME </a>       
            <a href = "/projects">MY PROJECTS</a>
            <a href = "/create">CREATE NEW PROJECT </a>
            <a href = "/dataCards">FIND INSPO </a>
     </div>
)}

export default NavBar



//Here I need to create my navigation Links. 
//These will be to components: 
// Home -- home will display all of our saved projects 
// Projects -- projects will display our saved projects with the option to delete them 
// Create New Project -- will display a form where you can add new projects
// Display Database  -- will display "cards" for each API database that can be used to create a new project 

//I will want to use route switch statements here 
