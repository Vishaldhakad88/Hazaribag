import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions? We’d love to hear from you!  
            Fill the form and our team will contact you shortly.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-700">
            <p>📞 <strong>Phone:</strong> +91 9876543210</p>
            <p>📧 <strong>Email:</strong> support@example.com</p>
            <p>📍 <strong>Address:</strong> Indore, Madhya Pradesh</p>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-xl p-6 md:p-8"
        >
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
