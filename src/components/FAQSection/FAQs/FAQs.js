import React, { useState } from "react";

// Custom FAQ component to render question and answers
const FAQs = ({ questionID, question, answerBody }) => {
  const [open, setOpen] = useState(questionID === 1);
  return (
    <div className="flex flex-col w-full justify-start mb-4">
      {/* question */}
      <div
        className="flex w-full justify-between items-baseline cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-plus font-bold text-[16px] leading-[22px] lg:text-[24px] lg:leading-[36px] text-blue1 mb-3">
          {question}
        </span>
        <span className="font-plus font-bold text-lg lg:text-4xl text-blue1">
          {open ? "-" : "+"}
        </span>
      </div>

      {/* taking answer body as a html body to render the answer style as per figma*/}
      {open ? <div className="mb-9">{answerBody}</div> : ""}

      {/* divider */}
      <div className="divider" />
    </div>
  );
};

export default FAQs;
