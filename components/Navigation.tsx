import React from 'react';
import { Home, Quote, BookOpen, PlayCircle, User, Crown } from 'lucide-react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { view: AppView.DASHBOARD, icon: Home, label: 'Home' },
    { view: AppView.QUOTES, icon: Quote, label: 'Quotes' },
    { view: AppView.BOOKS, icon: BookOpen, label: 'Books' },
    { view: AppView.MEDIA, icon: PlayCircle, label: 'Media' },
    { view: AppView.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 pb-6 pt-3 px-4 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto relative">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onChangeView(item.view)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                isActive ? 'text-yellow-400 scale-110' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <item.icon size={24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' : ''} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </button>
          );
        })}
        
        {/* Floating Premium Button */}
        <button
          onClick={() => onChangeView(AppView.PREMIUM)}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full p-3 shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:scale-105 transition-transform border-2 border-black"
        >
            <Crown size={20} className="text-black fill-black" />
        </button>
      </div>
    </div>
  );
};