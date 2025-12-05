import React, { useState } from "react";

import GroceryStore from "../../assets/Categories/GroceryStore.png";
import Hotels from "../../assets/Categories/Hotels.png";
import Education from "../../assets/Categories/Education.png";
import Hospital from "../../assets/Categories/Hospital.png";
import FashionStore from "../../assets/Categories/FashionStore.png";
import Hardware from "../../assets/Categories/Hardware.png";
import OnlineFood from "../../assets/Categories/OnlineFood.png";
import Tour from "../../assets/Categories/Tour.png";
import Water from "../../assets/Categories/Water.png";
import Wholesale from "../../assets/Categories/Wholesale.png";
import Purchase from "../../assets/Categories/Purchase.png";

import Purchas from "../../assets/Categories/Purchas.png";
import AutomobileRental from "../../assets/Categories/AutomobileRental.png";
import Job from "../../assets/Categories/Job.png";
import Professional from "../../assets/Categories/Professional.png";
import Automobile from "../../assets/Categories/Automobile.png";
import Agriculture from "../../assets/Categories/Agriculture.png";

export default function AllCategories() {
  const [search, setSearch] = useState("");

  const categories = [
    { name: "Grocery Store", img: GroceryStore },
    { name: "Hotels", img: Hotels },
    { name: "Education", img: Education },
    { name: "Hospital", img: Hospital },
    { name: "Fashion Store", img: FashionStore },
    { name: "Hardware Store", img: Hardware },
    { name: "Online Food", img: OnlineFood },
    { name: "Tour & Travel", img: Tour },
    { name: "Water Supply", img: Water },
    { name: "Wholesale Market", img: Wholesale },
    { name: "Purchase Items", img: Purchase },
    { name: " Automobile Rental Property (PG+Flat+Home) ", img: AutomobileRental },
      { name: "Purchase Flat & Home ", img: Purchas },
      { name: "Jobs in Hazaribagh  ", img: Job },
      { name: "Automobile  ", img: Automobile },
      { name: "Agriculture  ", img: Agriculture },
      { name: "Professional  ", img: Professional },
  ];

  const filteredData = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full min-h-screen bg-gray-100 py-10 px-4 md:px-10 lg:px-20">
      
      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        All <span className="text-blue-600">Categories</span>
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Categories..."
          className="w-full md:w-1/2 px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center">
        {filteredData.length > 0 ? (
          filteredData.map((cat, i) => (
            <div
              key={i}
              className="w-full flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-white rounded-2xl border shadow-md flex items-center justify-center hover:shadow-xl overflow-hidden">
                <img src={cat.img} alt={cat.name} className="w-14 h-14 object-contain" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                {cat.name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center mt-10">
            No categories found.
          </p>
        )}
      </div>
    </section>
  );
}
