// === src/components/Footer.js ===
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} IPv6 Awareness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;