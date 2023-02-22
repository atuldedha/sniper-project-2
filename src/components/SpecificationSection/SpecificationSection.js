import React from "react";
import CompassImage from "../../images/compass.svg";
import MessageImage from "../../images/message.png";
import PersonsImage from "../../images/persons.png";
import PiechartImage from "../../images/piechart.png";
// className="flex flex-wrap items-center gap-[58px] justify-center"
const SpecificationSection = ({ innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="flex flex-col px-6 py-5 md:px-20 lg:px-40 md:py-10 lg:py-20 items-center justify-center space-y-8 lg:space-y-24"
    >
      <span className="font-plus font-bold text-[32px] leading-[42px] text-center text-black2">
        Why should you choose us?
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-[58px] justify-center">
        <div className="flex items-center space-x-2 xl:space-x-4">
          <img src={CompassImage} alt="compass" className="" />
          <span className="specificationText w-[190px]">
            Get all courses from a single platform.
          </span>
        </div>

        <div className="flex items-center space-x-2 xl:space-x-4">
          <img src={MessageImage} alt="compass" className="" />
          <span className="specificationText w-[190px]">
            Communicate with your mentors on time.
          </span>
        </div>

        <div className="flex items-center space-x-2 xl:space-x-4">
          <img src={PersonsImage} alt="compass" className="" />
          <span className="specificationText w-[190px]">
            Collaborate on real projects to learn things.
          </span>
        </div>

        <div className="flex items-center space-x-2 xl:space-x-4">
          <img src={PiechartImage} alt="compass" className="" />
          <span className="specificationText w-[190px]">
            Get regular updates with proper tutorials.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpecificationSection;
