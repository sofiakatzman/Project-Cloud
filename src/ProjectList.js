import React, {useState, useEffect} from 'react'

function ProjectList(){

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/projects")
        .then(r => r.json())
        .then(data => {
            setProjects(data)})
    }, [])

    return(
        <div>
            { projects.map(project => {
                return(
                <div className= "card" key = {project.id}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                </div>
            )
})}

        </div>

    )


}

export default ProjectList