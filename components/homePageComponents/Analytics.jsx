import React from "react";

const Analytics = () => {
  return (
    <div className="bg-black py-[7rem]">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-[9fr_3fr]">
          <h2 className="text-white text-[48px] leading-[1.1] m-0">
            Analytics Simplified for <br />
            <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[48px] leading-[1.1] m-0">
              Web and Native applications
            </span>
          </h2>
          <p className="text-[18px] text-[#AAAAAA]">
            Collect, Organise and Analyse your data with our advance learning
            algorithm to find patterns in your data.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-3 mt-[7rem] grid-auto-rows-[1fr]">
          {/* grid-1 */}
          <div className="flex flex-col gap-3 h-full">
            <div className="border-[1px] bg-[#272727]/20 border-[#272727] pl-8 pt-10 rounded-[18px] h-full flex flex-col justify-between">
              <div>
                <h2 className="text-[24px] text-[#CACACA] font-medium">
                  Real Time Deep Insights
                </h2>
                <p className="text-[14px] text-[#A9A9A9]">
                  The real-time analytics with predictive capabilities.
                </p>
              </div>
              <div className="pt-7 overflow-hidden">
                <img
                  src="/analytics-img-1.png"
                  alt=""
                  className="rounded-br-[18px]"
                />
              </div>
            </div>

            <div className="border-[1px] grid grid-cols-2 bg-[#272727]/20 border-[#272727] rounded-[18px] h-full">
              <div className="flex flex-col justify-center items-center pl-4">
                <h2 className="font-medium text-[24px] text-[#3A3A3A] leading-[1]">
                  Optimise. <br /> Revise.
                  <br />
                  <span className="font-medium text-[24px] text-[#fff] leading-[1]">
                    Repeat
                  </span>
                </h2>
              </div>
              <div className="pt-10 overflow-hidden">
                <img
                  src="/analytics-img-2.png"
                  alt=""
                  className="rounded-br-[18px] h-full "
                />
              </div>
            </div>
          </div>

          {/* grid-2 */}
          <div className="h-full">
            <div className="border-[1px] bg-[#272727]/20 border-[#272727] px-8 pt-10 pb-5 rounded-[18px] h-full flex flex-col justify-between">
              <p className="text-[12px] text-[#3A3A3A] pl-3 pr-7 border-l-[2px] border-[#272727]">
                On an average, our users have seen +20% of user retention rate.
              </p>
              <div className="py-3.5 overflow-hidden">
                <img src="/analytics-img-3.png" alt="" />
              </div>
              <h2 className="text-[24px] text-[#CACACA] font-medium">
                Journey, not destination
              </h2>
              <p className="text-[#A9A9A9] text-[14px]">
                Monitor and analyse retention to optimize customer loyalty.
              </p>
            </div>
          </div>

          {/* grid-3 */}
          <div className="flex flex-col gap-3 h-full">
            <div className="border-[1px] bg-[#272727]/20 border-[#272727] pt-10 rounded-[18px] h-full flex flex-col justify-between">
              <h2 className="text-[24px] text-[#CACACA] font-medium px-8">
                A/B Test Feature Variants
              </h2>
              <div className="pt-3.5 pr-6 overflow-hidden">
                <img
                  src="/analytics-img-4.png"
                  alt=""
                  className="rounded-bl-[18px]"
                />
              </div>
            </div>
            <div className="border-[1px] bg-[#272727]/20 border-[#272727] pl-8 pt-3 rounded-[18px] h-full flex flex-col justify-between">
              <h2 className="text-[24px] text-[#CACACA] font-medium">
                Supercharged Metrics
              </h2>
              <div className="pt-3 overflow-hidden">
                <img
                  src="/analytics-img-5.png"
                  alt=""
                  className="rounded-br-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
