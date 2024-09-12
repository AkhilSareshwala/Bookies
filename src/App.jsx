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
        <Route path='/Bookies/' element={<Home />} />
        <Route path='/Bookies/course' element={<Courses />} />
        <Route path='/Bookies/contact' element={<Contact />} />
        <Route path='/Bookies/about' element={<About />} />
        <Route path='/Bookies/login' element={<Login />} />
        <Route path='/Bookies/signin' element={<Signin />} /> {/* Ensure route matches case sensitivity */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
