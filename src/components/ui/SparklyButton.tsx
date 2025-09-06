import React from 'react';

export const SparklyButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-sparkle-gradient text-gray-800 font-inter px-6 py-3 rounded-lg shadow-sparkle relative overflow-hidden hover:scale-105 transition-transform duration-200"
    style={{ position: 'relative' }}
  >
    <span className="absolute inset-0 animate-sparkle pointer-events-none" style={{ background: 'radial-gradient(circle, #FFFACD 10%, transparent 70%)', opacity: 0.5 }} />
    <span className="relative z-10">{children}</span>
  </button>
);
