import React from "react";

const ContactSection = ({ titleText, subText, buttonText, handleClick }) => {
  return (
    <div className="w-full bg-green1 flex flex-col lg:flex-row items-center justify-between px-10 py-8 lg:px-36 lg:py-16">
      <div className="flex flex-col space-y-4">
        <span className="font-plus font-bold text-center lg:text-start text-white text-[18px] leading-[26px] lg:text-[28px] lg:leading-[34px]">
          {titleText}
        </span>
        <span className="font-inter font-normal text-center lg:text-start text-[12px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-white">
          {subText}
        </span>
      </div>

      <button
        className="px-3 py-2 lg:px-5 lg:py-2 mt-8 lg:mt-0 bg-white text-green2 cursor-pointer font-plus font-bold text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-center rounded-lg"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ContactSection;
