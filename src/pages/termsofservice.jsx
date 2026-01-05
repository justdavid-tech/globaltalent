import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function TermsOfService() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: <span className="font-medium">20/12/2025</span>
          </p>
          <div className="mt-4 h-1 w-20 rounded bg-[#EE7B30]" />
        </header>

        {/* Content */}
        <section className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            These Terms of Service govern your access to our platform, coaching,
            and resources. By using our services, you agree to these terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Our Services
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remote job career training</li>
              <li>Expert coaching from certified professionals</li>
              <li>Access to valuable learning resources</li>
              <li>Job placement support and guidance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. No Job Guarantee
            </h2>
            <p>
              While we support job placement, we do not guarantee employment.
              Final hiring decisions are made by third-party employers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information</li>
              <li>Use the platform for lawful purposes only</li>
              <li>Do not copy, resell, or redistribute our content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Payments
            </h2>
            <p>
              All fees must be paid as agreed during enrollment. Refund policies,
              if available, will be clearly stated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              We are not responsible for job outcomes, loss of income, or actions
              of third-party employers. Services are provided “as is.”
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Contact
            </h2>
            <p>
              If you have questions about these terms, contact us at{" "}
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
