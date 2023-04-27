import React, { useEffect, useState } from 'react'
import { useNavigate, useParams  } from 'react-router-dom';


function ApiCards(){
    const [idea, setIdea] = useState([])
    const [inspo, setInspo] = useState([])
    const history = useNavigate ()

    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
        .then(r => r.json())
        .then(data => setInspo(data.entries))
    }, [])

    function handleIdea(apiName){
        setIdea(apiName)
        history(`/create/${apiName}`)
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
            <p>{api.Description}</p><br></br>
            <h4>Category: {api.Category}</h4> <br></br>
            <small>Auth ? {api.Auth ? api.Auth : "n/a"}</small>
            <button onClick={(e) => handleIdea(api.API)}><span role="img" aria-label="lightbulb">💡</span></button>
            </div>
        )
    })}
    </div>
)
}
export default ApiCards



//change a tag later ** link or navlink
