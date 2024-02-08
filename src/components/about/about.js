import React, { useState } from 'react'
import Baby from "../../assets/baby.jpg"
import Ladies from "../../assets/dresses.png"

const About = () => {

    const [items,setItems]=useState(0)
  

  return (
    <div
    // style={{backgroundImage:`url(${Baby})`}}
     className=" bg-white bg-cover bg-center
    //bg-gradient-to-r from-pink-200  to-pink-300 
      flex flex-col w-full min-h-screen items-center justify-start py-12">

        <div className="flex items-center justify-center w-1/2">
            <span className=" text-3xl font-primary uppercase font-semibold text-gray-700">What we have</span>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full px-16">

            <div className="flex  md:flex-col gap-8 text-4xl items-start justify-center text-gray-600 cursor-pointer">

                <span onClick={()=>setItems(0)}>Kids</span>
                <span onClick={()=>setItems(1)}>Ladies</span>

            </div>

  {items===0 &&  ( <div className="flex ">
    <img src={Baby} className=" w-[400px] h-[400px] rounded-full"/>
     </div> )}         
  {items===1 &&  ( <div className="flex ">
    <img src={Ladies} className=" w-[400px] h-[400px] rounded-full"/>
     </div> )}         
      

        </div>

        {/* <div className="wj-[400px] h-[400px]">
            <img src={Baby} /> 
        </div> */}

      
    </div>
  )
}

export default About
