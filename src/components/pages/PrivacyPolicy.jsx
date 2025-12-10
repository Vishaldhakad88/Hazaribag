import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12 px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Privacy Notice</h1>
          <p className="mt-4 text-lg opacity-90">
            Version 1.1 | Last updated: 17th June 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none px-6 sm:px-10 md:px-16 py-12 text-gray-700 leading-relaxed space-y-8">
          <section>
            <p className="text-base sm:text-lg">
              This Notice applies to <strong>Hazaribag Market Private Limited</strong> (hereinafter referred to as “Hazaribag Market” or “the Company”), a company incorporated under the Companies Act, 2013 and having its registered office at Hazaribag, Jharkhand, India and its subsidiaries, its holding company, its affiliates. The Company is the owner of the website and mobile application <strong>‘Hazaribag Market’</strong> (collectively, the “Platform”).
            </p>
            <p className="mt-4">
              This privacy notice (<strong>Privacy Notice</strong>) describes the policies and procedures applicable to the collection, use, storage, disclosure and protection of Your information shared with Us while You use the Platform. For the purpose of this Privacy Notice “We”, “Us”, or “Our” refers to Hazaribag Market Private Limited and its subsidiaries, holding company, affiliates, wherever context so requires and the terms “You”, “Your”, “Yourself” or “User” refer to user of the Platform.
            </p>
            <p className="mt-4">
              We value the trust You place in Us. That is why We maintain reasonable security standards for securing the transactions and Your information.
            </p>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">1. Collection of Information</h2>
            <p>We collect various information from You when You access or visit the Platform, register or set up an Account, or use the Platform.</p>
            <ul className="list-disc pl-8 space-y-3 mt-4">
              <li><strong>Personal Information:</strong> Name, mobile number, email, date of birth, gender, address, KYC documents (PAN, Aadhaar, etc.), business details, health/lifestyle info, IP address, device info, etc.</li>
              <li><strong>Sensitive Personal Information:</strong> Passwords, bank/credit card details, health conditions, biometric data, etc.</li>
              <li><strong>Transactional Information:</strong> Order history, preferences, SMS data, payment behaviour.</li>
              <li><strong>Location-based Information:</strong> GPS location, IP address for personalized services.</li>
              <li><strong>Non-Personal Information:</strong> Cookies, browser type, pages visited, referral URLs, etc.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">2. Use of Information</h2>
            <p>We use your information lawfully for:</p>
            <ul className="list-disc pl-8 space-y-2 mt-4">
              <li>Account creation & identity verification</li>
              <li>Providing services delivery and improvement</li>
              <li>Payment processing & fraud prevention</li>
              <li>Personalized marketing & offers</li>
              <li>Customer support & dispute resolution</li>
              <li>Security, analytics & research</li>
              <li>Legal & regulatory compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">3. Sharing of Information</h2>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-8 space-y-2 mt-4">
              <li>Service providers (delivery partners, payment gateways, cloud services)</li>
              <li>Business partners & affiliates</li>
              <li>Government & law enforcement (when legally required)</li>
              <li>In case of merger, acquisition or business transfer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">4. Security Precautions</h2>
            <p>
              We use industry-standard encryption, secure servers, and reasonable safeguards to protect your data. However, no method of transmission over the internet is 100% secure. You are also responsible for keeping your account credentials confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">5. Data Retention</h2>
            <p>We retain your data only as long as necessary for business or legal purposes. You can request deletion of your data anytime.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent anytime</li>
              <li>Opt-out of marketing communications</li>
              <li>Nominate a representative (in case of death/incapacity)</li>
              <li>File a complaint with authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">7. Children's Privacy</h2>
            <p>
              Our Platform is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">8. Grievance Officer</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p><strong>Name:</strong> Legal Team</p>
              <p><strong>Email:</strong> legal@hazaribagmarket.com</p>
              <p><strong>Address:</strong> Hazaribag Market Pvt Ltd, Hazaribag, Jharkhand, India</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-2xl mb-4">9. Contact Us</h2>
            <p>
              For any questions about this Privacy Notice, please contact us at: 
              <a href="mailto:support@hazaribagmarket.com" className="text-purple-600 font-medium ml-1">
                support@hazaribagmarket.com
              </a>
            </p>
          </section>

          <footer className="text-center py-10 border-t border-gray-200 mt-12">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Hazaribag Market Private Limited. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}