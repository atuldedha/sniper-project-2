import React from "react";

const SolutionPoints = ({ title, subTitle, points, pointImg }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <span className="font-grotesk font-bold text-blue3 text-[30px] leading-[34px] sm:text-[34px] sm:leading-[36px] lg:text-[48px] lg:leading-[54px] -tracking-[1px] mb-4">
        {title}
      </span>

      <span className="font-inter font-normal opacity-80 text-[14px] leading-[24px] lg:text-[18px] lg:leading-[30px] text-blue3 mb-12">
        {subTitle}
      </span>

      {points?.map((point, index) => (
        <div key={index} className="flex items-center space-x-4 mb-5">
          <img src={pointImg} alt="point" className="" />
          <span className="font-inter font-semibold text-[14px] leading-[24px] lg:text-[18px] lg:leading-[30px] text-blue3">
            {point}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SolutionPoints;
