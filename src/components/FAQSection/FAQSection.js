import React from "react";
import FAQs from "./FAQs/FAQs";

// FAQ Section component
const FAQSection = ({ innerRef }) => {
  const handleAnswerClick = () => {};
  return (
    <div
      ref={innerRef}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full px-8 lg:px-0 lg:w-1/2 flex flex-col items-center justify-center">
        <span className="font-plus font-bold text-[22px] lg:text-[42px] leading-[38px] xl:leading-[62px] text-center text-blue1 mb-5 mt-10 xl:mt-40">
          Frequently asked questions (FAQ)
        </span>
        <span className="font-inter font-normal text-[12px] lg:text-[16px] leading-[20px] lg:leading-[26px] text-center text-black1 mb-8 lg:mb-16">
          Still have more questions?{" "}
          <span className="text-blue2 cursor-pointer">Contact us now</span>
        </span>

        <div className="divider mb-6" />

        <div className="mb-12 xl:mb-40 flex flex-col w-full">
          {/* question 1 */}
          <FAQs
            questionID={1}
            question="What are the features of Hubspace?"
            answerBody={
              <div className="flex flex-col">
                <span className="font-plus font-normal text-[12px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-gray1">
                  Excellent question. Hubspace Consectetur adipiscing elit
                  pellentesque habitant morbi tristique senectus et. Lobortis
                  scelerisque fermentum dui faucibus in ornare quam. Donec
                  adipiscing tristique risus nec. Tempor commodo ullamcorper a
                  lacus. Lectus sit amet est placerat
                </span>
                <span className="font-plus font-normal text-[12px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-gray1">
                  {"For more enim praesent elementum facilisis leo vel tellus "}
                  <span
                    className="font-bold text-blue1 cursor-pointer"
                    onClick={handleAnswerClick}
                  >
                    Resources Library
                  </span>
                </span>
              </div>
            }
          />
          {/* question 2 */}
          <FAQs
            questionID={2}
            question="What are the features of Hubspace?"
            answerBody={
              <div className="flex flex-col">
                <span className="font-plus font-normal text-[12px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-gray1">
                  Excellent question. Hubspace Consectetur adipiscing elit
                  pellentesque habitant morbi tristique senectus et. Lobortis
                  scelerisque fermentum dui faucibus in ornare quam. Donec
                  adipiscing tristique risus nec. Tempor commodo ullamcorper a
                  lacus. Lectus sit amet est placerat
                </span>
                <span className="font-plus font-normal text-[12px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-gray1">
                  {"For more enim praesent elementum facilisis leo vel tellus "}
                  <span
                    className="font-bold text-blue1"
                    onClick={handleAnswerClick}
                  >
                    Resources Library
                  </span>
                </span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
