"use client";
import React, { useState, useEffect, useRef } from "react";

const DataInsights = () => {
  // Sample testimonial data
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

  // Create duplicated items with unique identifiers for looping
  const duplicatedTestimonials = [
    ...testimonials.map((t, i) => ({ ...t, uniqueId: `original-${t.id}` })),
    ...testimonials.map((t, i) => ({ ...t, uniqueId: `duplicate1-${t.id}` })),
    ...testimonials.map((t, i) => ({ ...t, uniqueId: `duplicate2-${t.id}` })),
    ...testimonials.map((t, i) => ({ ...t, uniqueId: `duplicate3-${t.id}` })),
  ];

  // Refs for tracking animation and positions
  const topCarouselRef = useRef(null);
  const bottomCarouselRef = useRef(null);

  // State to track carousel positions
  const [topCarouselPosition, setTopCarouselPosition] = useState(0);
  const [bottomCarouselPosition, setBottomCarouselPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle infinite looping
  const handleCarouselLoop = () => {
    // Reset position after a full cycle to create the illusion of infinite looping
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
  };

  // Auto-scroll the carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTopCarouselPosition((prev) => prev + 1);
      setBottomCarouselPosition((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle loop transition
  useEffect(() => {
    if (isTransitioning) {
      handleCarouselLoop();
    }
  }, [topCarouselPosition, bottomCarouselPosition, isTransitioning]);

  // Function to render a testimonial card
  const TestimonialCard = ({ testimonial }) => (
    <div className=" bg-[#0D0D0D]/90 rounded-lg border-[2px] border-[#1A1A1A] text-center p-4 flex flex-col h-full">
      <p className="text-white text-sm mb-2 flex-grow">"{testimonial.quote}"</p>
      <div className="">
        <div className="text-center">
          <h4 className="text-white text-xs font-medium">
            {testimonial.author}, {testimonial.position}
          </h4>
        </div>
        <div>
          <div className="flex justify-center items-center space-x-1 mt-2">
            <img alt="icon" src="/icons/company-icon.svg" className="w-4 h-4" />
            <p className="text-gray-400 text-xs">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black py-16 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-medium leading-tight">
            Data Insights Loved by
            <br />
            over{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              500+ Top Brands
            </span>
          </h2>
        </div>

        {/* Top carousel - 3 visible cards */}
        <div
          className="relative mb-8 overflow-hidden w-full"
          ref={topCarouselRef}
        >
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-500" : ""
            }`}
            style={{
              transform: `translateX(-${topCarouselPosition * (100 / 3)}%)`,
              width: `${duplicatedTestimonials.length * (100 / 3)}%`,
            }}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <div
                key={testimonial.uniqueId}
                className="w-1/3 px-2"
                style={{ height: "180px" }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom carousel - 4 visible cards as per your latest code */}
        <div
          className="relative overflow-hidden w-full"
          ref={bottomCarouselRef}
        >
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-500" : ""
            }`}
            style={{
              transform: `translateX(-${bottomCarouselPosition * (100 / 4)}%)`,
              width: `${duplicatedTestimonials.length * (100 / 4)}%`,
            }}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <div
                key={testimonial.uniqueId}
                className="w-1/4 px-2"
                style={{ height: "200px" }}
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
