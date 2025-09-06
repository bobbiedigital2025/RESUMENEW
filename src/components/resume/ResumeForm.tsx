import React, { useState } from 'react';

export const ResumeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);

  // Simulate AI keyword extraction
  const handleKeywordAnalysis = () => {
    if (summary) {
      setKeywords(['Leadership', 'Innovation', 'Teamwork', 'AI', 'Automation']);
    }
  };

  return (
    <form className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sparkle max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-pastelPurple mb-4">Resume Details</h3>
      <div className="mb-3">
        <label className="block text-pastelBlue mb-1">Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 rounded border border-pastelPurple" />
      </div>
      <div className="mb-3">
        <label className="block text-pastelBlue mb-1">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 rounded border border-pastelPurple" />
      </div>
      <div className="mb-3">
        <label className="block text-pastelBlue mb-1">Professional Summary</label>
        <textarea value={summary} onChange={e => setSummary(e.target.value)} className="w-full px-3 py-2 rounded border border-pastelPurple" rows={4} />
      </div>
      <button type="button" onClick={handleKeywordAnalysis} className="bg-pastelPink text-pastelPurple px-4 py-2 rounded shadow-sparkle hover:scale-105 transition">Analyze Keywords (AI)</button>
      {keywords.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-bold text-pastelPurple mb-2">AI-Extracted Keywords</h4>
          <ul className="flex flex-wrap gap-2">
            {keywords.map((kw, idx) => (
              <li key={idx} className="bg-pastelYellow text-pastelBlue px-3 py-1 rounded-full shadow">{kw}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
