// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
                    {" "}
                    by DesignPad.
                  </p>
                </div>
              </div>
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-16 ml-3">
              <Link
                href="/"
                className="text-gray-200 text-[16px] hover:text-purple-400 transition-colors"
              >
                Mode
              </Link>
              <Link
                href="/features"
                className="text-gray-200 text-[16px] hover:text-purple-400 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/pricing"
                className="text-gray-200 text-[16px] hover:text-purple-400 transition-colors"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className=" hidden md:flex items-center space-x-4 text-[16px]">
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

      {/* Mobile Menu - Hidden by default */}

      <div
        className=" md:hidden"
        style={{ display: showMenu ? "block" : "none" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-95">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            About
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 text-gray-200 hover:text-purple-400"
          >
            Log In
          </Link>
          <button className="block px-3 py-2 text-gray-200 hover:text-purple-400">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
