import React, { useRef } from "react";
import ParticleCard from "./ParticleCard";
import GlobalSpotlight from "./GlobalSpotlight";
import "./MagicBento.css";

import billIcon from "../assets/Recharge/bill.png";
import dthIcon from "../assets/Recharge/dth.png";
import gasIcon from "../assets/Recharge/gas.png";
import insuranceIcon from "../assets/Recharge/insurance.png";
import mobileIcon from "../assets/Recharge/mobile.png";
import waterIcon from "../assets/Recharge/water.png";

const bills = [
  { name: "Mobile", icon: mobileIcon },
  { name: "Electricity", icon: billIcon },
  { name: "DTH", icon: dthIcon },
  { name: "Water", icon: waterIcon },
  { name: "Gas", icon: gasIcon },
  { name: "Insurance", icon: insuranceIcon },
];

const travel = [
  { name: "Flight", sub: "Easemytrip Powered", icon: "✈️" },
  { name: "Bus", sub: "Affordable Rides", icon: "🚌" },
  { name: "Train", sub: "Fast Travel", icon: "🚆" },
  { name: "Hotel", sub: "Best Price", icon: "🏨" },
  { name: "Cars", sub: "Drive Anywhere", icon: "🚗" },
];

export default function ServiceSection() {
  const gridRef = useRef(null);

  return (
    <>
      <GlobalSpotlight gridRef={gridRef} />

      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-8">

        {/* ---------------- Bills Section ---------------- */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Bills & Recharge
        </h2>

        <div
          ref={gridRef}
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          {bills.map((item, i) => (
            <ParticleCard key={i} particleCount={12} clickEffect={true}>
              <div className="flex flex-col items-center">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center">
                  <img src={item.icon} className="w-10 h-10" />
                </div>
                <p className="mt-2 text-sm font-semibold">{item.name}</p>
              </div>
            </ParticleCard>
          ))}
        </div>

        <button className="btn-3d text-white font-semibold mt-6 px-6 py-2 rounded-lg">
          Explore More
        </button>

        <hr className="my-8" />

        {/* ---------------- Travel Section ---------------- */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Travel Bookings
        </h2>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {travel.map((item, i) => (
            <ParticleCard key={i} particleCount={10} clickEffect={true}>
              <div className="flex flex-col items-center">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <p className="mt-2 text-sm font-bold">{item.name}</p>
                <p className="text-xs text-green-600">{item.sub}</p>
              </div>
            </ParticleCard>
          ))}
        </div>

        <button className="btn-3d text-white font-semibold mt-6 px-6 py-2 rounded-lg">
          Explore More
        </button>
      </div>
    </>
  );
}
