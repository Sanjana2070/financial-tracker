// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-white">
      {/* Decorative Background Blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>

      {/* Actual Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600 z-10 relative">
        © {new Date().getFullYear()} <span className="font-medium text-gray-800">budget-tracker</span>. All rights reserved.
      </div>
    </footer>
  );
}

