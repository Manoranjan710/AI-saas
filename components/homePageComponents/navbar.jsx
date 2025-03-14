"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showMobileProductDropdown, setShowMobileProductDropdown] =
    useState(false);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2 py-3">
                <Image
                  alt="logo"
                  src={require("@/public/icons/gen_logo.svg")}
                  width={40}
                  height={40}
                />
                <div>
                  <h2 className="text-white font-bold text-xl">Gen 1.</h2>
                  <p className="text-white text-[12px] opacity-50">
                    by DesignPad.
                  </p>
                </div>
              </div>
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-16 ml-3">
              {/* Mode Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setShowModeDropdown(!showModeDropdown)}
                  className="flex items-center text-gray-200 text-[16px] hover:text-purple-400 transition-colors focus:outline-none"
                >
                  Mode <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {showModeDropdown && (
                  <div className="absolute left-0 mt-2 w-40 bg-black bg-opacity-90 rounded-md shadow-lg">
                    <Link
                      href="/mode1"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                    >
                      Mode Option 1
                    </Link>
                    <Link
                      href="/mode2"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                    >
                      Mode Option 2
                    </Link>
                    <Link
                      href="/mode3"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                    >
                      Mode Option 3
                    </Link>
                  </div>
                )}
              </div>

              {/* Product Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setShowProductDropdown(!showProductDropdown)}
                  className="flex items-center text-gray-200 text-[16px] hover:text-purple-400 transition-colors focus:outline-none"
                >
                  Product <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {showProductDropdown && (
                  <div className="absolute left-0 mt-2 w-40 bg-black bg-opacity-90 rounded-md shadow-lg">
                    <Link
                      href="/dummy1"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                    >
                      Dummy Option 1
                    </Link>
                    <Link
                      href="/dummy2"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                    >
                      Dummy Option 2
                    </Link>
                    <Link
                      href="/dummy3"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                    >
                      Dummy Option 3
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="text-gray-200 text-[16px] hover:text-purple-400 transition-colors"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 text-[16px]">
            <span className="text-gray-200 cursor-pointer">Log In</span>
            <button className="bg-[#5552FF] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button - Only visible on mobile */}
          <div
            className="md:hidden flex items-center"
            onClick={handleMenuClick}
          >
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black bg-opacity-95 overflow-hidden transition-all duration-500 ${
          showMenu
            ? "opacity-100 max-h-screen translate-y-0"
            : "opacity-0 max-h-0 -translate-y-10"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Mobile "Menu" Dropdown */}
          <div>
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className="w-full text-left px-3 py-2 text-gray-200 hover:text-purple-400 focus:outline-none"
            >
              Menu
            </button>
            {showMobileDropdown && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/dummy4"
                  className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                >
                  Dummy Option A
                </Link>
                <Link
                  href="/dummy5"
                  className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                >
                  Dummy Option B
                </Link>
                <Link
                  href="/dummy6"
                  className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                >
                  Dummy Option C
                </Link>
              </div>
            )}
          </div>

          {/* Mobile "Product" Dropdown */}
          <div>
            <button
              onClick={() =>
                setShowMobileProductDropdown(!showMobileProductDropdown)
              }
              className="w-full text-left px-3 py-2 text-gray-200 hover:text-purple-400 focus:outline-none"
            >
              Product
            </button>
            {showMobileProductDropdown && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/dummy1"
                  className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                >
                  Dummy Option 1
                </Link>
                <Link
                  href="/dummy2"
                  className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                >
                  Dummy Option 2
                </Link>
                <Link
                  href="/dummy3"
                  className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                >
                  Dummy Option 3
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            Blogs
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            Log In
          </Link>
          <Link
            href=""
            className="block px-3 py-2 bg-[#5552FF] w-fit rounded-lg text-gray-200 hover:text-purple-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
