import React, { useEffect, useState } from 'react';
import { UserStats, AppView } from '../types';
import { Play, Book, Sparkles, ArrowRight } from 'lucide-react';
import { getAiRecommendation } from '../services/geminiService';

interface DashboardProps {
  stats: UserStats;
  onChangeView: (view: AppView) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ stats, onChangeView }) => {
  const [aiTip, setAiTip] = useState<string>("Analyzing your glow path...");

  useEffect(() => {
    // Simulate fetching tailored AI advice
    const fetchTip = async () => {
        const tip = await getAiRecommendation(stats.level, 'motivated');
        setAiTip(tip);
    };
    fetchTip();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-6 pb-24 space-y-8 animate-fade-in-up">
      {/* Welcome Section */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-serif-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Good Evening, {stats.name.split(' ')[0]}
        </h1>
        <p className="text-gray-400">Ready to illuminate your potential?</p>
      </div>

      {/* AI Insight Card */}
      <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border-l-4 border-l-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
        <div className="absolute top-0 right-0 p-2 opacity-10">
            <Sparkles size={60} />
        </div>
        <div className="flex items-center space-x-2 mb-2">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-xs uppercase tracking-widest text-yellow-400 font-bold">Daily Glow AI</span>
        </div>
        <p className="text-lg italic text-gray-100 font-serif-heading">"{aiTip}"</p>
      </div>

      {/* Continue Activity */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Continue</h3>
            <span className="text-xs text-yellow-500 cursor-pointer hover:underline">View All</span>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {/* Recent Book */}
            <div 
                onClick={() => onChangeView(AppView.BOOKS)}
                className="min-w-[140px] h-[200px] rounded-xl relative overflow-hidden group cursor-pointer"
            >
                <img src="https://picsum.photos/300/450?grayscale" alt="Book" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-3 left-3">
                    <p className="text-xs text-gray-300 mb-1">Book • 45%</p>
                    <p className="font-bold text-white leading-tight">Atomic Habits</p>
                </div>
            </div>

            {/* Recent Audio */}
            <div 
                onClick={() => onChangeView(AppView.MEDIA)}
                className="min-w-[140px] h-[200px] bg-gray-900 rounded-xl p-4 flex flex-col justify-between border border-white/5 cursor-pointer hover:border-yellow-500/30 transition-colors"
            >
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Play size={20} className="text-yellow-500 ml-1" />
                </div>
                <div>
                    <p className="text-xs text-gray-400">Audio</p>
                    <p className="font-bold text-white mt-1">Morning Manifestation</p>
                    <div className="flex items-end space-x-1 h-4 mt-3">
                         <div className="audio-bar" style={{ animationDelay: '0s' }}></div>
                         <div className="audio-bar" style={{ animationDelay: '0.2s' }}></div>
                         <div className="audio-bar" style={{ animationDelay: '0.4s' }}></div>
                         <div className="audio-bar" style={{ animationDelay: '0.1s' }}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button 
            onClick={() => onChangeView(AppView.QUOTES)}
            className="p-4 glass-panel rounded-xl flex items-center justify-between group hover:bg-white/10 transition-colors"
        >
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    <Sparkles size={20} />
                </div>
                <div className="text-left">
                    <p className="font-bold">Daily Quote</p>
                    <p className="text-xs text-gray-400">+10 XP</p>
                </div>
            </div>
            <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </button>

        <button 
            onClick={() => onChangeView(AppView.BOOKS)}
            className="p-4 glass-panel rounded-xl flex items-center justify-between group hover:bg-white/10 transition-colors"
        >
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Book size={20} />
                </div>
                <div className="text-left">
                    <p className="font-bold">Read 5 mins</p>
                    <p className="text-xs text-gray-400">+50 XP</p>
                </div>
            </div>
            <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
};