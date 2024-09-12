import React from 'react'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'
const Courses = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen '>
      <Course></Course>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Courses
