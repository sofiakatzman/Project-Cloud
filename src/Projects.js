import react from 'react'


function Projects(){

fetch("http://localhost:8000/projects")
.then(r => r.json())
.then(data => console.log(data))






return(
    <div>
        <div className = "card">
            <h3>Project Name</h3>
            <p>Project Description will go here ...</p>
            <small>API Category : Type as Link</small><br></br>
            <button>delete</button>
                   </div>
    </div>
)

}

export default Projects


//My layout for displaying projects will be: 
//div holding project card 
//h1 holding project name 
//p holding project description 
//small displaying API name 