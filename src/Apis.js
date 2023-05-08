import React, { useEffect, useState } from 'react'
import { useNavigate, Link  } from 'react-router-dom';
import ApiCard from './ApiCard';


function Apis(){
    const [apis, setApis] = useState([])
    const history = useNavigate ()

    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
        .then(r => r.json())
        .then(data => setApis(data.entries))
    }, [])

    const handleIdea = (apiName) => {
        history(`/create/${apiName}`)
    }

    return(
    <div>  
        <h1>Let's find your next project!</h1> 
        <p>Take a look at the API's below! When one sparks an idea, click the lightbulb icon to add your new project idea to your cloud! </p>
        
        {apis.map (api => <ApiCard api={api} handleIdea={handleIdea} key={api.Link}/>)}

    </div>
)
}
export default Apis

