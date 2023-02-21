import React, { useRef, useState } from "react";
import PhoneImage from "../../images/phone.png";
import { CheckIcon } from "@heroicons/react/24/solid";

const CalculateSection = () => {
  const [empolyees, setEmployees] = useState("");
  const [noShow, setNoShow] = useState("");
  const [noShowOutput, setNoShowOutput] = useState(0);
  const [pricePerTatoo, setPricePerTatoo] = useState("");
  const [lossesPerMonthWithoutApp, setLossesPerMonthWithoutApp] = useState(0);
  const [lossesPerMonthWitApp, setLossesPerMonthWitApp] = useState(0);
  const [profit, setProfit] = useState(0);
  const [noShowError, setNoShowError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef();

  const calculateCharges = () => {
    let showError;
    let tatooError;
    setShow(false);
    if (!noShow || noShow.trim(" ").length === "0" || parseInt(noShow) === 0) {
      showError = true;
      setNoShowError(true);
    } else {
      showError = false;
    }
    if (
      !pricePerTatoo ||
      pricePerTatoo.trim(" ").length === "0" ||
      parseInt(pricePerTatoo) === 0
    ) {
      tatooError = true;
      setPriceError(true);
    } else {
      tatooError = false;
    }
    // calculation for no staff
    if (!showError && !tatooError) {
      setShow(true);
      setPriceError(false);
      setNoShowError(false);
      let loss;
      if (
        !empolyees ||
        empolyees.trim(" ").length === "0" ||
        parseInt(empolyees) === 0
      ) {
        loss = noShow * pricePerTatoo;
      } else {
        loss = empolyees * noShow * pricePerTatoo;
      }
      setNoShowOutput(noShow);
      setLossesPerMonthWithoutApp(loss);
      const profit = 0.6 * loss;
      setProfit(profit);
      setLossesPerMonthWitApp(loss - profit);
      ref.current.scrollIntoView();
    }
  };

  return (
    <div className="w-full relative flex flex-col-reverse xl:space-y-0 xl:flex-row items-center justify-center px-[30px] md:px-[60px] xl:px-[150px] py-[30px] md:py-[60px] xl:py-[100px]">
      {/* Left Section for inputs */}
      <div className="basis-1/2 flex flex-col space-y-3 w-[300px] md:w-[500px] xl:w-full bg-blue1 px-8 py-6 rounded-lg mt-6 xl:mt-0">
        <span className="lg:px-8 font-poppins font-semibold text-white text-[12px] lg:text-[16px] leading-[22px] lg:leading-[28px]">
          Calculate without stress with just a few clicks how you and your
          business will benefit from SARK
        </span>
        <div className="flex flex-col items-start">
          <span className="font-poppins font-semibold text-white text-[12px] lg:text-[16px] leading-[22px] lg:leading-[28px]">
            How many emplyees/staff does your company has?
          </span>
          <input
            type="number"
            value={empolyees}
            onChange={(e) => setEmployees(e.target.value)}
            className="w-full bg-gray3 text-black font-normal font-poppins text-[12px] lg:text-[16px] leading-[22px] lg:leading-[26px] px-4 py-2 outline-none border-none rounded-md"
          />
        </div>

        <div className="h-3" />

        <div className="flex flex-col items-start">
          <span className="font-poppins font-semibold text-white text-[12px] lg:text-[16px] leading-[22px] lg:leading-[28px]">
            How many no shows do you have per month?
          </span>
          <input
            type="number"
            value={noShow}
            onChange={(e) => setNoShow(e.target.value)}
            className="w-full bg-gray3 text-black font-normal font-poppins text-[12px] lg:text-[16px] leading-[22px] lg:leading-[26px] px-4 py-2 outline-none border-none rounded-md"
          />
        </div>

        <div className="h-3 font-medium font-poppins text-[14px] lg:text-[18px] leading-[22px] lg:leading-[28px] text-red-500">
          {noShowError ? "Please Enter a valid number" : ""}
        </div>

        <div className="flex flex-col items-start">
          <span className="font-poppins font-semibold text-white text-[12px] lg:text-[16px] leading-[22px] lg:leading-[28px]">
            How much you charge per Tatoo?
          </span>
          <input
            type="number"
            value={pricePerTatoo}
            onChange={(e) => setPricePerTatoo(e.target.value)}
            className="w-full bg-gray3 text-black font-normal font-poppins text-[12px] lg:text-[16px] leading-[22px] lg:leading-[26px] px-4 py-2 outline-none border-none rounded-md"
          />
        </div>

        <div className="h-3 font-medium font-poppins text-[14px] lg:text-[18px] leading-[22px] lg:leading-[28px] text-red-500">
          {priceError ? "Please Enter a valid number" : ""}
        </div>

        <div className="w-[20%] border-b-[1px] border-b-green5 mb-[10px] " />
        <button
          className="w-full bg-green6 text-center py-3 text-black font-medium font-poppins text-[12px] lg:text-[16px] leading-[22px] lg:leading-[26px] rounded-md"
          onClick={calculateCharges}
        >
          Show Result
        </button>
      </div>

      {/* Right Section for output */}
      <div
        className="basis-1/2 flex items-end md:items-center justify-center md:justify-end"
        ref={ref}
      >
        <div className="rounded-[50%] absolute h-[450px] top-10 sm:h-[600px] md:bottom-[none] left-5 right-5 lg:h-[700px] xl:h-[900px] bg-pale1 lg:left-40 lg:right-40 xl:left-[45%] xl:-right-28 -z-[1]"></div>
        <div className="relative">
          <img
            src={PhoneImage}
            alt="phone"
            className="h-[500px] lg:h-[700px] xl:h-[852px]  object-contain"
          />
          <div className="absolute flex items-center space-x-2 top-5 left-[0px] lg:left-[15px] xl:-left-1/4 px-2 py-1 bg-green7 rounded-[87px]">
            <CheckIcon className="h-7 w-7 text-white text-bold" />
            <span className="font-public-sans font-bold text-[16px] lg:text-[20px] xl:text-[25px] leading-[22px] xl:leading-[30px] text-white">
              save and make more money
            </span>
          </div>
          <div className="absolute top-16 lg:top-20 left-[40px] lg:left-[25px] xl:left-16 flex justify-center items-center w-[170px] lg:w-[322px] font-public-sans font-extrabold xl:text-[28px] lg:text-[24px] text-[16px] leading-[30px] xl:leading-[38px] text-green2 text-center">
            Reduce missed appointments with automatic reminders
          </div>
          <div className="absolute flex items-center space-x-2 top-40 lg:top-52 right-[55px] lg:right-[100px] xl:-right-[60px] px-2 py-1 bg-green7 rounded-[87px]">
            <CheckIcon className="h-7 w-7 text-white text-bold" />
            <span className="font-public-sans font-bold text-[16px] lg:text-[20px] xl:text-[25px] leading-[22px] xl:leading-[30px] text-white">
              60% less no-shows
            </span>
          </div>

          <div className="bg-white top-52 lg:top-64 right-12 lg:right-0 xl:right-10 flex flex-col items-center justify-center absolute p-[10px] lg:p-[25px] lg:w-[458px] h-[130px] lg:h-[190px] rounded-md mb-3">
            <span className="w-full text-start font-inter font-semibold text-[14px] lg:text-[21px] leading-[22px] lg:leading-[26px] text-blue5">
              Missed appointments per month
            </span>
            <div className="flex items-center justify-between w-full mt-[10px]">
              <span className="font-inter font-medium text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                Without Sleeqbooking
              </span>
              <span className="basis-2/5 overflow-scroll whitespace-nowrap scrollbar-hide text-end font-inter font-bold text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                {noShowOutput || 0}
              </span>
            </div>
            <div className="flex items-center justify-between w-full mt-[10px]">
              <span className="font-inter font-normal text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                With Sleeqbooking
              </span>
              <span className="basis-2/5 overflow-scroll whitespace-nowrap scrollbar-hide text-end font-inter font-bold text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                {Math.round(noShowOutput / 2) || 0}
              </span>
            </div>
            <div className="w-full text-end font-inter font-extrabold text-green7 text-[26px] lg:text-[45px] leading-[30px] lg:leading-[54px] mt-1">
              <span className="w-full whitespace-nowrap inline-block overflow-scroll text-end scrollbar-hide">
                {Math.round(noShowOutput / 2) - noShowOutput}
              </span>
            </div>
          </div>

          <div className="bg-white top-[350px] lg:top-[450px] xl:top-[470px] right-12 lg:right-0 xl:right-10 flex flex-col items-center justify-center absolute p-[10px] lg:p-[25px] lg:w-[458px] h-[150px] lg:h-[200px] rounded-md">
            <span className="w-full text-start font-inter font-semibold text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px] text-blue5">
              Increased revenue per month due to reduced missed appointments
            </span>
            <div className="flex items-center justify-between w-full mt-[10px]">
              <span className="font-inter font-medium text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                Without Sleeqbooking
              </span>
              <span className="basis-2/5 overflow-scroll whitespace-nowrap scrollbar-hide text-end font-inter font-bold text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                {show ? `${lossesPerMonthWithoutApp} £` || 0 : 0}
              </span>
            </div>
            <div className="flex items-center justify-between w-full mt-[10px]">
              <span className="font-inter font-normal text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                With Sleeqbooking
              </span>
              <span className="basis-2/5 overflow-scroll whitespace-nowrap scrollbar-hide text-end font-inter font-bold text-blue5 text-[12px] lg:text-[21px] leading-[22px] lg:leading-[26px]">
                {show ? `${lossesPerMonthWitApp} £` || 0 : 0}
              </span>
            </div>
            <div className="w-full text-end font-inter font-extrabold text-green7 text-[26px] lg:text-[45px] leading-[30px] lg:leading-[54px] mt-1">
              <span className="w-full whitespace-nowrap inline-block overflow-scroll text-end scrollbar-hide">
                {show ? (profit > 0 ? `+ ${profit} £` : 0) : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateSection;
