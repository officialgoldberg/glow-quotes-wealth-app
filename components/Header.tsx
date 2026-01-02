import React from 'react';
import { Flame, Star } from 'lucide-react';
import { UserStats } from '../types';

interface HeaderProps {
  stats: UserStats;
}

export const Header: React.FC<HeaderProps> = ({ stats }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 sticky top-0 z-40 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]">
            <img src={stats.avatar} alt="User" className="w-full h-full object-cover" />
        </div>
        <div>
            <h2 className="text-sm font-bold text-white leading-tight">Glow Level {stats.level}</h2>
            <div className="w-20 h-1 bg-gray-800 rounded-full mt-1">
                <div 
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${(stats.points % 100)}%` }}
                ></div>
            </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <Flame size={16} className="text-orange-500 fill-orange-500 animate-pulse" />
          <span className="text-sm font-bold text-orange-100">{stats.streak}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star size={18} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-bold text-yellow-100">{stats.points}</span>
        </div>
      </div>
    </div>
  );
};