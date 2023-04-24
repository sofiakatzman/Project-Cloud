import React from 'react'
import ProjectList from './ProjectList'

function Home(){

    console.log("you've reached Home")
return(
    <div>
        <h1>Hi, welcome home.</h1>
        <p>These projects are in your current Project Cloud: </p>
        <ProjectList />
    </div>
)

}

export default Home
