import React from "react";

const data = [
  { name: "Restaurants", icon: "🍽️" },
  { name: "Hotels", icon: "🏨" },
  { name: "Beauty Spa", icon: "💆‍♀️" },
  { name: "Home Decor", icon: "🛋️" },
  { name: "Wedding Planning", icon: "👰" },
  { name: "Education", icon: "🎓" },
  { name: "Rent & Hire", icon: "🎤" },
  { name: "Hospitals", icon: "🏥" },
  { name: "Contractors", icon: "👷" },
  { name: "Pet Shops", icon: "🐶" },
  { name: "PG/Hostels", icon: "🛏️" },
  { name: "Estate Agent", icon: "👨‍💼" },
  { name: "Dentists", icon: "🦷" },
  { name: "Gym", icon: "🏋️" },
  { name: "Loans", icon: "💰" },
  { name: "Event Organisers", icon: "🎉" },
  { name: "Driving Schools", icon: "🚗" },
  { name: "Packers & Movers", icon: "📦" },
  { name: "Courier Service", icon: "📮" },
  { name: "Popular Categories", icon: "≡" },
];

export default function CategoriesGrid() {
  return (
    <div className="w-full p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-6 place-items-center">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <div className="w-20 h-20 rounded-2xl shadow-md border flex items-center justify-center text-4xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {item.icon}
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
