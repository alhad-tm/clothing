import React from 'react'

const Header = () => {
  return (
    <div className="header flex justify-between items-center text-black text-2xl px-8">

    <div className="logo">
     <span>Mlana</span>
    </div>

    <div className="menu flex gap-4 ">
     <span>Home</span>
     <span>About</span>
     <span>Contact</span>
    </div>
      
    </div>
  )
}

export default Header
