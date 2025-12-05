import React from "react";

const billsData = [
  { name: "Mobile", icon: "📱" },
  { name: "Electricity", icon: "💡" },
  { name: "DTH", icon: "📡" },
  { name: "Water", icon: "🚰" },
  { name: "Gas", icon: "🛢️" },
  { name: "Insurance", icon: "☂️" },
];

const travelData = [
  { name: "Flight", sub: "Powered By Easemytrip.com", icon: "✈️" },
  { name: "Bus", sub: "Affordable Rides", icon: "🚌" },
  { name: "Train", sub: "Fast Travel", icon: "🚆" },
  { name: "Hotel", sub: "Budget-friendly Stay", icon: "🏨" },
  { name: "Car Rentals", sub: "Drive Easy Anywhere", icon: "🚗" },
];

export default function ServiceSection() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8">

      {/* ==================== Bills Section ==================== */}
      <div className="w-full p-4 border rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          Bills & Recharge
        </h2>

        <p className="text-gray-500 mt-1">
          Pay your bills & recharge instantly with our services.
        </p>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {billsData.map((item, i) => (
            <div
              key={i}
              className="w-full bg-white border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-50 border flex items-center justify-center text-3xl shadow-sm">
                {item.icon}
              </div>

              <p className="mt-2 text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        <button className="text-blue-600 font-semibold mt-4">
          Explore More
        </button>
      </div>

      {/* Divider */}
      <div className="w-full border-t my-8"></div>

      {/* ==================== Travel Section ==================== */}
      <div className="w-full p-4 border rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold">Travel Bookings</h2>
        <p className="text-gray-500 mt-1">
          Instant ticket bookings for your best travel experience.
        </p>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {travelData.map((item, i) => (
            <div
              key={i}
              className="w-full bg-white border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-50 border flex items-center justify-center text-3xl shadow-sm">
                {item.icon}
              </div>

              <p className="mt-2 text-sm font-semibold">{item.name}</p>

              <p className="text-xs text-green-700 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        <button className="text-blue-600 font-semibold mt-4">
          Explore More
        </button>
      </div>
    </div>
  );
}
