import React from "react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-14 px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Terms of Use</h1>
          <p className="mt-4 text-lg opacity-90">
            Version 1.4 | Last updated: 1st November 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none px-6 sm:px-10 md:px-16 py-12 text-gray-700 leading-relaxed space-y-10">
          <section className="text-center text-sm text-gray-500 italic">
            <p>
              This document is an electronic record in terms of the Information Technology Act, 2000 and rules thereunder.
              No physical or digital signatures are required.
            </p>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">1. Introduction</h2>
            <p>
              The website and mobile application <strong>“Hazaribag Market”</strong> (collectively referred to as the <strong>“Platform”</strong>) is owned, operated and managed by <strong>Hazaribag Market Private Limited</strong>, a company incorporated under the Companies Act, 2013 and having its registered office in Hazaribag, Jharkhand, India.
            </p>
            <p className="mt-4">
              These Terms of Use (“Terms”) govern your use of the Platform. By accessing or using the Platform, you agree to be legally bound by these Terms and our Privacy Notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">2. Access to Services</h2>
            <p>
              Hazaribag Market enables transactions between participating sellers/service providers (“Sellers”) and users (“You”). We act only as a facilitator and are not a party to any transaction between You and the Sellers.
            </p>
            <ul className="list-disc pl-8 space-y-3 mt-5">
              <li>You may purchase groceries, beauty products, electronics, repair services, wedding services, event planning and more.</li>
              <li>Delivery is provided via third-party logistics partners.</li>
              <li>Ranking of products is organic and based on popularity, relevance, and user behaviour.</li>
              <li>We do not hold inventory or title to any products listed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">3. Eligibility</h2>
            <p>You must be at least 18 years old and competent to contract under Indian law to use our Platform. Minors may only use the Platform under parental supervision.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">4. User Account & Security</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password. Notify us immediately of any unauthorized use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">5. Payments</h2>
            <p>We support multiple payment methods. All transactions are processed through secure third-party payment gateways. You agree to provide accurate payment details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">6. Pricing & Charges</h2>
            <p>Product prices are set by Sellers. We display MRP or discounted prices. Additional charges like delivery fee, platform fee, handling charges may apply and will be shown at checkout.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">7. Delivery</h2>
            <p>We aim for fast delivery but actual time may vary due to traffic, weather, demand, or force majeure events. You are responsible for providing correct delivery address.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">8. Returns, Cancellations & Refunds</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Returns accepted only for wrong/damaged items with proof</li>
              <li>Cancellation possible before seller accepts the order</li>
              <li>Refunds processed within 7 business days</li>
              <li>No returns on digital products/gift cards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">9. Prohibited Activities</h2>
            <p>You shall not:</p>
            <ul className="list-disc pl-8 space-y-2 mt-3">
              <li>Use the Platform for unlawful purposes</li>
              <li>Post false, defamatory or harmful content</li>
              <li>Attempt to hack, DDoS or disrupt the Platform</li>
              <li>Reverse engineer or copy the Platform</li>
              <li>Discriminate against delivery partners</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">10. Intellectual Property</h2>
            <p>All content, trademarks, logos on the Platform are owned or licensed by Hazaribag Market. Unauthorized use is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Hazaribag Market shall not be liable for any indirect, incidental, or consequential damages arising from use of the Platform. Our total liability shall not exceed the amount paid by you for the specific order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">12. Governing Law</h2>
            <p>These Terms shall be governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of courts in Hazaribag, Jharkhand.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">13. Grievance Officer</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p><strong>Name:</strong> Legal Team</p>
              <p><strong>Email:</strong> legal@hazaribagmarket.com</p>
              <p><strong>Address:</strong> Hazaribag Market Pvt Ltd, Hazaribag, Jharkhand</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5">14. Contact Us</h2>
            <p>
              For any queries, write to us at:{" "}
              <a href="mailto:support@hazaribagmarket.com" className="text-blue-600 font-semibold hover:underline">
                support@hazaribagmarket.com
              </a>
            </p>
          </section>

          {/* Footer */}
          <footer className="text-center py-12 border-t-2 border-gray-200 mt-16">
            <p className="text-lg font-medium text-gray-800">
              © {new Date().getFullYear()} Hazaribag Market Private Limited
            </p>
            <p className="text-sm text-gray-600 mt-2">All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}