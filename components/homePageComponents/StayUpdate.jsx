import React from "react";

const StayUpdate = () => {
  return (
    <div className="bg-black py-16">
      <div className="w-11/12 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-normal leading-tight m-0">
            Stay Updated with
          </h2>
          <h2 className="text-4xl md:text-5xl font-normal leading-tight m-0 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Latest in Web3
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Card 1 */}
          <div className="bg-black border border-gray-800 rounded-xl p-4 flex flex-col">
            <img alt="" src="/update-1.png" className="w-full h-full" />
            <h3 className="text-white text-lg font-medium my-2">
              Real-Time Analytics
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Analyze your strategy's crypto indicators, understand liquidity
              pools, find arbitrage opportunities, and implement changes that
              drive better results.
            </p>
            <div className="mt-auto">
              <a href="#" className="text-white text-sm flex items-center">
                See Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black border border-gray-800 rounded-xl p-4 flex flex-col">
            <img alt="" src="/update-2.png" className="w-full h-full" />

            <h3 className="text-white text-lg font-medium my-2">
              Real-Time Analytics
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Analyze your strategy's crypto indicators, understand liquidity
              pools, find arbitrage opportunities, and implement changes that
              drive better results.
            </p>
            <div className="mt-auto">
              <a href="#" className="text-white text-sm flex items-center">
                See Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black border border-gray-800 rounded-xl p-4 flex flex-col">
            <img alt="" src="/update-3.png" className="w-full h-full" />

            <h3 className="text-white text-lg font-medium my-2">
              Real-Time Analytics
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Analyze your strategy's crypto indicators, understand liquidity
              pools, find arbitrage opportunities, and implement changes that
              drive better results.
            </p>
            <div className="mt-auto">
              <a href="#" className="text-white text-sm flex items-center">
                See Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-[#1A1A1A]  rounded-xl p-8 px-14">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white text-[36px] font-medium mb-2">
                Subscribe to our list
              </h3>
              <p className="text-gray-400 text-[16px]">
                Stay up to date with the industry trends.
                <br />
                Don't worry we won't spam.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-lg pr-28 focus:outline-none"
                />
                <button className="absolute right-1 px-6 py-1.5 bg-[#1A1A1A] text-white font-medium rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpdate;
