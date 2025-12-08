import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import OnlineFood from "../assets/carosalImages/OnlineFood.mp4";
import PlotLand from "../assets/carosalImages/PlotLand.mp4";
import Hospital from "../assets/carosalImages/Hospital.mp4";
import GroceryStore from "../assets/carosalImages/GroceryStore.mp4";
import TourTravel from "../assets/carosalImages/TourTravel.mp4";
import Agriculture from "../assets/carosalImages/Agriculture.mp4";

export default function CarouselVideo() {
  const videos = [
    {
      src: OnlineFood,
      title: "Online Food Delivery",
      desc: "Fast, fresh and reliable food delivery service at your doorstep.",
    },
    {
      src: PlotLand,
      title: "Plot & Land Deals",
      desc: "Best property solutions with trusted and secure land deals.",
    },
    {
      src: Hospital,
      title: "Hospital & Health Care",
      desc: "Quality healthcare services for you and your family.",
    },
    {
      src: GroceryStore,
      title: "Grocery Store",
      desc: "Daily essentials and groceries delivered anytime, anywhere.",
    },
    {
      src: TourTravel,
      title: "Tour & Travel",
      desc: "Explore destinations with our reliable travel services.",
    },
    {
      src: Agriculture,
      title: "Agriculture Services",
      desc: "Smart solutions for farmers with modern agri support.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // Move to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative md:ml-6 md:w-[1300px] w-full overflow-hidden rounded-xl  mt-25">
      {/* Slider wrapper */}
      <div
        className="flex transition-transform duration-700 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {videos.map((item, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            {/* Video */}
            <video
              ref={index === current ? videoRef : null}
              src={item.src}
              className="w-full h-[220px] sm:h-[350px] md:h-[480px] lg:h-[520px] object-cover"
              autoPlay
              muted
              playsInline
              controls={false}
              onEnded={nextSlide}
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 bg-black/40 pt-20 md:pt-50">
              <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
                {item.title}
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-2 max-w-xl drop-shadow-md">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
