import React from "react";

const Apps = () => {
  return (
    <div className="bg-black py-[4rem]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between ">
          <div className="w-[70%] items-center flex justify-center flex-col ">
            <h2 className="text-white text-[48px] leading-[1.1] m-0">
              Easy to Integrate
              <br />
              <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[48px] leading-[1.1] m-0">
                with your favourite 
              </span>
              <br />
                <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[48px] leading-[1.1] m-0">
                  3rd party apps
                </span>
            </h2>
          </div>
          <div className="flex justify-center">
            <img alt="image" src="/apps-image.png" className="w-[50%] h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
