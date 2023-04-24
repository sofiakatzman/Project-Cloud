
function fetchProjects() {

    fetch("http://localhost:8000/projects")
.then(r => r.json())
.then(data => {

    return(data)
    
})






}

export default fetchProjects