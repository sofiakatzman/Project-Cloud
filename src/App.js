import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Create from './Create';
import Home from './Home';
import Projects from './Projects';
import DataCards from './DataCards';

function App() {

  const [page, setPage] = useState('/');
  const handleChangePage = (pathname) => {
    setPage(pathname);
  }

  return (
    <div>
      <NavBar onChangePage={handleChangePage} />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/inspo" element={<DataCards />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
