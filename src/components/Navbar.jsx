import React, { useState } from "react";
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-40 h-10 object-contain" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg">
        <Link to="/"><li className="hover:text-gray-300 cursor-pointer">Home</li></Link>
        <Link to="/about"><li className="hover:text-gray-300 cursor-pointer">About Us</li></Link>
        <Link to="/services"><li className="hover:text-gray-300 cursor-pointer">All Services</li></Link>
        <Link to="/download"><li className="hover:text-gray-300 cursor-pointer">DownloadApp</li></Link>
        <Link to="/contact"><li className="hover:text-gray-300 cursor-pointer">Contact</li></Link>
      </ul>

      {/* Desktop Icons + Button */}
      <div className="hidden md:flex items-center gap-6 text-xl">
        <FaInstagram className="cursor-pointer" />
        <FaGithub className="cursor-pointer" />
        <FaDribbble className="cursor-pointer" />
        <FaLinkedin className="cursor-pointer" />

        <Link to="/download">
          <button className="ml-4 bg-orange-400 hover:bg-orange-600 px-5 py-2 rounded-md text-white text-lg shadow-md">
            Download App
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
        <RxHamburgerMenu />
      </button>

      {/* Mobile Full Screen Menu */}
      {open && (
        <div className="fixed inset-0 bg-gray-800 text-white flex flex-col justify-start items-start px-10 pt-14 space-y-7 text-2xl transition-all duration-300">
          
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            <RxCross2 />
          </button>

          <ul className="flex flex-col gap-6 mt-4">
            <Link to="/" onClick={() => setOpen(false)}>
              <li className="flex items-center gap-2 cursor-pointer border-b border-gray-700 pb-1">↗ Home</li>
            </Link>

            <Link to="/about" onClick={() => setOpen(false)}>
              <li className="text-gray-300 cursor-pointer">About Us</li>
            </Link>

            <Link to="/services" onClick={() => setOpen(false)}>
              <li className="text-gray-300 cursor-pointer">All Services</li>
            </Link>

            <Link to="/download" onClick={() => setOpen(false)}>
              <li className="text-gray-300 cursor-pointer">Download App</li>
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              <li className="text-gray-300 cursor-pointer">Contact</li>
            </Link>
          </ul>

          <Link to="/download" onClick={() => setOpen(false)}>
            <button className="mt-4 bg-blue-500 w-full hover:bg-blue-600 px-5 py-3 rounded-md text-white text-xl shadow-md">
              Download App
            </button>
          </Link>

          {/* Mobile Icons */}
          <div className="flex gap-6 text-xl absolute bottom-10">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>
      )}
    </nav>
  );
}
