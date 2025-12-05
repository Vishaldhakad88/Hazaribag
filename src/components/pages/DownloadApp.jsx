import React from "react";
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import AppImage from "../../assets/app.png";

export default function DownloadApp() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE WITH ANIMATION */}
        <div className="flex justify-center">
          <img
            src={AppImage}
            alt="App Preview"
            className="w-64 md:w-80 lg:w-96 floating-animation drop-shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download <span className="text-blue-600">Hazaribag App</span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Explore all services instantly — from grocery to hospitals, hotels, 
            water supply, online food, travel, and many more.  
            Download the Hazaribag official app and enjoy a smooth & fast experience.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src={GooglePlay}
              alt="Google Play"
              className="w-40 cursor-pointer hover:scale-105 duration-300 drop-shadow-lg"
            />
            <img
              src={AppStore}
              alt="App Store"
              className="w-40 cursor-pointer hover:scale-105 duration-300 drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* FLOATING ANIMATION STYLE */}
      <style>{`
        .floating-animation {
          animation: floatUpDown 3s ease-in-out infinite;
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
