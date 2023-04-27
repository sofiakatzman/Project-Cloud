import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Create(){
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [apiName, setApiName] = useState("")
    const [apiLink, setApiLink] = useState("")
    const [apiCategory, setApiCategory] = useState("")
    const { apiIdea } = useParams()  
    const history = useNavigate()


    useEffect(()=> {
       if (apiIdea){
        fetch("https://api.publicapis.org/entries")
            .then(r => r.json())
            .then(data => {
                const foundIdea = data.entries.find(item => item.API === apiIdea)
                setApiName(foundIdea.API)
                setApiLink(foundIdea.Link)
                setApiCategory(foundIdea.Category)
            })}
    }, [])

    const handleReset = () => {
        setApiName("")
        setApiLink("")
        setApiCategory("")
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const newProject = {
            name : projectName,
            description : projectDescription,
            apiName : apiName,
            apiLink : apiLink,
            category: apiCategory
        }

        fetch("http://localhost:8000/projects", {
            method: 'POST', 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newProject)
        })
        .then(() => {
            history('/')
        })
     }

    return(
        <div>
            <h1>Let's Add a Project!</h1>
            <p>Fill out the fields below to add your project to the cloud. </p> 
            <div className = "createCard">
                <form><label>Project Name: 
                    </label><br></br><br></br>
                    <input type = "text" value = {projectName} onChange={(event)=> setProjectName(event.target.value)}/> 
                    <br></br><br></br>
                    <label>Project Description: </label> 
                    <br></br><br></br>
                    <input type = "text" value = {projectDescription} onChange={(event)=> setProjectDescription(event.target.value)}/>
                    <br></br><br></br>
                    <label>Project API Name: </label> 
                    <br></br><br></br>
                    <input type = "text" value = {apiName} onChange={(event)=> setApiName(event.target.value)}/> 
                    <br></br><br></br>
                    <label>Project API Link: </label> 
                    <br></br><br></br>
                    <input type = "text" value = {apiLink} onChange={(event) => setApiLink(event.target.value)}/> 
                    <br></br><br></br>
                     <label>Project Category: </label> 
                     <br></br><br></br>
                    <input type = "text" value = {apiCategory} onChange={(event) => setApiCategory(event.target.value)}/> 
                    <br></br><br></br>
                    <button onClick={handleAdd}>Add Project</button>
                    <br></br><br></br>
                </form></div>
                <button onClick={handleReset}>X</button>
        </div>
    )
}


export default Create
