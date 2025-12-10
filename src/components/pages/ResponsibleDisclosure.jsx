import React from "react";

export default function ResponsibleDisclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
            Responsible Disclosure Policy
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            At <strong>Hazaribag Market</strong>, we take the security of our systems very seriously. We value the security community and appreciate researchers who responsibly disclose vulnerabilities.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">

          {/* Main Content */}
          <div className="p-8 sm:p-12 lg:p-16 space-y-12 text-gray-700">

            {/* Intro */}
            <section className="text-center text-lg leading-relaxed">
              <p>
                If you discover a vulnerability in our platform, we encourage you to report it responsibly. We work closely with researchers to validate and fix issues quickly — and publicly acknowledge contributions when requested.
              </p>
            </section>

            <hr className="border-gray-300" />

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-6">
                To Be Eligible for Recognition
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">Check</span>
                  Be the <strong>first person</strong> to responsibly disclose the bug
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">Check</span>
                  Report a vulnerability that could compromise user data, bypass protections, or grant unauthorized access
                </li>
              </ul>
            </section>

            {/* Recognition */}
            <section className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-2xl border border-teal-200">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">Types of Recognition</h2>
              <p className="text-xl font-semibold text-teal-700">
                Hall of Fame (Public Acknowledgement)
              </p>
              <p className="mt-3 text-gray-700">
                We proudly list ethical researchers who help make Hazaribag Market safer.
              </p>
            </section>

            {/* Rules of Engagement */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6">
                Rules of Engagement
              </h2>
              <div className="space-y-6 text-lg bg-red-50 p-6 rounded-xl border border-red-200">
                <div>
                  <p className="font-bold text-green-700 mb-3">Do:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Give us reasonable time to investigate and fix</li>
                    <li>Use test accounts only</li>
                    <li>Stop immediately if you gain access to sensitive data</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-red-700 mb-3">Never:</p>
                  <ul className="list-disc pl-8 space-y-2 text-red-700 font-medium">
                    <li>Perform DoS/DDoS attacks</li>
                    <li>Access or modify user data without permission</li>
                    <li>Exploit the vulnerability beyond proof of concept</li>
                    <li>Publicly disclose before we fix it</li>
                    <li>Use automated scanners aggressively</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* In Scope */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6">
                In Scope
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Hazaribag Market Android App",
                  "Hazaribag Market iOS App",
                  "Delivery Partner App",
                  "Cafe / Store Partner App",
                  "hazaribagmarket.com",
                  "Any *.hazaribagmarket.com subdomain",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Qualifying Vulnerabilities */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
                Qualifying Vulnerabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  "SQL Injection / NoSQL Injection",
                  "Cross-Site Scripting (XSS)",
                  "Server-Side Request Forgery (SSRF)",
                  "Remote Code Execution (RCE)",
                  "Authentication Bypass",
                  "Account Takeover",
                  "Payment Logic Flaws",
                  "Sensitive Data Exposure",
                  "Business Logic Vulnerabilities",
                  "IDOR (Insecure Direct Object Reference)",
                ].map((vuln, i) => (
                  <div
                    key={i}
                    className="bg-green-50 border-l-4 border-blue-800 p-5 rounded-r-lg"
                  >
                    <p className="font-semibold text-green-800">{vuln}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Out of Scope */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
                Out of Scope (Not Eligible)
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                {[
                  "Spam / Phishing reports",
                  "Clickjacking without demonstrated impact",
                  "Missing security headers",
                  "Rate limiting issues",
                  "Open redirects (without sensitive data leak)",
                  "Self-XSS",
                  "Email/SMS bombing",
                  "Physical attacks",
                  "Social engineering",
                  "Scanner output without PoC",
                  "DoS / Resource exhaustion",
                  "Issues requiring rooted/jailbroken device",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-red-500 mr-2 text-xl">Cross</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* How to Report */}
            <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white p-10 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-6">How to Report a Vulnerability</h2>
              <p className="text-xl mb-8">
                Send a detailed report with steps to reproduce, screenshots/videos, and impact assessment to:
              </p>
              <a
                href="mailto:security@hazaribagmarket.com"
                className="inline-block bg-white text-purple-700 font-bold text-xl px-10 py-5 rounded-full hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
              >
                security@hazaribagmarket.com
              </a>
              <p className="mt-8 text-lg opacity-90">
                We typically respond within <strong>48 hours</strong> and aim to fix critical issues as fast as possible.
              </p>
            </section>

            {/* Acknowledgements */}
            <section className="text-center py-12 border-t-4 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Acknowledgements</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We do not offer bug bounties or cash rewards at this time, but we sincerely thank every researcher who helps keep our users safe.
                <br /><br />
                Valid, high-quality reports may be featured in our <strong>Hall of Fame</strong> with your name/handle (if you wish).
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-900 text-gray-300 py-8 text-center">
            <p className="text-lg">
              © {new Date().getFullYear()} Hazaribag Market Private Limited
            </p>
            <p className="text-sm mt-2">All rights reserved. Made with care in Hazaribag</p>
          </div>
        </div>
      </div>
    </div>
  );
}