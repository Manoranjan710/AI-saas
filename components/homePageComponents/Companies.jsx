import React from "react";

const Companies = () => {
  const path = [
    "/cnn-logo.svg",
    "/forbes-logo.svg",
    "/inc-logo.svg",
    "/yahoo-logo.svg",
  ];
  return (
    <div className="bg-black px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-[8rem]">
        {path.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={item} alt="company logo" className="h-20 sm:h-28 w-20 sm:w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;