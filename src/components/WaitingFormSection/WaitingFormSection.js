import React, { useState } from "react";
import FormImage from "../../images/formImage.svg";
import CheckIcon from "../../images/check.png";

const WaitingFormSection = ({ innerRef }) => {
  const [type, setType] = useState("Tatoo");
  const [checked, setChecked] = useState(false);
  return (
    <div
      ref={innerRef}
      className="flex flex-col lg:flex-row items-center justify-between px-[20px] py-[20px] lg:px-[50px] lg:py-[50px] bg-gray3"
    >
      <div className="basis-1/2 flex items-center justify-center">
        <img
          src={FormImage}
          alt="formImage"
          className="w-[300px] h-[250px] sm:w-[450px] sm:h-[350px] xl:w-[736px] xl:h-[556px] object-scale-down"
        />
      </div>

      <div className="flex flex-col items-start basis-1/2">
        <span className="font-poppins font-semibold text-brown1 text-[20px] leading-[30px] lg:text-[30px] lg:leading-[45px]">
          Join are Waiting List{" "}
        </span>

        <span className="font-poppins font-normal text-[12px] leading-[18px] lg:text-[14px] lg:leading-[20px] text-brown1 mt-[16px] mb-[50px]">
          Our sales team always active to support you. Any kind of questions
          about to our product they can answer to you.
        </span>

        <input
          type="text"
          className="inputStyle mb-5"
          placeholder="Enter Your First and Last Name"
        />

        <div className="flex items-center w-full space-x-8 mb-5">
          <input
            type="email"
            className="inputStyle w-full"
            placeholder="Email Address"
          />
          <input
            type="phone"
            className="inputStyle w-full"
            placeholder="Contact Number"
          />
        </div>

        <div className="flex items-center w-full space-x-8 mb-5">
          <div className="basis-1/2 border border-green3 rounded-md">
            <select
              className="w-[95%] h-full py-[12px] lg:py-[16px] px-[16px] lg:px-[33px] font-poppins font-normal text-[12px] leading-[18px] text-black3 bg-inherit outline-none"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Tatoo">Tatoo</option>
              <option value="Piercing">Piercing</option>
            </select>
          </div>
          <input
            type="text"
            className="inputStyle basis-1/2"
            placeholder="Shop Name"
          />
        </div>

        <textarea
          placeholder="Message"
          className="inputStyle w-full mb-5"
          rows={3}
        />

        <div className="flex items-start space-x-2 lg:space-x-4 mb-[26px]">
          <div className="basis-[5%]">
            <div
              className="flex items-center  justify-center border border-green3 h-5 w-5 object-contain"
              onClick={() => setChecked((prev) => !prev)}
            >
              {/* checkbox */}
              {checked && (
                <img
                  src={CheckIcon}
                  alt="check"
                  className="h-2 w-2 md:h-3 md:w-3 object-contain"
                />
              )}
            </div>
          </div>

          <span className="font-poppins font-normal text-[12px] leading-[18px] lg:text-[14px] lg:leading-[20px] text-brown1">
            I agree that braintree may contact me at the email address or phone
            number above.
          </span>
        </div>

        <button className="w-full py-4 text-center bg-green3 font-poppins font-semibold text-[16px] leading-[25px] text-white1 cursor-pointer rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default WaitingFormSection;
