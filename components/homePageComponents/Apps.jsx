import React from "react";

const Apps = () => {
  return (
    <div className="bg-black py-[4rem]">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text Section */}
          <div className="w-full md:w-[70%] flex justify-center items-center flex-col text-center md:text-left">
            <h2 className="text-white text-[36px] md:text-[48px] leading-[1.1]">
              Easy to Integrate
              <br />
              <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[36px] md:text-[48px] leading-[1.1]">
                with your favourite
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[36px] md:text-[48px] leading-[1.1]">
                3rd party apps
              </span>
            </h2>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mt-8 md:mt-0">
            <img
              alt="image"
              src="/apps-image.png"
              className="w-[80%] md:w-[50%] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
