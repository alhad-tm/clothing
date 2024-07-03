import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="about w-full min-h-screen flex flex-col items-center justify-center text-gray-700 py-12 md:py-0">

      <div className="about-content flex flex-col items-center justify-center gap-8 px-8">

      

      <motion.span 
       initial={{y:-20,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.6,delay:0.2}}className="text-4xl uppercase font-black">About</motion.span>
      <motion.span
      initial={{y:20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6,delay:0.4}}
      className="about-text">At Milana, we are passionate about bringing you high-quality and stylish clothing that combines elegance and comfort. Our ladies' collection features beautiful kurtis, exquisite churidar materials, and a range of chic dresses and tops. We strive to offer outfits that reflect your unique style and make you feel
         fabulous for every occasion.</motion.span>

      <motion.span 
        initial={{y:20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:0.6}}
      className="about-text">For the little ones, our kids' collection is designed with fun and comfort in mind. We offer playful and adorable outfits perfect for everyday adventures, special occasions, and seasonal wear. With a focus on quality and customer satisfaction, Mil is your go-to destination for both ladies' and kids' fashion.</motion.span>
      </div>
    </div>
  )
}

export default About
