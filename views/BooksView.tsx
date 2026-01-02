import React from 'react';
import { Book } from '../types';
import { Lock, CheckCircle } from 'lucide-react';

const BOOKS: Book[] = [
  { id: '1', title: "The Wealth Mindset", author: "A. J. Sterling", category: "Wealth", coverUrl: "https://picsum.photos/300/450?random=1", progress: 12, isPremium: false },
  { id: '2', title: "Atomic Habits", author: "James Clear", category: "Self-Help", coverUrl: "https://picsum.photos/300/450?random=2", progress: 45, isPremium: true },
  { id: '3', title: "Think & Grow Rich", author: "Napoleon Hill", category: "Classic", coverUrl: "https://picsum.photos/300/450?random=3", progress: 0, isPremium: false },
  { id: '4', title: "Deep Work", author: "Cal Newport", category: "Productivity", coverUrl: "https://picsum.photos/300/450?random=4", progress: 88, isPremium: true },
];

export const BooksView: React.FC = () => {
  return (
    <div className="p-6 pb-24 animate-fade-in-up">
       <h1 className="text-3xl font-serif-heading font-bold text-white mb-6">Library</h1>
       
       <div className="grid grid-cols-2 gap-4">
         {BOOKS.map((book) => (
           <div key={book.id} className="relative group cursor-pointer">
             <div className="aspect-[2/3] rounded-xl overflow-hidden relative shadow-lg">
                <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                
                {book.isPremium && (
                    <div className="absolute top-2 right-2 bg-yellow-500/90 text-black p-1.5 rounded-full">
                        <Lock size={12} />
                    </div>
                )}
                
                {book.progress > 0 && (
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                        <div className="h-full bg-green-500" style={{ width: `${book.progress}%` }}></div>
                     </div>
                )}
             </div>
             
             <div className="mt-3">
                <h3 className="font-bold text-white text-sm truncate">{book.title}</h3>
                <p className="text-gray-400 text-xs truncate">{book.author}</p>
                {book.progress >= 100 && (
                    <div className="flex items-center text-green-500 text-xs mt-1">
                        <CheckCircle size={12} className="mr-1" /> Read
                    </div>
                )}
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};