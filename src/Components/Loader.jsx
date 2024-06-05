// import { useGSAP } from "@gsap/react";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import SplitTextJS from "split-text-js";
// const Loader = () => {
//   useEffect(() => {
//     const titles = gsap.utils.toArray(".loader-titles");
//     const tl = gsap.timeline()
//     titles.forEach(titles => {
//      const splitTitle = new SplitTextJS(titles)
//      tl.from(splitTitle.chars,{
//         opacity:0,
//         y:80,
//         rotateX:-90,
//         stagger:.05,
//         duration:1,
//         delay:.3
//      },"<")
//      .to(splitTitle.chars,{
//         opacity:0,
//         y:-80,
//         rotateX:90,
//         stagger:.05,
//         duration:1,
//      },"<1")
//     })
    
//   }, []);
//   // useGSAP(()=>{},[])
//   return (
//     <div className="w-full fixed font-primary text-white overflow-hidden z-[999] h-screen flex items-center justify-center bg-zinc-800">
//       <div className="container">
//         <div className="text-wrapper text-[7rem] text-center leading-[0]">
//           <p className="loader-titles">Speakers</p>
//           <p className="loader-titles">Headphones</p>
//           <p className="loader-titles">Soundbars</p>
//           <p className="loader-titles">Televison</p>
//           <p className="loader-titles">Accessories</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React, { useEffect } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

const Loader = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray(".loader-titles");
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".parent", {
          height: 0,
          duration: 1,
          ease: "power2.inOut"
        });
      }
    });
    
    titles.forEach(title => {
      const splitTitle = new SplitTextJS(title);
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        delay: 0.3
      }, "<")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -50,
        rotateX: 90,
        stagger: 0.05,
        duration: 1
      }, "<1");
    });
    
  }, []);
  
  return (
    <div className="parent w-full fixed font-primary text-black overflow-hidden z-[999] h-screen flex flex-col items-center gap-[25%] justify-center bg-white">
        <h1 className="text-[8rem] font-[800] uppercase">Bang & olufsen</h1>
      <div className="container "> 
        <div className="text-wrapper text-[3rem] text-center leading-[0]">
          <p className="loader-titles">Speakers</p>
          <p className="loader-titles">Headphones</p>
          <p className="loader-titles">Soundbars</p>
          <p className="loader-titles">Television</p>
          <p className="loader-titles">Accessories</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;