import React, { useState }from 'react'

function Create(){
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [apiName, setApiName] = useState("")
    const [apiLink, setApiLink] = useState("")

    function updateProjectName(event) {
       setProjectName(event.target.value)
    }

    function updateProjectDescription(event) {
        setProjectDescription(event.target.value)
     }
    
     function updateApiName(event) {
        setApiName(event.target.value)
     }

     function updateApiLink(event) {
        setApiLink(event.target.value)
     }

     function handleAdd(e) {
        e.preventDefault()
        const newProject = {
            name : projectName,
            description : projectDescription,
            apiName : apiName,
            apiLink : apiLink,
            category: null
        }

        fetch("http://localhost:8000/projects", {
            method: 'POST', 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newProject)
        })
        .then(() => console.log("added!"))


     }
    
    return(
        <div>
            <h1>Let's Add a Project!</h1>
            <p>Fill out the fields below to add your project to the cloud. </p> 
            <div className = "card">
                <form><label>Project Name: </label>
                    <input type = "text" value = {projectName} onChange={updateProjectName}/> <br></br><br></br>
                    <label>Project Description: </label>
                    <input type = "text" value = {projectDescription} onChange={updateProjectDescription}/><br></br><br></br>
                    <label>Project API Name: </label>
                    <input type = "text" value = {apiName} onChange={updateApiName}/> <br></br><br></br>
                    <label>Project API Link: </label>
                    <input type = "text" value = {apiLink} onChange={updateApiLink}/> <br></br><br></br>
                    <label>Project Category: </label><br></br>
                    <select> 
                        <option value = "null">-</option>
                        <option value = "animals">Animals </option>
                        <option value = "anime">Anime </option>
                        <option value = "anti-malware">Anti-Malware</option>
                        <option value = "art-and-design">Art & Design</option>
                        <option value = "blockchain">Blockchain</option>
                    </select> <br></br><br></br><br></br>
                    <button onClick={handleAdd}>Add Project</button>
                </form></div>
        </div>
    )
}


export default Create

//I need to come back to the category input 
//I think i want to add a card on the side that updates as the form is filled out...