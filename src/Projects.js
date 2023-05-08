import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/projects")
        .then(r => r.json())
        .then(data => setProjects(data))
    }, [])

    return(
        <div> 
            <h1>Welcome to your Project Cloud! </h1>
            <p>These are the projects in your cloud:  </p>

            {projects.map(project => {
                return(
                    <ProjectCard 
                        key={project.id}
                        project={project} 
                    />
                )  
            })}
        </div>
    )
}

export default Projects
