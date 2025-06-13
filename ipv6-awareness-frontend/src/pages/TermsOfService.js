import React from 'react';
import { ScaleIcon, ExclamationTriangleIcon, DocumentCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00C47C] dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
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

          {/* Terms Sections */}
          <div className="space-y-8">
            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <ScaleIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  Agreement to Terms
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining the security of your account</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <ExclamationTriangleIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  Prohibited Activities
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  You agree not to engage in any of the following activities:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Interfering with the proper functioning of our services</li>
                  <li>Attempting to gain unauthorized access</li>
                  <li>Using our services for any illegal purposes</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <DocumentCheckIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  Our services and their original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may not copy, modify, or distribute our content</li>
                  <li>You may not use our trademarks without permission</li>
                  <li>You retain rights to your own content</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <UserCircleIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-4" />
                <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white">
                  User Responsibilities
                </h2>
              </div>
              <div className="space-y-4 text-primary/80 dark:text-dark-text-secondary">
                <p>
                  As a user of our services, you are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your use complies with these terms</li>
                  <li>Reporting any security breaches or violations</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-[#00C47C] dark:text-white mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-primary/70 dark:text-dark-text-secondary mb-6">
              If you have any questions about these Terms of Service, please contact us.
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

export default TermsOfService; 