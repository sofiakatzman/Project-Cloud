import React, { useEffect, useState } from 'react'

function DataCards(){
    console.log("you've reached DataCards")

    const [inspo, setInspo] = useState([])
    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
        .then(r => r.json())
        .then(data => setInspo(data.entries))
    }, [])

    function handleIdea(){
        console.log("idea!")
        //this will connect to the "create new project" page and will auto fill api data on form ****
    }

return(
    <div>    
        <h1>Let's find your next project!</h1> 
        <p>Take a look at the api's below! <br></br> 
        When one sparks an idea, click the lightbulb icon to add your new idea to your cloud! </p>

    { inspo.map (api => {
        return(
            <div className = "apiCard" key={api.Link}>
            <h1><a href = {api.Link}>{api.API}</a></h1>
            <p>{api.Description}</p>
            
            <small>Category: {api.Category}</small> <br></br><br></br>
            <button onClick ={handleIdea}>💡</button>
            </div>
        )
    })}
    </div>
)
}

export default DataCards
