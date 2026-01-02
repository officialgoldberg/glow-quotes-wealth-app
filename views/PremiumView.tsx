import React from 'react';
import { Check, Star, Lock } from 'lucide-react';

export const PremiumView: React.FC = () => {
  return (
    <div className="h-full relative p-6 pb-24 overflow-y-auto animate-fade-in-up text-center">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-yellow-900/40 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 pt-10">
        <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)] animate-breathe">
            <Star size={40} className="text-white fill-white" />
        </div>
        
        <h1 className="text-4xl font-serif-heading font-bold mb-2">Glow Premium</h1>
        <p className="text-gray-300 mb-8">Unlock your full potential.</p>

        <div className="space-y-4 mb-8 text-left max-w-xs mx-auto">
            <div className="flex items-center space-x-3 p-4 glass-panel rounded-xl border border-yellow-500/20">
                <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-500"><Check size={16} /></div>
                <span className="font-medium">Unlimited Audio & Books</span>
            </div>
            <div className="flex items-center space-x-3 p-4 glass-panel rounded-xl border border-yellow-500/20">
                <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-500"><Check size={16} /></div>
                <span className="font-medium">Advanced AI Coaching</span>
            </div>
            <div className="flex items-center space-x-3 p-4 glass-panel rounded-xl border border-yellow-500/20">
                <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-500"><Check size={16} /></div>
                <span className="font-medium">Offline Mode</span>
            </div>
        </div>

        <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2">
                <Lock size={18} />
                <span>Unlock 7 Days Free</span>
            </button>
            <p className="text-xs text-gray-500">$9.99/month after. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
};