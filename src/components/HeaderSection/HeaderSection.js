import React from "react";
import BgImage1 from "../../images/bgImage1.png";
import BgImage2 from "../../images/bgImage2.png";
import BgImage3 from "../../images/bgImage3.png";

// Header Section Component
const HeaderSection = () => {
  return (
    <div className="h-[572px] w-full bg-bgColor flex items-center justify-between">
      {/* left side */}
      <div className="flex flex-col justify-center w-full lg:basis-1/2 ml-20 lg:ml-32 xl:ml-44">
        <span className="font-plus font-bold text-[42px] leading-[60px] text-white pr-8">
          Get virtual counseling
        </span>
        <span className="font-inter font-normal text-[18px] leading-[30px] text-white opacity-80 mt-[17px] text-left mb-10 pr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </span>
        <button className="text-white bg-green1 px-5 py-3 rounded-lg w-max">
          Get Started for Free
        </button>
      </div>

      {/* right side */}
      <div className="hidden lg:basis-1/2 lg:h-full lg:flex lg:relative">
        <img
          src={BgImage1}
          alt="bg"
          className="z-0 absolute lg:top-12 2xl:top-2 lg:right-[144px] 2xl:right-96 lg:w-[350px] 2xl:w-[387px]"
        />
        <img
          src={BgImage2}
          alt="bg2"
          className="z-10 absolute lg:top-24 2xl:top-20 lg:right-4 2xl:right-36 lg:w-[400px] 2xl:w-[574px]"
        />
        <img
          src={BgImage3}
          alt="bg3"
          className="absolute lg:top-7 2xl:top-1 z-20 right-4 lg:w-[450px] 2xl:w-[723px]"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
