import React, { useEffect, useState } from "react";
import caro1 from "../assets/carosalImages/caro1.png";
import caro2 from "../assets/carosalImages/caro2.png";
import caro3 from "../assets/carosalImages/caro3.png";

export default function Slider() {
  const slides = [
    {
      img: caro1,
      title: "Professional Painter Services",
      desc: "Ghar ko perfect finishing dene ke liye trained painters.",
      btn: "Book Now",
    },
    {
      img: caro2,
      title: "Expert Plumbing Solutions",
      desc: "Leakage, fitting aur maintenance – expert plumbers ke saath.",
      btn: "Book Now",
    },
    {
      img: caro3,
      title: "Certified Electrician Support",
      desc: "Wiring, repair aur installation – safe and professional work.",
      btn: "Book Now",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden bg-gray-300">
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-slideIn">
        <h2 className="text-3xl md:text-5xl font-bold text-black-400 mb-4">{slides[index].title}</h2>
        <p className="text-lg md:text-xl text-orange-400 mb-6">{slides[index].desc}</p>
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold">
          {slides[index].btn}
        </button>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
        <img
          key={index}
          src={slides[index].img}
          alt="slide"
          className="w-[90%] md:w-[80%] transition-all duration-700 ease-in-out animate-imageMove object-contain"
        />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease forwards;
        }

        @keyframes imageMove {
          0% { opacity: 0; transform: translateX(50px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-imageMove {
          animation: imageMove 0.9s ease forwards;
        }
      `}</style>
    </div>
  );
}