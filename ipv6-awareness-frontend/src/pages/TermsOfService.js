import React from 'react';

function TermsOfService() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this website."
      ]
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials (information or software) on IPv6 Awareness's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        [
          "Modify or copy the materials",
          "Use the materials for any commercial purpose",
          "Attempt to decompile or reverse engineer any software contained on the website",
          "Remove any copyright or other proprietary notations from the materials",
          "Transfer the materials to another person or 'mirror' the materials on any other server"
        ]
      ]
    },
    {
      title: "Disclaimer",
      content: [
        "The materials on IPv6 Awareness's website are provided on an 'as is' basis. IPv6 Awareness makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, IPv6 Awareness does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
      ]
    },
    {
      title: "Limitations",
      content: [
        "In no event shall IPv6 Awareness or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IPv6 Awareness's website, even if IPv6 Awareness or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
      ]
    },
    {
      title: "Accuracy of Materials",
      content: [
        "The materials appearing on IPv6 Awareness's website could include technical, typographical, or photographic errors. IPv6 Awareness does not warrant that any of the materials on its website are accurate, complete, or current.",
        "IPv6 Awareness may make changes to the materials contained on its website at any time without notice. However, IPv6 Awareness does not make any commitment to update the materials."
      ]
    },
    {
      title: "Links",
      content: [
        "IPv6 Awareness has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by IPv6 Awareness of the site.",
        "Use of any such linked website is at the user's own risk."
      ]
    },
    {
      title: "Modifications",
      content: [
        "IPv6 Awareness may revise these terms of service for its website at any time without notice.",
        "By using this website, you are agreeing to be bound by the then current version of these terms of service."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Terms of Service
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed mt-4">
          Please read these terms of service carefully before using our website.
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
        <h2 className="text-2xl font-semibold mb-6 text-accent">Contact Information</h2>
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-accent mt-1">•</span>
            <div>
              <p className="font-medium text-primary dark:text-white">Email</p>
              <p className="text-primary/80 dark:text-secondary/80">legal@ipv6awareness.org</p>
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

export default TermsOfService; 