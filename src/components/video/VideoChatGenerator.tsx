import React, { useState } from 'react';
import { VideoChatHistory, ChatMessage } from './VideoChatHistory';
import { VideoChatControls } from './VideoChatControls';

interface UploadedImage {
  id: string;
  url: string;
}


  // Undo/redo stack
  const [undoStack, setUndoStack] = useState<ChatMessage[][]>([]);
  const [redoStack, setRedoStack] = useState<ChatMessage[][]>([]);

  // Push current chat to undo stack before making changes
  const pushUndo = () => setUndoStack(prev => [...prev, chat]);

  const handleUndo = () => {
    if (undoStack.length > 0) {
      setRedoStack(prev => [chat, ...prev]);
      setChat(undoStack[undoStack.length - 1]);
      setUndoStack(undoStack.slice(0, -1));
    }
  };
  const handleRedo = () => {
    if (redoStack.length > 0) {
      setUndoStack(prev => [...prev, chat]);
      setChat(redoStack[0]);
      setRedoStack(redoStack.slice(1));
    }
  };

  const handleSave = () => {
    localStorage.setItem('videoChatSession', JSON.stringify(chat));
      const [undoStack, setUndoStack] = useState<ChatMessage[][]>([]); 
      const [redoStack, setRedoStack] = useState<ChatMessage[][]>([]); 
  const handleLoad = () => {
    const saved = localStorage.getItem('videoChatSession');
      const pushUndo = (currentChat: ChatMessage[]) => setUndoStack(prev => [...prev, currentChat]);
  };
  const handleExport = () => {
        setUndoStack(prevUndo => {
          if (prevUndo.length > 0) {
            setRedoStack(prevRedo => [chat, ...prevRedo]);
            setChat(prevUndo[prevUndo.length - 1]);
            return prevUndo.slice(0, -1);
          }
          return prevUndo;
        });
    a.click();
    URL.revokeObjectURL(url);
        setRedoStack(prevRedo => {
          if (prevRedo.length > 0) {
            setUndoStack(prevUndo => [...prevUndo, chat]);
            setChat(prevRedo[0]);
            return prevRedo.slice(1);
          }
          return prevRedo;
        });
    setChat(newChat);
  };

  // Update handlers to use safeSetChat
  const handleEdit = (id: string, newText: string) => {
    safeSetChat(chat.map(msg => msg.id === id ? { ...msg, text: newText } : msg));
  };
  const handleDelete = (id: string) => {
    safeSetChat(chat.filter(msg => msg.id !== id));
  };
  const handleReplay = (id: string) => {
    const msg = chat.find(m => m.id === id);
    if (msg) {
      const aiMsg: ChatMessage = {
        id: Math.random().toString(36).slice(2),
        sender: 'AI',
        text: `Regenerating video with: ${msg.text}`,
        timestamp: Date.now(),
      };
      safeSetChat([...chat, aiMsg]);
    }
      const safeSetChat = (newChat: ChatMessage[]) => {
        pushUndo(chat);
  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sparkle max-w-2xl mx-auto mt-8">
      <h3 className="text-2xl font-bold text-pastelPurple mb-4">AI Video Chat Generator</h3>
      <VideoChatControls
        onUndo={handleUndo}
        onRedo={handleRedo}
        onSave={handleSave}
        onLoad={handleLoad}
        onExport={handleExport}
      />
      <div className="mb-4">
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Describe your video: background, characters, objects, etc."
          className="w-full px-3 py-2 rounded border border-pastelPurple mb-2"
          rows={3}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
        <div className="flex gap-2 mb-2">
          {images.map(img => (
            <img key={img.id} src={img.url} alt="uploaded" className="w-16 h-16 rounded border border-pastelPurple" />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <VideoChatHistory history={chat} onEdit={handleEdit} onDelete={handleDelete} onReplay={handleReplay} />
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your instructions..."
            className="flex-1 px-3 py-2 rounded border border-pastelPurple"
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button type="button" onClick={handleSend} className="bg-pastelPink text-pastelPurple px-4 py-2 rounded shadow-sparkle">Send</button>
        </div>
      </div>
      {/* Simulated video preview and generation status */}
      <div className="mt-4">
        <div className="bg-pastelYellow bg-opacity-60 rounded p-4 text-center text-pastelPurple">
          <span>Video preview will appear here after AI generation.</span>
        </div>
      </div>
    </div>
  );
}
