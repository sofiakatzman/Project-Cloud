import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Create from './Create';
import Home from './Home';
import Projects from "./Projects";
import DataCards from "./DataCards";

function App() {
  const [page, setPage] = useState("/");

  function getCurrentPage() {
    switch (page) {
      case "/":
        return <Home />;
      case "/create":
        return <Create />;
      case "/projects":
        return <Projects />;
      case "/inspo":
        return <DataCards />;
      default:
        return <h1>404 not found</h1>;
    }
  }

  return (
    <div>
    <NavBar onChangePage={setPage} />
    {getCurrentPage()}
</div>

  );
}

export default App;
