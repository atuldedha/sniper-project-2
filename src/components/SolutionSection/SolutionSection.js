import React from "react";
import SolutionPoints from "./SolutionPoints/SolutionPoints";
import PointIcon1 from "../../images/pointIcon1.svg";
import PointIcon2 from "../../images/pointIcon2.svg";
import BgImageRed from "../../images/bgImage1.png";
import BgImage1 from "../../images/bgImage2.png";
import BgImageBlue from "../../images/blueBg.svg";
import BgImage2 from "../../images/combinedCards.svg";

const SolutionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[40px] py-[20px] sm:px-[50px] sm:py-[40px] lg:px-[100px] lg:py-[60px]">
      <span className="font-public-sans font-bold text-[28px] leading-[30px] sm:text-[32px] sm:leading-[40px] lg:text-[42px] text-black1 lg:leading-[53px] text-center mb-[90px]">
        Sleeqbooking solves your problems
      </span>

      {/* Solution point 1 */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-24 mb-[130px]">
        <div className="basis-1/2">
          <SolutionPoints
            title="POS system helps to improve your business easily & quickly without
            any hassle"
            subTitle="Sark POS system helps you improve your operations for your
            customers. This includes reducing waiting time, faster scanning of
            items, quicker payments and many options for your business."
            points={[
              "Save time and money with your all-in-one POS system",
              "Better online purchasing & supplier order management",
              "Create reports automatically and multi-store functions",
            ]}
            pointImg={PointIcon1}
          />
        </div>
        <div className="relative basis-1/2 mb-[50px] lg:mb-0">
          <img
            src={BgImageRed}
            alt="bg"
            className="absolute -top-[70px] -left-10 z-0 w-[300px] lg:w-[350px] 2xl:w-[387px]"
          />
          <img
            src={BgImage1}
            alt="bg"
            className="z-10 w-[250px] lg:w-[300px] 2xl:w-[574px] relative"
          />
        </div>
      </div>
      {/* solution point 2 */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:space-x-24 mb-[130px]">
        <div className="basis-1/2">
          <SolutionPoints
            title="Grow your business from one to a hundred stores through multi-store management"
            subTitle="With multi-store management you can easily grow your business. Easily keep track of all transactions & keep inventory management with POS. Save all your data sources together securely."
            points={[
              "Use the same rewarding system across all chain stores",
              "Check the employee performance & reward accordingly",
              "See purchase history of customers to know them better",
            ]}
            pointImg={PointIcon2}
          />
        </div>
        <div className="relative basis-1/2 mb-[50px] lg:mb-0">
          <img
            src={BgImageBlue}
            alt="bg"
            className="absolute -top-[10px] -left-10 z-0 w-[380px] lg:w-[400px] 2xl:w-[460px]"
          />
          <img
            src={BgImage2}
            alt="bg"
            className="z-10 w-[250px] lg:w-[300px] 2xl:w-[430px] relative"
          />
        </div>
      </div>

      {/* solution point 3 */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-24">
        <div className="basis-1/2">
          <SolutionPoints
            title="POS system helps to improve your business easily & quickly without
            any hassle"
            subTitle="Sark POS system helps you improve your operations for your
            customers. This includes reducing waiting time, faster scanning of
            items, quicker payments and many options for your business."
            points={[
              "Save time and money with your all-in-one POS system",
              "Better online purchasing & supplier order management",
              "Create reports automatically and multi-store functions",
            ]}
            pointImg={PointIcon1}
          />
        </div>
        <div className="relative basis-1/2 mb-[50px] lg:mb-0">
          <img
            src={BgImageRed}
            alt="bg"
            className="absolute -top-[70px] -left-10 z-0 w-[300px] lg:w-[350px] 2xl:w-[387px]"
          />
          <img
            src={BgImage1}
            alt="bg"
            className="z-10 w-[250px] lg:w-[300px] 2xl:w-[574px] relative"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
