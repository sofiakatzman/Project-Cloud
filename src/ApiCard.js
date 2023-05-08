import React from 'react'
import { Link } from 'react-router-dom';

function ApiCard({api, handleIdea}) {
    return(
        <div className = "apiCard" >
            <h1><Link to = {api.Link}>{api.API}</Link></h1>
            <p>{api.Description}</p><br/>
            <h4>Category: {api.Category}</h4> <br/>
            <small>Auth Needed? {api.Auth ? api.Auth : "n/a"}</small>
            <button className = "idea" onClick={(e) => handleIdea(api.API)}>
                <span role="img" aria-label="lightbulb">💡</span> 
            </button>
        </div>
    )
}

export default ApiCard