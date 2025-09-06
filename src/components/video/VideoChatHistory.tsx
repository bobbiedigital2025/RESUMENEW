import React from 'react';

export interface ChatMessage {
  id: string;
  sender: 'User' | 'AI';
  text: string;
  timestamp: number;
}

export interface VideoChatHistoryProps {
  history: ChatMessage[];
  onEdit?: (id: string, newText: string) => void;
  onDelete?: (id: string) => void;
  onReplay?: (id: string) => void;
}

export const VideoChatHistory: React.FC<VideoChatHistoryProps> = ({ history, onEdit, onDelete, onReplay }) => (
  <div className="bg-pastelBlue bg-opacity-60 rounded p-4 h-64 overflow-y-auto mb-2">
    {history.map(msg => (
      <div key={msg.id} className="mb-2 flex items-center gap-2">
        <span className={msg.sender === 'AI' ? 'text-pastelPurple font-bold' : 'text-pastelPink font-bold'}>{msg.sender}:</span>
        <span className="flex-1">{msg.text}</span>
        <span className="text-xs text-pastelGreen">{new Date(msg.timestamp).toLocaleTimeString()}</span>
        {onEdit && <button className="text-pastelYellow ml-2" onClick={() => onEdit(msg.id, prompt('Edit message:', msg.text) || msg.text)}>Edit</button>}
        {onDelete && <button className="text-pastelPink ml-2" onClick={() => onDelete(msg.id)}>Delete</button>}
        {onReplay && <button className="text-pastelPurple ml-2" onClick={() => onReplay(msg.id)}>Replay</button>}
      </div>
    ))}
  </div>
);
