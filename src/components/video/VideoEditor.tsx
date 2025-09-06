import React, { useState } from 'react';

export interface VideoClip {
  id: string;
  name: string;
  startTime: number;
  duration: number;
  effects: string[];
}

export const VideoEditor: React.FC = () => {
  const [clips, setClips] = useState<VideoClip[]>([]);
  const [newClipName, setNewClipName] = useState('');
  const [newClipDuration, setNewClipDuration] = useState(10);

  const addClip = () => {
    setClips([
      ...clips,
      {
        id: Math.random().toString(36).slice(2),
        name: newClipName || `Clip ${clips.length + 1}`,
        startTime: clips.reduce((acc, c) => acc + c.duration, 0),
        duration: newClipDuration,
        effects: [],
      },
    ]);
    setNewClipName('');
    setNewClipDuration(10);
  };

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sparkle max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-pastelPurple mb-4">Portfolio Video Editor</h3>
      <div className="mb-4 flex gap-2">
        <input type="text" placeholder="Clip name" value={newClipName} onChange={e => setNewClipName(e.target.value)} className="px-3 py-2 rounded border border-pastelPurple" />
        <input type="number" min={1} max={60} value={newClipDuration} onChange={e => setNewClipDuration(Number(e.target.value))} className="px-3 py-2 rounded border border-pastelPurple w-24" />
        <button type="button" onClick={addClip} className="bg-pastelPink text-pastelPurple px-4 py-2 rounded shadow-sparkle hover:scale-105 transition">Add Clip</button>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-bold text-pastelPurple mb-2">Timeline</h4>
        <ul className="space-y-2">
          {clips.map((clip, idx) => (
            <li key={clip.id} className="flex items-center gap-4 bg-pastelBlue bg-opacity-60 px-4 py-2 rounded-lg shadow">
              <span className="font-bold text-pastelPurple">{clip.name}</span>
              <span className="text-pastelPink">Start: {clip.startTime}s</span>
              <span className="text-pastelGreen">Duration: {clip.duration}s</span>
              <span className="text-pastelYellow">Effects: {clip.effects.length}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Advanced effects, overlays, and export options will be added here */}
    </div>
  );
}
