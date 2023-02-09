import React, { useState } from "react";
import ArrowUp from "../../../images/arrowUp.svg";
import ArrowDown from "../../../images/arrowDown.svg";

const ScaleLearningOption = ({ optionID, question, answer }) => {
  const [open, setOpen] = useState(optionID === 1);
  return (
    <div className="flex items-start space-x-10" onClick={() => setOpen(!open)}>
      <img src={open ? ArrowUp : ArrowDown} alt="arrow" className="pt-[7px]" />

      <div className="flex flex-col items-start">
        <span className="font-grotesk font-bold text-[21px] leading-[26px] text-black1 mb-4">
          {question}
        </span>
        {open ? (
          <span className="font-inter font-normal text-[18px] leading-[30px] text-black1 opacity-80 mb-6">
            {answer}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ScaleLearningOption;
