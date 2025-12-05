import React from "react";

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
  { name: " Automobile Rental Property (PG+Flat+Home) ", img: AutomobileRental },
  { name: "Purchase Flat & Home ", img: Purchas },
  { name: "Jobs in Hazaribagh  ", img: Job },
  { name: "Automobile  ", img: Automobile },
  { name: "Agriculture  ", img: Agriculture },
  // { name: "Professional  ", img: Professional },
];

export default function CategoriesGrid() {
  return (
    <div className="w-full p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-6 place-items-center">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Image Box */}
          <div className="w-20 h-20 rounded-2xl shadow-md border bg-white flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Text */}
          <p className="mt-2 text-sm font-medium text-gray-700">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
