import React from 'react';

function CookiePolicy() {
  const sections = [
    {
      title: "What Are Cookies",
      content: [
        "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.",
        "Cookies can be 'persistent' or 'session' cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser."
      ]
    },
    {
      title: "How We Use Cookies",
      content: [
        "We use cookies for several purposes, including:",
        [
          "Essential cookies: These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
          "Analytics cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
          "Preference cookies: These cookies enable our website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.",
          "Marketing cookies: These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user."
        ]
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: [
        "First-party cookies: These are cookies that are set by our website directly.",
        "Third-party cookies: These are cookies set by a third-party website. We use these for analytics and marketing purposes.",
        "Session cookies: These are temporary cookies that expire when you close your browser.",
        "Persistent cookies: These cookies remain on your device until they expire or you delete them."
      ]
    },
    {
      title: "Managing Cookies",
      content: [
        "Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website.",
        "To learn more about cookies and how to manage them, visit www.aboutcookies.org or www.allaboutcookies.org."
      ]
    },
    {
      title: "Cookie Consent",
      content: [
        "When you first visit our website, we will ask for your consent to set cookies on your device. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences.",
        "You can change your cookie preferences at any time by clicking on the 'Cookie Settings' link in the footer of our website."
      ]
    },
    {
      title: "Updates to This Policy",
      content: [
        "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "The date at the top of this policy indicates when it was last updated."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Cookie Policy
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed mt-4">
          This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website.
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
                <div key={idx}>
                  {Array.isArray(paragraph) ? (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {paragraph.map((item, itemIdx) => (
                        <li 
                          key={itemIdx}
                          className="text-primary/80 dark:text-secondary/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-primary/80 dark:text-secondary/80 leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-accent">Contact Us</h2>
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy; 