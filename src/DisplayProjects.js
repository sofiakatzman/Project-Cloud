import React from 'react'

function DisplayProjects({projects}){




})

return(

    projects.map(project =>{
        <div className = "projects">
                <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <small>{project.apiLink}</small><br></br>
                    <button>delete</button>
        
        
                    </div>



) 

}

export default DisplayProjects
