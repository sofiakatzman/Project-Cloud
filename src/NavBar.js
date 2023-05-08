import React from 'react'
import { Link } from 'react-router-dom';

function NavBar(){

    const cloud = <span role="img" aria-label="cloud">☁️</span>

    return(
        <nav className="links"> 
            <Link to="/">{cloud} my cloud {cloud}</Link>
            <Link to="/create">{cloud} new project {cloud}</Link>
            <Link to="/apis">{cloud} view inspo {cloud}</Link>
        </nav>
)}

export default NavBar
