import React, { useState } from 'react';
import { Quote } from '../types';
import { Share2, Heart, Sparkles, RefreshCw } from 'lucide-react';
import { getDailyAiQuote } from '../services/geminiService';

const INITIAL_QUOTES: Quote[] = [
  { id: '1', text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Success", isFavorite: false },
  { id: '2', text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation", isFavorite: true },
  { id: '3', text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", category: "Life", isFavorite: false },
];

export const QuotesView: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>(INITIAL_QUOTES);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    const newText = await getDailyAiQuote("stoic resilience");
    const newQuote: Quote = {
      id: Date.now().toString(),
      text: newText,
      author: "Glow AI",
      category: "AI Generated",
      isFavorite: false
    };
    setQuotes([newQuote, ...quotes]);
    setGenerating(false);
  };

  const toggleHeart = (id: string) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, isFavorite: !q.isFavorite } : q));
  };

  return (
    <div className="p-6 pb-24 space-y-6 animate-fade-in-up min-h-screen">
      <div className="flex justify-between items-end">
        <div>
            <h1 className="text-3xl font-serif-heading font-bold text-white">Daily Wisdom</h1>
            <p className="text-gray-400 text-sm">Fuel your mind.</p>
        </div>
        <button 
            onClick={handleGenerate}
            disabled={generating}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-xs font-bold transition-all disabled:opacity-50"
        >
            {generating ? <RefreshCw size={14} className="animate-spin" /> : <Sparkles size={14} />}
            <span>New AI Quote</span>
        </button>
      </div>

      <div className="space-y-6">
        {quotes.map((quote) => (
            <div key={quote.id} className="relative group">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative glass-panel p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4">
                    <div className="text-4xl text-yellow-500 font-serif-heading">"</div>
                    <p className="text-xl font-medium leading-relaxed font-serif-heading">{quote.text}</p>
                    <div className="w-10 h-0.5 bg-gray-700"></div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest">{quote.author}</p>
                    
                    <div className="flex space-x-6 mt-4 pt-4 border-t border-white/5 w-full justify-center">
                        <button 
                            onClick={() => toggleHeart(quote.id)}
                            className={`transition-colors ${quote.isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-white'}`}
                        >
                            <Heart size={20} fill={quote.isFavorite ? "currentColor" : "none"} />
                        </button>
                        <button className="text-gray-500 hover:text-white transition-colors">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};