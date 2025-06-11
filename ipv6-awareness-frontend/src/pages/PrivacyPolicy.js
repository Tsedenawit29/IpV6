 // === src/pages/PrivacyPolicy.js ===
import React from 'react';

function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: We collect information that you provide directly to us, such as your name, email address, and any other information you choose to provide.",
        "Usage Information: We collect information about how you use our website, including your IP address, browser type, and pages visited.",
        "Cookies: We use cookies and similar tracking technologies to track activity on our website and hold certain information."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our website",
        "To notify you about changes to our website",
        "To provide customer support",
        "To gather analysis or valuable information so that we can improve our website",
        "To monitor the usage of our website",
        "To detect, prevent and address technical issues"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
        "We regularly review our security measures and update them as necessary to ensure the ongoing security of your personal data."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Right to access your personal data",
        "Right to rectification of inaccurate data",
        "Right to erasure of your data",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing",
        "Right to withdraw consent"
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        "We may use third-party services to help us provide and improve our services. These third parties may have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Privacy Policy
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed mt-4">
          This Privacy Policy describes how we collect, use, and handle your personal information when you use our website.
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-accent">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((paragraph, idx) => (
                <p 
                  key={idx}
                  className="text-primary/80 dark:text-secondary/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-accent">Contact Us</h2>
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-accent mt-1">•</span>
            <div>
              <p className="font-medium text-primary dark:text-white">Email</p>
              <p className="text-primary/80 dark:text-secondary/80">privacy@ipv6awareness.org</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-accent mt-1">•</span>
            <div>
              <p className="font-medium text-primary dark:text-white">Address</p>
              <p className="text-primary/80 dark:text-secondary/80">
                123 IPv6 Street<br />
                Internet City, IC 12345<br />
                United States
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;