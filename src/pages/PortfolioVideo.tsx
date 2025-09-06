import React from 'react';
import { WorkflowStepper } from '../components/ui/WorkflowStepper';
import { VideoEditor } from '../components/video/VideoEditor';
import { VideoChatGenerator } from '../components/video/VideoChatGenerator';

export const PortfolioVideo: React.FC = () => (
  <div className="p-8">
    <WorkflowStepper currentPath="/video" />
    <h2 className="text-3xl font-bold text-pastelPurple mb-4">Portfolio Video Generator</h2>
    <p className="text-lg text-pastelBlue mb-6">Generate and edit your professional video portfolio with advanced effects and smart automation.</p>
    <VideoChatGenerator />
    <VideoEditor />
  </div>
);
