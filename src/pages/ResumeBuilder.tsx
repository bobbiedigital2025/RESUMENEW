import React from 'react';
import { ResumeForm } from '../components/resume/ResumeForm';
import { WorkflowStepper } from '../components/ui/WorkflowStepper';

export const ResumeBuilder: React.FC = () => (
  <div className="p-8">
    <WorkflowStepper currentPath="/resume" />
    <h2 className="text-3xl font-bold text-pastelPurple mb-4">Resume Builder</h2>
    <p className="text-lg text-pastelBlue mb-6">Create your ATS-optimized resume with AI-powered keyword analysis and smart templates.</p>
    <ResumeForm />
  </div>
);
