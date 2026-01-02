import React, { useState, useEffect } from 'react';
import { AppView, UserStats } from './types';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Dashboard } from './views/Dashboard';
import { QuotesView } from './views/QuotesView';
import { BooksView } from './views/BooksView';
import { MediaView } from './views/MediaView';
import { PremiumView } from './views/PremiumView';
import { ProfileView } from './views/ProfileView';

// Mock User Data
const INITIAL_STATS: UserStats = {
  name: "Alex Johnson",
  level: 5,
  points: 540,
  streak: 12,
  isPremium: false,
  avatar: "https://picsum.photos/150/150?grayscale",
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [userStats, setUserStats] = useState<UserStats>(INITIAL_STATS);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleViewChange = (view: AppView) => {
    setCurrentView(view);
    // Simulate gaining points on navigation (for demo purposes)
    if (view !== currentView) {
        setUserStats(prev => ({...prev, points: prev.points + 2}));
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <div className="relative">
             <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 animate-pulse"></div>
             <h1 className="text-6xl font-serif-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-yellow-600 animate-fade-in-up relative z-10">
                Glow <span className="text-5xl">🌟</span>
             </h1>
        </div>
        <p className="text-gray-500 mt-4 tracking-widest text-xs uppercase animate-pulse">Ignite Your Potential</p>
      </div>
    );
  }

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard stats={userStats} onChangeView={handleViewChange} />;
      case AppView.QUOTES:
        return <QuotesView />;
      case AppView.BOOKS:
        return <BooksView />;
      case AppView.MEDIA:
        return <MediaView />;
      case AppView.PREMIUM:
        return <PremiumView />;
      case AppView.PROFILE:
        return <ProfileView stats={userStats} />;
      default:
        return <Dashboard stats={userStats} onChangeView={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex justify-center">
      <div className="w-full max-w-md relative bg-[#0a0a0a] shadow-2xl min-h-screen">
        {/* Background Ambient Glow */}
        <div className="fixed top-[-20%] left-[-20%] w-[80%] h-[50%] bg-purple-900/20 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="fixed bottom-[-20%] right-[-20%] w-[80%] h-[50%] bg-blue-900/10 blur-[100px] pointer-events-none rounded-full"></div>

        {currentView !== AppView.PREMIUM && <Header stats={userStats} />}
        
        <main className="relative z-10">
            {renderView()}
        </main>

        <Navigation currentView={currentView} onChangeView={handleViewChange} />
      </div>
    </div>
  );
};

export default App;