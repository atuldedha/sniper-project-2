import React from "react";
import ScaleLearningOption from "./ScaleLearningOption/ScaleLearningOption";

const ScaleLearningSection = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center px-[30px] md:px-[60px] xl:px-[150px] py-[30px] md:py-[60px] xl:py-[100px] w-full">
      <div className="basis-1/2 flex items-center justify-center mb-10 xl:mb-0">
        {/* place image instead of div */}
        <div className="bg-[#919192] w-[300px] h-[250px] md:h-[400px] md:w-[400px] 2xl:h-[520px] :w-[630px] rounded-md" />
      </div>

      <div className="basis-1/2 flex flex-col items-start xl:ml-20">
        <span className="font-grotesk font-bold text-green4 text-[22px] sm:text-[30px] lg:text-[48px] leading-[30px] sm:leading-[34px] lg:leading-[54px] -tracking-[1px] mb-4">
          Enhance & scale your learning experience
        </span>
        <span className="font-inter font-normal text-black1 text-[14px] md:text-[18px] leading-[26px] md:leading-[30px] opacity-80 mb-9">
          With lessons, interactive quizzes, webinars, & live streams Learnum
          cover all coaching approaches.
        </span>

        {/* 1. */}
        <ScaleLearningOption
          optionID={1}
          question="Set up your own domain"
          answer="Picking a domain is an important step in making your site
        exclusive and memorable."
        />

        <div className="border-b-[1px] border-b-black1 opacity-10 w-full mb-6" />

        {/* 2. */}
        <ScaleLearningOption
          optionID={2}
          question="Personalize site template"
          answer="Picking a domain is an important step in making your site
        exclusive and memorable."
        />

        <div className="border-b-[1px] border-b-black1 opacity-10 w-full mb-6" />

        {/* 3 */}
        <ScaleLearningOption
          optionID={3}
          question="Preview and publish"
          answer="Picking a domain is an important step in making your site
        exclusive and memorable."
        />
      </div>
    </div>
  );
};

export default ScaleLearningSection;
