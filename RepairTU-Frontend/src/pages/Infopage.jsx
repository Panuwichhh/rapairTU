import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Info from '../components/infomation'
import Footer from '../components/Footer'
import InfoDone from '../components/infoDone'
import axios from 'axios'

function Infopage() {

  const [status, setStatus] = useState([null]);
  const postId = sessionStorage.getItem('postId');

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/upload/${postId}`);
        const data = response.data;
        setStatus(data.status);
        console.log("Status:", data.status);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (postId) { // ตรวจสอบว่ามี postId ก่อนเรียก fetchData
      fetchData();
    }
  }, [postId]);


  if (status === 'repaired') {
    return (
      <>
        <Nav />
        <InfoDone />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <Info />
      <Footer />
    </>
  )
}

export default Infopage