import React from "react";
import Arrow from "../../../images/arrowBlack.svg";

const FeatureCard = ({ image, title, subTitle }) => {
  return (
    <div className="flex flex-col border-[3px] border-b-[10px] border-r-[10px] border-r-blue3 border-b-blue3 border-blue3 shadow-2xl rounded-xl px-[18px] pt-[20px] lg:px-[25px] lg:pt-[30px] pb-[12px]">
      <div className="flex flex-col space-y-2 space-x-0 sm:space-y-0 sm:flex-row sm:items-start sm:space-x-3 lg:space-x-6 mb-[22px]">
        <img
          src={image}
          alt="feature"
          className="h-[40px] w-[40px] object-contain"
        />

        <div className="flex flex-col space-y-3 items-start">
          <span className="font-grotesk font-bold text-[16px] leading-[20px] sm:text-[20px] lg:text-[28px] lg:leading-[34px] text-blue3">
            {title}
          </span>
          <span className="font-inter font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] text-blue3">
            {subTitle}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2 w-full justify-center text-black1 font-inter font-semibold text-[10px] leading-[20px] sm:text-[12px] md:text-[16px] md:leading-[24px] text-right cursor-pointer">
        <span className="whitespace-nowrap">Discover Now</span>
        <img src={Arrow} alt="arrow" className="ml-2" />
      </div>
    </div>
  );
};

export default FeatureCard;
