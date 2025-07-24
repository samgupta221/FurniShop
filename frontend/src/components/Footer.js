import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-5 p-3 text-center">
      <div>© {new Date().getFullYear()} FurniShop &mdash; All Rights Reserved</div>
      <div>
        <a href="mailto:info@furnishop.com" className="text-white mx-2">Contact</a>|
        <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
      </div>
    </footer>
  );
}
