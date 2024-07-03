import React from "react";
import Bg1 from "../../assets/ladies-store2.jpg";
import Bg2 from "../../assets/kids-store.jpg";

const Banner = () => {
  return (
    <div className="banner w-full min-h-screen flex flex-col">
      {/* first banner */}
      <div style={{ backgroundImage: `url(${Bg1})` }}
           className="ladies w-full min-h-screen bg-cover bg-center  flex items-center justify-start ">

<div className="content flex flex-col gap-8 px-4 md:px-8 py-4 items-start text-white text-left">
  <span className="mainheading">live for fashion</span>
  <span className=" subheading">Where every outfit tells a story</span>
  <span className=" text-xl text-left  w-2/3">
  Explore Milana for stylish, comfortable ladies' and kids' clothing. Our chic dresses, elegant ladieswear, and adorable kidswear are carefully selected to bring out the
   best in you and your little ones, perfect for any occasion.
  </span>
</div>
  

       </div>
       
{/* second banner */}
      <div style={{ backgroundImage: `url(${Bg2})` }}
           className="ladies w-full min-h-screen bg-cover bg-center  flex items-center justify-end px-0 md:px-8">

 <div className="content flex flex-col gap-8 p-4 items-end text-[#083344] text-right"> 
  <span className="mainheading">Playful Perfection</span>
  <span className="subheading ">Style for Every Smile</span>
  <span className=" text-xl text-left e w-2/3">
 Dress your kids in fun and trendy outfits. 
 Our collection blends comfort with the latest trends, so your little ones can enjoy fashion that's as playful as they are.
  </span>
</div> 
  

       </div>
    </div>
  );
};

export default Banner;


// import React from "react";
// import Bg1 from "../../assets/ladies-store.jpg";

// const Banner = () => {
//   return (
//     <div className="banner w-full min-h-screen py-12 flex items-center justify-center">
//       <div
//         style={{ backgroundImage: `url(${Bg1})` }}
//         className="ladies w-full h-4/5 bg-cover bg-center rounded-xl flex items-center justify-start overflow-hidden"
//       >
//         <div className="content flex flex-col gap-8 p-4 md:p-8 items-start max-w-2xl">
//           <span className="uppercase text-white text-3xl font-bold">live for fashion</span>
//           <span className="text-white italic text-6xl font-black">Where every outfit tells a story</span>
//           <span className="text-xl text-left text-white w-full md:w-2/3">
//             Explore Milana for stylish, comfortable ladies' and kids' clothing. Our chic dresses, elegant ladieswear, and adorable kidswear are carefully selected to bring out the best in you and your little ones, perfect for any occasion.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
