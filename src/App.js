import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Create from './Create';
import Projects from './Projects';
import ApiCards from './ApiCards';

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
        <Route path="/create/:apiIdea" element={<Create />} />
        <Route path="/inspo" element={<ApiCards />} />
        <Route path="/" element={<Projects />} />

      </Routes>
    </div>
  );
}

export default App;
