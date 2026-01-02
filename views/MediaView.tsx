import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Download, Headphones, Video } from 'lucide-react';

export const MediaView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'audio' | 'video'>('audio');

  return (
    <div className="p-6 pb-24 h-full flex flex-col animate-fade-in-up">
      {/* Tabs */}
      <div className="flex p-1 bg-white/10 rounded-xl mb-8">
        <button 
            onClick={() => setActiveTab('audio')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-all ${activeTab === 'audio' ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400'}`}
        >
            <Headphones size={16} />
            <span className="text-sm font-bold">Audio</span>
        </button>
        <button 
            onClick={() => setActiveTab('video')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-all ${activeTab === 'video' ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400'}`}
        >
            <Video size={16} />
            <span className="text-sm font-bold">Video</span>
        </button>
      </div>

      {/* Main Player Visual */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-8">
         <div className="relative w-64 h-64">
            {/* Glow Ring */}
            <div className={`absolute inset-0 rounded-full bg-yellow-500/20 blur-xl transition-all duration-1000 ${isPlaying ? 'scale-125 opacity-100' : 'scale-100 opacity-50'}`}></div>
            
            {/* Album Art / Video Thumbnail */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-spin-slow" style={{ animationDuration: '20s', animationPlayState: isPlaying && activeTab === 'audio' ? 'running' : 'paused' }}>
                <img src={activeTab === 'audio' ? "https://picsum.photos/400/400?random=10" : "https://picsum.photos/400/400?random=11"} alt="Cover" className="w-full h-full object-cover" />
                {activeTab === 'video' && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                         <Play size={40} className="text-white opacity-80" />
                    </div>
                )}
            </div>
         </div>

         <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold font-serif-heading">{activeTab === 'audio' ? "Morning Manifestation" : "The Power of Now"}</h2>
            <p className="text-gray-400">Glow Originals • 12 mins</p>
         </div>

         {/* Visualizer (Audio Only) */}
         {activeTab === 'audio' && (
             <div className="h-12 flex items-center justify-center space-x-1 w-full max-w-xs">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-1 bg-yellow-500 rounded-full transition-all duration-75"
                        style={{ 
                            height: isPlaying ? `${Math.random() * 100}%` : '10%',
                            opacity: isPlaying ? 1 : 0.3
                        }}
                    ></div>
                ))}
             </div>
         )}
      </div>

      {/* Controls */}
      <div className="glass-panel p-6 rounded-2xl mt-8">
         <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-400">2:15</span>
            <div className="h-1 flex-1 mx-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 w-1/3"></div>
            </div>
            <span className="text-xs text-gray-400">12:00</span>
         </div>

         <div className="flex items-center justify-between px-4">
             <button className="text-gray-400 hover:text-white"><Download size={20} /></button>
             <button className="text-white hover:text-yellow-400"><SkipBack size={28} /></button>
             <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:scale-105 transition-transform"
             >
                {isPlaying ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" className="ml-1" />}
             </button>
             <button className="text-white hover:text-yellow-400"><SkipForward size={28} /></button>
             <button className="text-gray-400 hover:text-white">1.0x</button>
         </div>
      </div>
    </div>
  );
};