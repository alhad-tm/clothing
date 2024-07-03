import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
  <div className="py-4 px-8 w-full bg-violet-500 text-white flex flex-col md:flex-row justify-between items-center gap-2">
    <div className="icons flex gap-4">
  <a href="https://www.instagram.com/milana_ladies_kids?igsh=MTk0OXprYjdhbjhxaQ%3D%3D" target="blank">
  <FontAwesomeIcon icon={faInstagram} className="w-[32px] h-[32px]" />
  </a>

    <FontAwesomeIcon icon={faWhatsapp} className="w-[32px] h-[32px]" />

    </div>

    <div className="copyright">
    <span>Milana © 2024. All Rights Reserved.</span>
    </div>

    <div className="uppercase">
        Back to top
    </div>


  </div>

  )
};

export default Footer; 
