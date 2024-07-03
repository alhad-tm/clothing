// import React from 'react'

// const Header = () => {
//   return (
//     <div className="header flex justify-between items-center text-black text-2xl px-8">

//     <div className="logo">
//      <span>Mlana</span>
//     </div>

//     <div className="menu flex gap-4 ">
//      <span>Home</span>
//      <span>About</span>
//      <span>Contact</span>
//     </div>
      
//     </div>
//   )
// }

// export default Header

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="header flex justify-between items-center text-black text-2xl px-8">
//       <div className="logo">
//         <span>Mlana</span>
//       </div>

//       <div className="menu  gap-4 hidden md:flex">
//         <span>Home</span>
//         <span>About</span>
//         <span>Contact</span>
//       </div>

//       <div className="md:hidden" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={isMenuOpen ? faTimes  : faBars} />
//         {/* {isMenuOpen? "x": "y"} */}
//       </div>

//       {isMenuOpen && (
//         <div className="mobile-menu flex flex-col gap-4 mt-4 md:hidden">
//           <span onClick={toggleMenu}>Home</span>
//           <span onClick={toggleMenu}>About</span>
//           <span onClick={toggleMenu}>Contact</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


import React, { useState } from 'react'
import css from "./header.module.css"


import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faTimes,faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false); 
  return (
    <div className={css.container}>
      {/* left */}
        <div className={css.left}>
        <Link to="banner" smooth={true}> <span className='font-bold uppercase cursor-pointer'>Milana</span></Link>  
           
           
        </div>

        {/* right */}
        <div className={css.right}>
        {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
             <FontAwesomeIcon icon={ faBars } />
        </div>
      ) : (
        <ul className={css.rightlist} onClick={()=>setMenuOpened(false)}>
        {mobile? <div className={css.main}>
          <div className={css.m1}>
          <Link to="banner" smooth={true}> <span onClick={()=>setMenuOpened(false)} className='font-bold uppercase cursor-pointer'>Milana</span></Link> 
            </div>
          <div className={css.m2}> 
          <FontAwesomeIcon icon={ faTimes } />
          </div>
           </div>:""}
                <li><Link to="banner" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Home</Link></li>
                <li><Link to="about" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>About Us</Link></li>
                <li><Link to="footer" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Contact</Link></li>
              
            </ul>)}
            </div>
      
    </div>
  )
}

export default Header