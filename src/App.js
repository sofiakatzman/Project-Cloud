import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Create from './Create';
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
        <Route path="/inspo" element={<DataCards />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
