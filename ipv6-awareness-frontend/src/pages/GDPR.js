import React from 'react';

function GDPR() {
  const sections = [
    {
      title: "Your Rights Under GDPR",
      content: [
        "Under the General Data Protection Regulation (GDPR), you have several rights regarding your personal data:",
        [
          "Right to Access: You can request a copy of your personal data.",
          "Right to Rectification: You can request correction of inaccurate data.",
          "Right to Erasure: You can request deletion of your personal data.",
          "Right to Restrict Processing: You can request limitation of data processing.",
          "Right to Data Portability: You can request transfer of your data.",
          "Right to Object: You can object to processing of your data.",
          "Right to Withdraw Consent: You can withdraw your consent at any time."
        ]
      ]
    },
    {
      title: "How We Process Your Data",
      content: [
        "We process your personal data in accordance with GDPR requirements:",
        [
          "Lawfully, fairly, and transparently",
          "For specified, explicit, and legitimate purposes",
          "Limited to what is necessary",
          "Accurately and kept up to date",
          "Stored only as long as necessary",
          "Securely and confidentially"
        ]
      ]
    },
    {
      title: "Data Collection and Use",
      content: [
        "We collect and process personal data for the following purposes:",
        [
          "To provide and maintain our website",
          "To notify you about changes to our services",
          "To provide customer support",
          "To gather analysis or valuable information",
          "To monitor the usage of our website",
          "To detect, prevent and address technical issues"
        ]
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal data:",
        [
          "Encryption of personal data",
          "Regular security assessments",
          "Access controls and authentication",
          "Staff training on data protection",
          "Incident response procedures",
          "Regular backups and recovery procedures"
        ]
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "When we transfer your personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place:",
        [
          "Standard contractual clauses",
          "Binding corporate rules",
          "Adequacy decisions by the European Commission",
          "Approved certification mechanisms"
        ]
      ]
    },
    {
      title: "Data Breach Notification",
      content: [
        "In case of a personal data breach, we will:",
        [
          "Notify the relevant supervisory authority within 72 hours",
          "Inform affected individuals without undue delay",
          "Document all breaches and our response",
          "Take steps to mitigate any adverse effects"
        ]
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        GDPR Compliance
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed mt-4">
          This page outlines our commitment to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
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
        <h2 className="text-2xl font-semibold mb-6 text-accent">Contact Our Data Protection Officer</h2>
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          For any questions regarding your personal data or to exercise your rights, please contact our Data Protection Officer:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-accent mt-1">•</span>
            <div>
              <p className="font-medium text-primary dark:text-white">Email</p>
              <p className="text-primary/80 dark:text-secondary/80">dpo@ipv6awareness.org</p>
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

      <div className="mt-8 text-center">
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          To exercise your rights or make a data protection request, please use our dedicated form:
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300">
          Submit Data Request
        </button>
      </div>
    </div>
  );
}

export default GDPR; 