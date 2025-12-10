import React, { useState } from "react";

// Importing all category images
import GroceryStore from "../assets/Categories/GroceryStore.png";
import Hotels from "../assets/Categories/Hotels.png";
import Education from "../assets/Categories/Education.png";
import Hospital from "../assets/Categories/Hospital.png";
import FashionStore from "../assets/Categories/FashionStore.png";
import Hardware from "../assets/Categories/Hardware.png";
import OnlineFood from "../assets/Categories/OnlineFood.png";
import Tour from "../assets/Categories/Tour.png";
import Water from "../assets/Categories/Water.png";
import Wholesale from "../assets/Categories/Wholesale.png";
import Purchase from "../assets/Categories/Purchase.png";
import Purchas from "../assets/Categories/Purchas.png";
import AutomobileRental from "../assets/Categories/AutomobileRental.png";
import Job from "../assets/Categories/Job.png";
import Professional from "../assets/Categories/Professional.png";
import Automobile from "../assets/Categories/Automobile.png";
import Agriculture from "../assets/Categories/Agriculture.png";

const data = [
  { name: "Grocery Store", img: GroceryStore },
  { name: "Hotels", img: Hotels },
  { name: "Education", img: Education },
  { name: "Hospital", img: Hospital },
  { name: "Fashion Store", img: FashionStore },
  { name: "Hardware", img: Hardware },
  { name: "Online Food", img: OnlineFood },
  { name: "Tour & Travel", img: Tour },
  { name: "Water Supply", img: Water },
  { name: "Wholesale Market", img: Wholesale },
  { name: "Purchase Plot & Land", img: Purchase },
  { name: "Automobile Rental Property (PG+Flat+Home)", img: AutomobileRental },
  { name: "Purchase Flat & Home", img: Purchas },
  { name: "Jobs in Hazaribagh", img: Job },
  { name: "Automobile", img: Automobile },
  { name: "Agriculture", img: Agriculture },
];

export default function CategoriesGrid() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ⭐ Only 4x4 = 16 items show
  const limitedData = filteredData.slice(0, 16);

  return (
    <div className="w-full p-6">
      {/* 🔍 Modern Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full py-3 px-5 pl-12 
              bg-white/20 backdrop-blur-xl border border-gray/30
              rounded-2xl shadow-lg 
              text-gray-800 placeholder-gray-600
              focus:ring-2 focus:ring-blue-400 focus:border-transparent
              transition-all duration-300 outline-none
            "
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">
            🔍
          </span>
        </div>
      </div>

      <style>{`
        @keyframes smoothZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .zoom-card {
          animation: smoothZoom 4s ease-in-out infinite;
        }
      `}</style>

      {/* 4x4 Grid (16 items max) */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 place-items-center">

        {limitedData.map((item, i) => (
          <div
            key={i}
            className="zoom-card flex flex-col items-center text-center cursor-pointer transition-all"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center overflow-hidden 
              shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
              hover:shadow-[0_15px_40px_rgb(0,0,0,0.2)]
              transform-gpu transition-all duration-300 hover:-translate-y-2"
            >
              <img src={item.img} alt={item.name} className="w-14 h-14 object-contain" />
            </div>

            <p className="mt-2 text-sm font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>

      {limitedData.length === 0 && (
        <p className="text-center text-gray-500 mt-6 text-sm">
          No categories found...
        </p>
      )}
    </div>
  );
}
