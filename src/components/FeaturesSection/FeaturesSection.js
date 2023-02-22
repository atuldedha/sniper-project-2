import React, { useState } from "react";
import FeatureCard from "./FeatureCard/FeatureCard";
import data from "./staticData";

const FeaturesSection = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="flex flex-col items-center justify-center px-[30px] md:px-[60px] lg:px-[150px] py-[30px] md:py-[60px] lg:py-[100px] w-full bg-[#fffaf5]">
      <span className="font-grotesk font-normal text-green4 text-[24px] leading-[32px] md:text-[34px] md:leading-[40px] lg:text-[52px] lg:leading-[62px] text-center mb-10">
        SARK provides various types
      </span>

      <span className="font-poppins font-normal text-gray1 text-[16px] leading-[24px] max-w-[592px] text-center mb-5">
        We connect intuitive design with the latest technology to provide a
        seamless booking experience for you.
      </span>

      <div className="flex items-center space-x-4 mb-[50px]">
        <div
          className={`py-[4px] px-[12px] ${
            filterValue === "tatoo"
              ? "bg-violet1 text-violet2"
              : "bg-gray2 text-black4"
          } rounded-lg text-center font-poppins font-normal text-[16px] leading-[24px] cursor-pointer`}
          onClick={() => setFilterValue("tatoo")}
        >
          Tatoo
        </div>

        <div
          className={`py-[4px] px-[12px] ${
            filterValue === "piercing"
              ? "bg-violet1 text-violet2"
              : "bg-gray2 text-black4"
          } rounded-lg text-center font-poppins font-normal text-[16px] leading-[24px] cursor-pointer`}
          onClick={() => setFilterValue("piercing")}
        >
          Piercing
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
        {data?.map((feature, index) =>
          filterValue ? (
            feature.type === filterValue && (
              <FeatureCard
                key={index}
                title={feature.title}
                subTitle={feature.subTitle}
                image={feature.img}
              />
            )
          ) : (
            <FeatureCard
              key={index}
              title={feature.title}
              subTitle={feature.subTitle}
              image={feature.img}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FeaturesSection;
