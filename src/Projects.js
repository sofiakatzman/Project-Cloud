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
    <div> <h1>Welcome to your Projects Cloud! </h1>
    <p>Here are the projects you've saved: 
    </p>

    {projects.map(project => {
        return(
        <div className = "card" key = {project.id}> 
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <h6><a href = {project.apiLink}>API Link: {project.apiName}</a></h6><br></br>
            </div>
        )
    })}
    </div>
)

}

export default Projects
