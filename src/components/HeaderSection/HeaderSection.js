import React from "react";
import BgImage1 from "../../images/bgImage1.png";
import BgImage2 from "../../images/bgImage2.png";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";

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
          className="z-0 absolute lg:top-2 2xl:top-1 lg:right-[190px] 2xl:right-96 lg:w-[350px] 2xl:w-[387px]"
        />
        <img
          src={BgImage2}
          alt="bg2"
          className="z-10 absolute lg:top-16 2xl:top-18 lg:right-20 2xl:right-36 lg:w-[400px] 2xl:w-[574px] rotate-3"
        />
        <img
          src={card1}
          alt="card"
          className="z-20 absolute lg:top-20 lg:right-[350px] 2xl:right-[582px] 2xl:top-24"
        />
        <img
          src={card2}
          alt="card"
          className="z-20 absolute lg:top-4 lg:right-1 2xl:right-16 2xl:top-10"
        />
        <img
          src={card3}
          alt="card"
          className="z-20 absolute lg:bottom-20 lg:right-4 2xl:-bottom-4 2xl:right-40"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
