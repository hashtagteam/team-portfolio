import React from "react";
import Nav from "../Navbar/Nav";
import img from "../../../public/heroSection.svg"
const HeroRight = () => {
  return (
    <>
      <div className="w-[100%] relative flex-row flex sm:flex sm:flex-col sm:w-[50%] sm:relative">
        <Nav />
        <div className=" absolute bottom-20 left-[-130px]">
          <img className=" w-3/5" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroRight;
