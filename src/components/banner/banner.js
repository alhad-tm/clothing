import React from 'react'
import Bg from "../../assets/banner-bg.jpg"

const Banner = () => {
  return (
    <div
    style={{backgroundImage:`url(${Bg})`}}
    className="flex items-center justify-start w-full min-h-screen bg-cover bg-center bg-black">

        <span className=" text-gradient text-6xl  font-black italic capitalize text-black text-left ml-28 w-1/3 leading-[80px]">Where every outfit tells a story...</span>

      
    </div>
  )
}

export default Banner
