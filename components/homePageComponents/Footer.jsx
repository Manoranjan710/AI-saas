// components/Footer.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[7fr_4fr_3fr_3fr_3fr] gap-10 justify-center">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-gray-400 leading-[1.1]">
              Get Monthly insights from founders around the globe.
              <br />
              <span className="text-sm text-gray-400 ">No spam - Promise.</span>
            </p>

            <div className="w-full md:w-auto">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-full pr-28 focus:outline-none"
                />
                <button className="absolute right-1 px-6 py-1.5 bg-[#5552FF] text-white font-medium rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Scale
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Developer
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Var 1.0
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Var 1.1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Var 1.2
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer with Logo and Copyright */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              alt="logo"
              src={require("@/public/icons/gen_logo.svg")}
              width={40}
              height={40}
            />
            <div>
              <p className="font-medium">Gen 1.</p>
              <p className="text-xs text-gray-400">by Designpad.</p>
            </div>
            <span className="text-xs text-gray-400 ml-10">
              ©2024 Gen 1. All rights reserved
            </span>
          </div>

          <div className="text-xs text-gray-400 flex flex-wrap justify-center gap-4">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
