import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import Create from './Create'

function ApiCards(){
    const [idea, setIdea] = useState([])
    const [inspo, setInspo] = useState([])
    const history = useNavigate ()


    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
        .then(r => r.json())
        .then(data => setInspo(data.entries))
    }, [])

    function handleIdea(e){
        console.log("idea!")
        const foundIdea = inspo.filter(data => data.Link === e)
        setIdea(foundIdea)
       
        history({
            pathname: '/create',
            state: { idea: foundIdea }
          });
        }

        
            //this will connect to the "create new project" page and will auto fill api data on form ****


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
            <button onClick ={() => handleIdea(api.Link)}>💡</button>
            </div>
        )
    })}
    </div>
)
}
export default ApiCards
