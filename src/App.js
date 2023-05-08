import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Create from './Create';
import Projects from './Projects';
import Apis from './Apis';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/create/:apiIdea" element={<Create />} />
        <Route path="/apis" element={<Apis />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
