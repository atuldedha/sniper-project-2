import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full bg-green1 flex flex-col lg:flex-row items-center justify-between px-10 py-8 lg:px-36 lg:py-16">
      <div className="flex flex-col space-y-4">
        <span className="font-plus text-white text-[18px] leading-[26px] lg:text-[28px] lg:leading-[34px]">
          Still have more questions? Contact us now.
        </span>
        <span className="font-inter font-normal text-[12px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-white">
          We are happy to help you with any questions and take feedbacks to make
          the Sleeqbooking better for you’re Industry
        </span>
      </div>

      <button className="px-3 py-2 lg:px-5 lg:py-2 mt-8 lg:mt-0 bg-white text-green2 cursor-pointer font-plus font-bold text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-center rounded-lg">
        Contact us now
      </button>
    </div>
  );
};

export default ContactSection;
