import React from "react";
import services from "../../assets/services.png"; // <-- Your image

export default function AboutUs() {
  return (
    <section className="w-full bg-white pb-16 px-4 md:px-10 lg:px-20   ">

      {/* 🔵 Top Banner Image */}
      <div className="w-full mb-12 mt-20">
        <img
          src={services}
          alt="About Banner"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Wrapper */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          About <span className="text-blue-600">Hazaribag</span>
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Just Dial Limited is India's No. 1 Local Search engine that provides local 
          search related services through website, mobile site, apps (Android, iOS), 
          voice calls, and SMS. Justdial has also introduced ‘Search Plus’ services 
          to help users complete several daily tasks easily through one platform. 
          This transition enables users not only to discover services but also to 
          complete end-to-end transactions.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          With JD Omni, Justdial helps thousands of SMEs build their online presence 
          through business management solutions. JD Pay enables fast digital payments, 
          and JD Social delivers curated content to millions of users. The Real Time 
          Chat Messenger connects users and vendors instantly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
          Mission
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          To provide fast, free, reliable, and comprehensive information while enabling 
          discovery and transactions for all products and services.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
          Corporate Information
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Starting in 1996, Justdial has grown into India’s largest local search platform. 
          With presence across 250+ cities, deep reach in Tier-II and Tier-III regions, 
          and over 197.7 million quarterly users, the brand continues to strengthen its 
          position with advanced technology and a strong community.
        </p>

        <p className="text-gray-700 leading-relaxed">
          With powerful tools, huge online visibility, payment solutions, websites, 
          mobile apps, and strong market experience, Justdial continues providing immense 
          value to MSMEs, creating strong and lasting business relationships across India.
        </p>
      </div>
    </section>
  );
}
