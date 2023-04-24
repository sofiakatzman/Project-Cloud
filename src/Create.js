import React from 'react'

function Create(){
    return(
        <div className = "card">
            <form> <h1>Let's Add a Project!</h1>
            <p>Fill out the fields below to add your project to the cloud. </p>
                    <label>Project Name: </label>
                    <input type = "text"/> <br></br><br></br>
                    <label>Project Description: </label>
                    <input type = "text"/><br></br><br></br>
                    <label>Project API Link: </label>
                    <input type = "text"/> <br></br><br></br>
                    <label>Project Category: </label>
                    <select> 
                        <option value = "null">-</option>
                        <option value = "animals">Animals </option>
                        <option value = "anime">Anime </option>
                        <option value = "anti-malware">Anti-Malware</option>
                        <option value = "art-and-design">Art & Design</option>
                        <option value = "blockchain">Blockchain</option>
                    </select> <br></br><br></br><br></br>
                    <button>Add Project</button>
                </form>
        </div>
    )
}


export default Create
