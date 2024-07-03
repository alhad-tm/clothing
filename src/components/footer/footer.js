import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";

const Footer = () => {
  return(
  <div className="footer py-4 px-8 w-full bg-violet-500 text-white flex flex-col md:flex-row justify-between items-center gap-2">
    <div className="icons flex gap-4">
  <a href="https://www.instagram.com/milana_ladies_kids?igsh=MTk0OXprYjdhbjhxaQ%3D%3D" target="blank">
  <FontAwesomeIcon icon={faInstagram} className="w-[32px] h-[32px]" />
  </a>

    <FontAwesomeIcon icon={faWhatsapp} className="w-[32px] h-[32px]" />

    </div>

    <div className="copyright">
    <span>Milana © 2024. All Rights Reserved.</span>
    </div>

    <div className="uppercase cursor-pointer">
     <Link to="banner" smooth={true}> Back to top</Link>   
    </div>


  </div>

  )
};

export default Footer; 
