import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import Login from './Components/Login';
import Signin from './Components/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Bookies/' element={<Home />} />
        <Route path='/Bookies/course' element={<Courses />} />
        <Route path='/Bookies/login' element={<Login />} />
        <Route path='/Bookies/signin' element={<Signin />} /> {/* Ensure route matches case sensitivity */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
