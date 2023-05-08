import React from 'react'

function ProjectCard({project}){
    return(
       <div className = "projectCard"> 
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small><b>category: </b>{project.category}</small>
            <small><a href = {project.apiLink}>{project.apiName} Api Link</a></small>
        </div>
    )
}

export default ProjectCard
