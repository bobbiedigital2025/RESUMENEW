import React from 'react';
import { Link } from 'wouter';

export const Navbar: React.FC = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4 bg-pastelBlue bg-opacity-80 shadow-sparkle">
    <div className="text-2xl font-bold text-pastelPurple">BoDiGi IWork</div>
    <div className="flex gap-6">
      <Link href="/resume"><span className="hover:text-pastelPink transition">Resume Builder</span></Link>
      <Link href="/video"><span className="hover:text-pastelPink transition">Portfolio Video</span></Link>
      <Link href="/odds"><span className="hover:text-pastelPink transition">Odds Calculator</span></Link>
      <Link href="/admin"><span className="hover:text-pastelPink transition">Admin</span></Link>
      <Link href="/legal"><span className="hover:text-pastelPink transition">Legal</span></Link>
    </div>
  </nav>
);
