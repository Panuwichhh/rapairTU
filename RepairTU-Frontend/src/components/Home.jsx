import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className="h-screen bg-[#F6F6F] flex grid-cols-2 grid max-md:grid-cols-1 items-center justify-center">
        <div className="">
            <div className="text-[#340000] ml-5 ">
                <p className="font-bold text-[10vw] text-center  leading-none mb-10">WELCOME</p>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quaerat saepe consequatur esse excepturi unde?</p>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quaerat saepe consequatur esse excepturi unde?</p>

                
            <div className="text-[#340000] mt-10">
                <h1 className="font-bold text-2xl ">How to use</h1>
                <p className="intro">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, libero!</p>
                <p className="intro">2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae.</p>
                <p className="intro">3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, dolorum.</p>
            </div>
            </div>
        </div>
        
        <div className="flex flex-col items-center">
            <i className=" mb-20 text-[25vw] text-[#340000] fa-solid fa-screwdriver-wrench max-md:text-[20vw] "></i>
            <Link to="/Upload"> <button className="w-60 h-14 font-black bg-[#E20B0B] text-white rounded-3xl shadow-2xl mt-5 hover:opacity-80 hover:text-yellow-400">GET STARTED</button></Link>
        </div>
    </div>
    </>
  )
}

export default Home