import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Router } from './Router';

export const App: React.FC = () => (
  <div className="min-h-screen sparkle-bg">
    <Navbar />
    <main className="pt-8">
      <Router />
    </main>
  </div>
);
