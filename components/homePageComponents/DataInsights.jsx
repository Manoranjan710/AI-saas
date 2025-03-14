"use client";
import React, { useState, useEffect, useRef } from "react";

const DataInsights = () => {
  const [screenWidth, setScreenWidth] = useState(0);

useEffect(() => {
  if (typeof window !== "undefined") {
    setScreenWidth(window.innerWidth);
  }
}, []);
  const testimonials = [
    {
      id: 1,
      quote:
        "GEN 1's customer segmentation and marketing insights have dramatically increased our engagement and conversion rates.",
      author: "Sarah Aoa",
      position: "Marketing Head",
      company: "Scope Co.",
    },
    {
      id: 2,
      quote:
        "The real-time analytics and predictive capabilities of GEN 1 have kept us ahead in the competitive market landscape.",
      author: "Emily Shanks",
      position: "Chief Data Officer",
      company: "Scope Co.",
    },
    {
      id: 3,
      quote:
        "GEN 1 transformed our data handling, providing seamless integration and insightful visualizations that boosted our business decisions.",
      author: "Monika Gamp",
      position: "CEO",
      company: "Scope Co.",
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials.map((t) => ({ ...t, uniqueId: `original-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, uniqueId: `duplicate1-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, uniqueId: `duplicate2-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, uniqueId: `duplicate3-${t.id}` })),
  ];

  const topCarouselRef = useRef(null);
  const bottomCarouselRef = useRef(null);

  const [topCarouselPosition, setTopCarouselPosition] = useState(0);
  const [bottomCarouselPosition, setBottomCarouselPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTopCarouselPosition((prev) => prev + 1);
      setBottomCarouselPosition((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (topCarouselPosition >= testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setTopCarouselPosition(0);
      }, 0);
    }

    if (bottomCarouselPosition >= testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setBottomCarouselPosition(0);
      }, 0);
    }
  }, [topCarouselPosition, bottomCarouselPosition]);

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-[#0D0D0D]/90 rounded-lg border-[2px] border-[#1A1A1A] text-center p-4 flex flex-col h-full">
      <p className="text-white text-sm md:text-base mb-2 flex-grow">
        "{testimonial.quote}"
      </p>
      <div>
        <h4 className="text-white text-xs md:text-sm font-medium">
          {testimonial.author}, <span className="text-[#aaaaaa]">{testimonial.position}</span> 
        </h4>
        <div className="flex justify-center items-center space-x-1 mt-2">
          <img alt="icon" src="/icons/company-icon.svg" className="w-4 h-4" />
          <p className="text-gray-400 text-xs md:text-sm">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black py-16 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white text-[clamp(28px,5vw,48px)] font-medium leading-tight">
            Data Insights Loved by <br />
            over{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              500+ Top Brands
            </span>
          </h2>
        </div>

        {/* Top carousel - Adjusting to fit smaller screens */}
        <div
          className="relative mb-8 overflow-hidden w-full"
          ref={topCarouselRef}
        >
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-500" : ""
            }`}
            style={{
              transform: `translateX(-${
                topCarouselPosition * (100 / (screenWidth < 768 ? 1 : 3))
              }%)`,
              width: `${
                duplicatedTestimonials.length *
                (100 / (screenWidth < 768 ? 1 : 3))
              }%`,
            }}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <div
                key={testimonial.uniqueId}
                className={`px-2 ${
                  screenWidth < 768 ? "w-full" : "w-1/3"
                }`}
                style={{ height: "180px" }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom carousel - Adjusting to fit smaller screens */}
        <div
          className="relative overflow-hidden w-full"
          ref={bottomCarouselRef}
        >
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-500" : ""
            }`}
            style={{
              transform: `translateX(-${
                bottomCarouselPosition *
                (100 / (screenWidth < 768 ? 2 : 4))
              }%)`,
              width: `${
                duplicatedTestimonials.length *
                (100 / (screenWidth < 768 ? 2 : 4))
              }%`,
            }}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <div
                key={testimonial.uniqueId}
                className={`px-2 ${
                  screenWidth < 768 ? "w-1/2" : "w-1/4"
                }`}
                style={{
                  height: screenWidth < 768 ? "250px" : "220px", // Increased height on mobile
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInsights;
