import React from "react";
import HeroBg from "../../images/heroBg.png";
import HeroHeader from "../HeroHeader/HeroHeader";

const HeroSection = ({ homeRef, handleNavigation }) => {
  return (
    <div
      className="flex flex-col bg-bgColor3 md:bg-bgColor2  px-[30px] py-[20px] md:px-[60px] lg:px-[100px] xl:px-[150px] lg:py-8"
      ref={homeRef}
    >
      <HeroHeader handleNavigation={handleNavigation} />
      <div className="flex flex-col md:flex-row items-center justify-center mt-14 mb-8 md:my-16">
        <div className="flex flex-col w-full md:basis-1/2">
          <span className="font-plus font-bold w-full text-center md:text-start text-white text-[30px] leading-[34px] md:text-[36px] md:leading-[45px] lg:text-[40px] lg:leading-[56px] xl:text-[60px] xl:leading-[68px] mb-8">
            #1 Best Tattoo & Piercing Software
          </span>

          <span className="font-inter font-normal  text-center md:text-start text-[14px] md:text-[18px] leading-[24px] md:leading-[30px] opacity-80 text-white mb-8">
            A complete software Designed for TATTOO STUDIO, TATTOO ARTIST and
            PIERCING to Solve your business issues
          </span>

          <div className="flex items-center justify-center md:justify-start space-x-4">
            <button
              className="px-3 py-2 lg:px-5 lg:py-2 bg-white text-green2 cursor-pointer font-plus font-bold text-[12px] md:text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-center rounded-lg"
              onClick={() => handleNavigation("waitlist")}
            >
              Join the Waitlist
            </button>
            <button className="px-3 py-2 lg:px-8 lg:py-3 text-center bg-inherit rounded-[28px] border border-blue4 font-plus font-bold text-black5 text-[12px] md:text-[15px] leading-[26px] ">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="basis-1/2 flex items-center justify-center mt-10 md:mt-0">
          <img
            src={HeroBg}
            alt="background"
            className="w-[285px] h-[215px] md:w-[400px] md:h-[300px] xl:w-[550px] 2xl:w-[691px] 2xl:h-[520px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
