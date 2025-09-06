import React, { useState } from 'react';

export interface UserProfileData {
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
}

export const UserProfile: React.FC<{ profile: UserProfileData }> = ({ profile }) => {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(profile.bio || '');

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sparkle max-w-md mx-auto mt-8">
      <div className="flex items-center gap-4 mb-4">
        <img src={profile.avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=' + profile.name} alt="avatar" className="w-16 h-16 rounded-full border-2 border-pastelPurple" />
        <div>
          <h3 className="text-xl font-bold text-pastelPurple">{profile.name}</h3>
          <p className="text-pastelBlue">{profile.email}</p>
        </div>
      </div>
      {editing ? (
        <div>
          <textarea value={bio} onChange={e => setBio(e.target.value)} className="w-full px-3 py-2 rounded border border-pastelPurple mb-2" rows={3} />
          <button className="bg-pastelPink text-pastelPurple px-4 py-2 rounded shadow-sparkle mr-2" onClick={() => setEditing(false)}>Save</button>
          <button className="bg-pastelBlue text-pastelPurple px-4 py-2 rounded shadow-sparkle" onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p className="mb-2 text-pastelPurple">{bio || 'No bio yet.'}</p>
          <button className="bg-pastelPink text-pastelPurple px-4 py-2 rounded shadow-sparkle" onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};
