import React from 'react';
import { UserStats } from '../types';
import { Settings, LogOut, Award, BarChart2 } from 'lucide-react';

interface ProfileProps {
  stats: UserStats;
}

export const ProfileView: React.FC<ProfileProps> = ({ stats }) => {
  return (
    <div className="p-6 pb-24 animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif-heading font-bold">Profile</h1>
        <Settings className="text-gray-400" />
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-yellow-500/30 p-1 mb-4">
            <img src={stats.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold">{stats.name}</h2>
        <p className="text-yellow-500 font-medium">Level {stats.level} Achiever</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center space-y-2">
            <Award className="text-purple-400" size={24} />
            <span className="text-2xl font-bold">{stats.streak}</span>
            <span className="text-xs text-gray-400">Day Streak</span>
        </div>
        <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center space-y-2">
            <BarChart2 className="text-blue-400" size={24} />
            <span className="text-2xl font-bold">{stats.points}</span>
            <span className="text-xs text-gray-400">Total XP</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Settings</h3>
        {['Account', 'Notifications', 'Language', 'Privacy'].map((item) => (
            <div key={item} className="p-4 glass-panel rounded-xl flex justify-between items-center cursor-pointer hover:bg-white/5">
                <span>{item}</span>
                <span className="text-gray-500 text-sm">{'>'}</span>
            </div>
        ))}
        <button className="w-full p-4 mt-4 border border-red-500/30 text-red-500 rounded-xl flex items-center justify-center space-x-2 hover:bg-red-500/10 transition-colors">
            <LogOut size={18} />
            <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};