import React from "react";
import Foot from "./Footer/Foot";
import Customer from "./Home/Customer";
import HeroLeft from "./Home/HeroLeft";
import HeroRight from "./Home/HeroRight";
import Lang_Pj from "./Home/Lang_Pj";
import Path from "./Home/Path";

const Home = () => {
  return (
    <>
      <div className="flex w-[100%] flex-col-reverse sm:flex sm:flex-row">
        <HeroLeft />
        <HeroRight />
      </div>
      <div>
        <Lang_Pj/>
      </div>
      <Customer/>
      <Path/>
      <Foot/>
    </>
  );
};

export default Home;
