import React, { useEffect, useState } from 'react'

function DataCards(){
    console.log("you've reached DataCards")

    const [inspo, setInspo] = useState([])
    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
        .then(r => r.json())
        .then(data => setInspo(data.entries))
    }, [])

return(
    <div>    
        <h1>Let's find your next project!</h1> 
        <p>Take a look at the api's below! <br></br> 
        When one sparks an idea, click the lightbulb icon to add your new idea to your cloud! </p>

    { inspo.map (api => {
        return(
            <div className = "card" key={api.Link}>
            <h1>{api.API}</h1>
            <p>{api.Description}</p>
            <h6><a href = {api.Link}>API Link: {api.API}</a></h6>
            <small>API Category: {api.Category}</small>
            </div>
        )
    })}
    </div>
)
}

export default DataCards
