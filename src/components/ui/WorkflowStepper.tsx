import React from 'react';

const steps = [
  { label: 'Profile', path: '/profile' },
  { label: 'Resume Builder', path: '/resume' },
  { label: 'Portfolio Video', path: '/video' },
  { label: 'Odds Calculator', path: '/odds' },
  { label: 'Admin', path: '/admin' },
];

export const WorkflowStepper: React.FC<{ currentPath: string }> = ({ currentPath }) => (
  <div className="flex justify-center items-center gap-4 my-8">
    {steps.map((step, idx) => {
      const isActive = currentPath === step.path;
      return (
        <a
          key={step.label}
          href={step.path}
          className={`px-4 py-2 rounded-lg font-bold transition shadow-sparkle ${isActive ? 'bg-pastelPink text-pastelPurple scale-105' : 'bg-pastelBlue text-pastelPurple hover:bg-pastelPink hover:text-pastelPurple'}`}
        >
          {step.label}
        </a>
      );
    })}
  </div>
);
