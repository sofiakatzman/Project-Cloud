import React from 'react'


function Projects(){

    console.log("you've reached Projects")

return(
    <div> <h1>Welcome to your Projects Cloud! </h1>
    <p>Here are the projects you've saved: 
    </p>
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