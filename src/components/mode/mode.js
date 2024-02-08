
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon ,faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import {React, useState } from 'react';

const Mode = () => {
    const [dark, setDark] = useState(true);

    const handleClick = () => {
        setDark(prevMode => !prevMode);
    };

    return (
        <div className={`min-h-screen w-full flex flex-col gap-8 items-center justify-center gap-8 ${dark ? "bg-black" : "bg-white"}`}>
            <button className='text-white text-[12px] px-4 py-4 bg-gray-800 flex items-center justify-center rounded-xl hover:scale-110 duration-500' onClick={handleClick}>
                <FontAwesomeIcon className='h-8 w-8' icon={dark ? faSun : faMoon} />
                {/* <span className="ml-2">{dark ? "Light Mode" : "Dark Mode"}</span> */}
            </button>

            <span className={`text-2xl ${dark ? "text-blue-700" : "text-black"}`}>
                Hello, I am a mode component
            </span>

         <div className='p-8 bg-red-200 flex flex-col gap-8 rounded-3xl'>
         <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faBars} />
            <span>hello</span>

         </div>
       
        </div>
    );
};

export default Mode;
