import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import Login from './Components/Login';
import Signin from './Components/Signin';
import Contact from './Components/Contacts';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Bookies' element={<Home />} />
        <Route path='' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} /> {/* Ensure route matches case sensitivity */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
