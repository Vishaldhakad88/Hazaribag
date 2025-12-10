import React from "react";
import logo from "../assets/logo/logo.png";
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <img src={logo} alt="Hazaribag Market" className="w-40 mb-4 drop-shadow-lg" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted service platform. We provide premium home, beauty, and wedding solutions across Hazaribag and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/about">About Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/services">Services</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/contact">Contact</Link></li>
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

        {/* Social + Follow Us */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <div className="p-3 rounded-2xl  text-pink-600 shadow-lg hover:scale-110 hover:shadow-pink-500/50 transition-all cursor-pointer">
              <FaInstagram size={22} />
            </div>
            <div className="p-3 rounded-2xl  text-blue-500 shadow-lg hover:scale-110 hover:shadow-blue-500/50 transition-all cursor-pointer">
              <FaYoutube size={22} />
            </div>
            <div className="p-3 rounded-2xl  text-blue-600 shadow-lg hover:scale-110 hover:shadow-blue-600/50 transition-all cursor-pointer">
              <FaFacebook size={22} />
            </div>
            {/* <div className="p-3 rounded-2xl bg-white text-linkedin shadow-lg hover:scale-110 hover:shadow-linkedin/50 transition-all cursor-pointer">
              <FaLinkedin size={22} />
            </div> */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 my-10"></div>

      {/* Bottom Links + Copyright */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400 mb-4">
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-white transition">Terms of Use</Link>
          <span>|</span>
          <Link to="/responsible-disclosure" className="hover:text-white transition">
            Responsible Disclosure Policy
          </Link>
        </div>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Hazaribag Market. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}