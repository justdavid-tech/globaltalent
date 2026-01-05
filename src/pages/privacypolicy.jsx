import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: <span className="font-medium">24/12/2025</span>
          </p>
          <div className="mt-4 h-1 w-20 rounded bg-[#EE7B30]" />
        </header>

        {/* Content */}
        <section className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            Welcome to our platform. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            information when you join over <strong>2,100+ successful students</strong>
            preparing to land their <strong>first remote job</strong>.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details such as name, email, and contact number</li>
              <li>Learning progress, activity, and communication with coaches</li>
              <li>Technical data like IP address, browser type, and cookies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide expert coaching and hands-on training</li>
              <li>Grant access to learning resources</li>
              <li>Offer job placement guidance and career support</li>
              <li>Improve our services and platform experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Cookies
            </h2>
            <p>
              We use cookies to improve user experience, analyze traffic, and
              remember preferences. You can disable cookies in your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Data Protection
            </h2>
            <p>
              We apply industry-standard security measures to protect your
              personal data. However, no system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal information. Contact us at{" "}
              <span className="text-[#EE7B30] font-medium">
                [your email address]
              </span>.
            </p>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
