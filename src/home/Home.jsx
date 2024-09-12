import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Freebook from '../Components/Freebook'
import Login from '../Components/Signin'
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
