import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import Login from './Components/Login';
import Signin from './Components/Signin'; // Import Signin if needed
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} /> {/* Ensure route matches case sensitivity */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
