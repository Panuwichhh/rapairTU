import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../components/home'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');

  //   if(!token) {
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <>
    <Nav/>
    <Home/>
    <Footer/>
    </>
  )
}

export default Homepage