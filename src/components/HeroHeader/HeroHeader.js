import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const HeroHeader = ({ handleNavigation }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // if outside clicked on sidebar close it
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSidebar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      {/* sidebar */}
      {openSidebar && (
        <div
          className="fixed right-0 top-0 bottom-0 z-50 bg-bgColor3 shadow-lg border-l-[1px] border-l-green3 flex flex-col items-center"
          ref={ref}
        >
          <div className="flex flex-col">
            <span
              className="w-full text-end text-red-500 text-base font-poppins font-semibold pr-4 cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            >
              X
            </span>
            <div className="flex flex-col space-y-4 justify-center items-center  px-5 py-5">
              <span
                className="font-plus font-extrabold text-[12px] leading-[22px] text-white cursor-pointer"
                onClick={() => handleNavigation("home")}
              >
                Home
              </span>
              <span
                className="font-plus font-extrabold text-[12px] leading-[22px] text-white cursor-pointer"
                onClick={() => handleNavigation("about")}
              >
                About us
              </span>

              <span
                className="font-plus font-extrabold text-[12px] leading-[22px] text-white cursor-pointer"
                onClick={() => handleNavigation("feature")}
              >
                Features
              </span>
              <span
                className="font-plus font-extrabold text-[12px] leading-[22px] text-white cursor-pointer"
                onClick={() => handleNavigation("faq")}
              >
                Faq
              </span>

              <button
                className="px-3 py-2 lg:px-5 lg:py-2 bg-white text-green6 cursor-pointer font-plus font-bold text-[12px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-center rounded-lg"
                onClick={() => handleNavigation("waitlist")}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* show header bar in larger screens */}
      <div className="w-full bg-inherit flex justify-between items-center">
        <div className="flex flex-col flex-1">
          <span className="font-inter font-extrabold text-[20px] leading-[22px] lg:text-[34px] lg:leading-[26px] text-green5 mb-2">
            Sleeq
          </span>
          <span className="font-inter font-extrabold text-[20px] leading-[22px] lg:text-[34px] lg:leading-[26px] text-green5 pl-8">
            booking
          </span>
        </div>

        <div className="flex items-center">
          {/* show menu icon in smaller screens */}
          <div className="flex items-start md:hidden">
            <Bars3Icon
              className="h-9 w-8 text-white hover:cursor-pointer"
              onClick={() => setOpenSidebar(true)}
            />
          </div>
          {/* else show the header */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <span
              className="font-plus font-extrabold text-[14px] leading-[28px] text-white cursor-pointer"
              onClick={() => handleNavigation("home")}
            >
              Home
            </span>
            <span
              className="font-plus font-extrabold text-[14px] leading-[28px] text-white cursor-pointer"
              onClick={() => handleNavigation("about")}
            >
              About us
            </span>

            <span
              className="font-plus font-extrabold text-[14px] leading-[28px] text-white cursor-pointer"
              onClick={() => handleNavigation("feature")}
            >
              Features
            </span>
            <span
              className="font-plus font-extrabold text-[14px] leading-[28px] text-white cursor-pointer"
              onClick={() => handleNavigation("faq")}
            >
              Faq
            </span>
          </div>

          <div className="hidden md:inline-block md:ml-[50px]">
            <button
              className="px-3 py-2 lg:px-5 lg:py-2 bg-green6 text-white cursor-pointer font-plus font-bold text-[12px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-center rounded-lg"
              onClick={() => handleNavigation("waitlist")}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
