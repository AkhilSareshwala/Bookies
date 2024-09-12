import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Freebook from './Freebook'
import Login from './Signin'
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Freebook></Freebook>
      <Login></Login>
      <Footer></Footer>
    </>
  )
}

export default Home
