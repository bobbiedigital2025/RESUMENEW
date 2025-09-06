import React from 'react';

export interface VideoChatControlsProps {
  onUndo: () => void;
  onRedo: () => void;
  onSave: () => void;
  onLoad: () => void;
  onExport: () => void;
}

export const VideoChatControls: React.FC<VideoChatControlsProps> = ({ onUndo, onRedo, onSave, onLoad, onExport }) => (
  <div className="flex gap-4 mb-4 justify-center">
    <button className="bg-pastelPink text-pastelPurple px-4 py-2 rounded shadow-sparkle" onClick={onUndo}>Undo</button>
    <button className="bg-pastelBlue text-pastelPurple px-4 py-2 rounded shadow-sparkle" onClick={onRedo}>Redo</button>
    <button className="bg-pastelGreen text-pastelPurple px-4 py-2 rounded shadow-sparkle" onClick={onSave}>Save Session</button>
    <button className="bg-pastelYellow text-pastelPurple px-4 py-2 rounded shadow-sparkle" onClick={onLoad}>Load Session</button>
    <button className="bg-pastelPurple text-pastelPink px-4 py-2 rounded shadow-sparkle" onClick={onExport}>Export History</button>
  </div>
);
