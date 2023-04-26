import React, { useEffect, useState } from 'react'

function Projects(){

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/projects")
        .then(r => r.json())
        .then(data => {
            setProjects(data)
            console.log(data)})
    }, [])

    return(

        <div> <h1>Welcome to your Project Cloud! </h1>
        <p>Here are the projects you've thought of:  </p>
        {projects.map(project => {
            return(
            <div className = "projectCard" key = {project.id}> 
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <small><b>category:</b>{project.category}</small>
                <small><a href = {project.apiLink}>{project.apiName} Link</a></small>
                </div>
            )
        })}
        </div>
)

}

export default Projects
