import React from "react";
import logo from "../assets/logo/logo.png";
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full py-10 px-6">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img src={logo} alt="Logo" className="w-24 mb-4 drop-shadow-lg" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted service platform.  
            We provide premium home, beauty, and wedding solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Beauty</li>
            <li className="hover:text-white cursor-pointer">Wedding</li>
            <li className="hover:text-white cursor-pointer">Repairs</li>
            <li className="hover:text-white cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-3">

            {/* 3D Social Buttons */}
            <div className="p-3 rounded-2xl bg-white text-gray-900 shadow-[4px_4px_10px_rgba(0,0,0,0.4)] hover:scale-110 hover:shadow-[0_0_20px_#ff0080] transition-all cursor-pointer">
              <FaInstagram size={22} />
            </div>

            <div className="p-3 rounded-2xl bg-white text-gray-900 shadow-[4px_4px_10px_rgba(0,0,0,0.4)] hover:scale-110 hover:shadow-[0_0_20px_#00acee] transition-all cursor-pointer">
              <FaGithub size={22} />
            </div>

            <div className="p-3 rounded-2xl bg-white text-gray-900 shadow-[4px_4px_10px_rgba(0,0,0,0.4)] hover:scale-110 hover:shadow-[0_0_20px_#ea4c89] transition-all cursor-pointer">
              <FaDribbble size={22} />
            </div>

            <div className="p-3 rounded-2xl bg-white text-gray-900 shadow-[4px_4px_10px_rgba(0,0,0,0.4)] hover:scale-110 hover:shadow-[0_0_20px_#0e76a8] transition-all cursor-pointer">
              <FaLinkedin size={22} />
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
}
