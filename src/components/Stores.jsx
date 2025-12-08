import React from "react";

// Import Store Images
import store1 from "../assets/Store/store1.png";
import store2 from "../assets/Store/store2.png";
import store3 from "../assets/Store/store3.png";
import store4 from "../assets/Store/store4.png";
import store5 from "../assets/Store/store5.png";
import store6 from "../assets/Store/store6.png";
import store7 from "../assets/Store/store7.png";
import store8 from "../assets/Store/store8.png";

export default function Stores() {
  const stores = [
    { name: "Store 1", img: store1 },
    { name: "Store 2", img: store2 },
    { name: "Store 3", img: store3 },
    { name: "Store 4", img: store4 },
    { name: "Store 5", img: store5 },
    { name: "Store 6", img: store6 },
    { name: "Store 7", img: store7 },
    { name: "Store 8", img: store8 },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Popular <span className="text-blue-600">Stores</span>
      </h2>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {stores.map((store, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={store.img}
              alt={store.name}
              className="w-full h-32 object-contain"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">
              {store.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
