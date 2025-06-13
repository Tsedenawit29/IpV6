// === src/pages/PrivacyPolicy.js ===
import React from 'react';
import { ShieldCheckIcon, DocumentTextIcon, UserGroupIcon, LockClosedIcon } from '@heroicons/react/24/outline';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00C47C] dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 mb-8 shadow-lg">
            <p className="text-primary/60 dark:text-dark-text-secondary/60">
              Last Updated: March 15, 2024
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                  <li>Technical information about your device and internet connection</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <DocumentTextIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Improve and personalize your experience</li>
                  <li>Communicate with you about updates and changes</li>
                  <li>Ensure the security of our platform</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <UserGroupIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  Information Sharing
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Partners with your explicit consent</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <LockClosedIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  Data Security
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage and transmission</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-primary/70 dark:text-dark-text-secondary mb-6">
              If you have any questions or concerns about our privacy practices, please contact us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;