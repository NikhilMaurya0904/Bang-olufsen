// import React from "react";
// import Paragraph from "./Paragraph";
// import Button from "./Button"
// import ShopNowBtn from "./ShopNowBtn"
// import BorderAnim from "./BorderAnim"
// const AboutPage = () => {
//   const Abouttext = [
//     "The collaboration between Bang & Olufsen and leading designers integrates cutting-edge ",
//     "technology with timeless design, resulting in exceptional audio and visual experiences that",
//     "redefine the standards of luxury and innovation. ",
//   ];

//   const Aboutpara = [
//     "Today, Bang & Olufsen continues to lead the way in high-fidelity audio and innovative design.",
//     "Our global network of stores and showrooms provides a space where you can immerse yourself",
//     "in the Bang & Olufsen experience, explore our latest innovations, and receive personalized service",
//     "from our expert team. Whether you are a longtime aficionado or new to our brand, we invite you to",
//     "from our expert team. Whether you are a longtime aficionado or new to our brand, we invite you to",
//     "Join us in celebrating a legacy of innovation and design excellence. Experience the unparalleled ",
//     "craftsmanship, sophisticated aesthetics, and outstanding performance that define Bang & Olufsen. ",
//     "We look forward to welcoming you into our world and helping you create moments of pure auditory ",
//     "and visual pleasure. Welcome to the future of sound and vision, welcome to Bang & Olufsen",
//   ];

//   return (
//     <div className="w-full h-screen flex-col bg-white flex items-center justify-center font-primary">
//       {/* <BorderAnim customindex={8}/> */}
//       <div className="w-[90%] h-[30%] flex items-start justify-between">
//         <Paragraph phrases={["THE COMPANY"]} />
//         <Paragraph
//           phrases={Abouttext}
//           className={`text-[1.9rem] font-primary`}
//         />
//       </div>
//       <div className="w-[90%] h-[50%] flex items-start justify-between  ">
//        <div className="w-full h-full flex flex-col items-start justify-start">
//        <Paragraph
//           phrases={Aboutpara}
//           className={`text-[1.6rem] font-primary`}
//         />
//        {/* <ShopNowBtn text={'Learn More'} className={`mt-10`}/> */}
//        </div>
//         <div className="w-[25%] h-full bg-red-500">
//           <img className="w-full h-full object-cover" src="https://images.ctfassets.net/8cd2csgvqd3m/4w2WiH9iFxmKQtDaU60vZC/65a9307e6cc30cb3fd665bfd99d648f5/BS2_Footer_TIO_Immersive_copy.jpg?q=90&fm=webp&w=480&h=718&fit=fill" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



import React from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";
<<<<<<< HEAD
import ShopNowBtn from "./ShopNowBtn";
import BorderAnim from "./BorderAnim";

=======
>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66
const AboutPage = () => {
  const aboutText = [
    "The collaboration between Bang & Olufsen and leading designers integrates cutting-edge",
    "technology with timeless design, resulting in exceptional audio and visual experiences that",
    "redefine the standards of luxury and innovation."
  ];

  const aboutParagraph = [
    "Today, Bang & Olufsen continues to lead the way in high-fidelity audio and innovative design.",
    "Our global network of stores and showrooms provides a space where you can immerse yourself",
    "in the Bang & Olufsen experience, explore our latest innovations, and receive personalized service",
    "from our expert team. Whether you are a longtime aficionado or new to our brand, we invite you to",
    "join us in celebrating a legacy of innovation and design excellence. Experience the unparalleled",
    "craftsmanship, sophisticated aesthetics, and outstanding performance that define Bang & Olufsen.",
    "We look forward to welcoming you into our world and helping you create moments of pure auditory",
    "and visual pleasure. Welcome to the future of sound and vision, welcome to Bang & Olufsen."
  ];

  return (
<<<<<<< HEAD
    <div className="w-full h-screen flex flex-col bg-white items-center justify-center font-primary">
      {/* <BorderAnim customindex={8}/> */}
      <div className="w-[90%] h-[30%] flex justify-between">
        <Paragraph phrases={["THE COMPANY"]} />
        <Paragraph phrases={aboutText} className="text-[1.9rem] font-primary" />
      </div>
      <div className="w-[90%] h-[50%] flex justify-between">
        <div className="w-full flex flex-col">
          <Paragraph phrases={aboutParagraph} className="text-[1.6rem] font-primary" />
          {/* <ShopNowBtn text={'Learn More'} className="mt-10"/> */}
        </div>
        <div className="w-[25%] h-full bg-red-500">
          <img 
            className="w-full h-full object-cover"
            src="https://images.ctfassets.net/8cd2csgvqd3m/4w2WiH9iFxmKQtDaU60vZC/65a9307e6cc30cb3fd665bfd99d648f5/BS2_Footer_TIO_Immersive_copy.jpg?q=90&fm=webp&w=480&h=718&fit=fill" 
            alt="Bang & Olufsen Experience" 
=======
    <div className="w-full h-screen bg-white  flex-col flex  items-center justify-center font-primary max-sm:px-2  px-5">
      <div className="w-full h-[30%] max-sm:h-[40%] px-4 flex items-start max-sm:flex-col gap-y-10 sm:justify-between">
        <Paragraph phrases={["THE COMPANY"]} className={`max-sm:text-2xl`} />
        <Paragraph
          phrases={Abouttext}
          className={`text-[2rem] max-sm:text-lg  font-primary`}
        />
        <Button
          text={"View More"}
          customclass={` sm:my-[2vh] sm:hidden w-fit mx-auto bg-white border-[1px]`}
          circ={`bg-black`}
          p={`group-hover:text-white`}
        />
      </div>
      <div className="w-full h-[50%] max-sm:h-1/2 flex max-sm:flex-col items-start justify-between  ">
        <div className="w-full h-full  max-sm:hidden max-sm:h-fit flex flex-col items-start justify-start">
          <Paragraph
            phrases={Aboutpara}
            className={`text-[1.5rem]  font-primary`}
          />
          <Button
            text={"View More"}
            customclass={` my-[2vh] bg-white border-[1px]`}
            circ={`bg-black`}
            p={`group-hover:text-white`}
          />
        </div>
        <div className="w-[30%] max-sm:w-full h-full ">
          <img
            className="w-full h-full object-cover"
            src="https://images.ctfassets.net/8cd2csgvqd3m/2C4PDfprsTL0Z2UEZtvpvg/793a067fe33a8086e00f8cc6396586ca/Underc_111223-19.jpg?q=90&fm=webp&w=1440&h=810&fit=fill"
            alt=""
>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
