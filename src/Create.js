import React from 'react'

function Create(){
    return(
        <div>
            <form> 
                    <label>Project Name: </label>
                    <input type = "text"/> <br></br>
                    <label>Project Description: </label>
                    <input type = "text"/><br></br>
                    <label>Project API Link: </label>
                    <input type = "text"/> <br></br>
                    <label>Project Category: </label>
                    <select> 
                        <option value = "null">-</option>
                        <option value = "animals">Animals </option>
                        <option value = "anime">Anime </option>
                        <option value = "anti-malware">Anti-Malware</option>
                        <option value = "art-and-design">Art & Design</option>
                        <option value = "blockchain">Blockchain</option>
                    </select>
                </form>
        </div>
    )
}


export default Create
