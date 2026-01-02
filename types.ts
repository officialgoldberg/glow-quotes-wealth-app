export enum AppView {
  DASHBOARD = 'DASHBOARD',
  QUOTES = 'QUOTES',
  BOOKS = 'BOOKS',
  MEDIA = 'MEDIA',
  PREMIUM = 'PREMIUM',
  PROFILE = 'PROFILE'
}

export interface UserStats {
  streak: number;
  level: number;
  points: number;
  name: string;
  isPremium: boolean;
  avatar: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  isFavorite: boolean;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  category: string;
  progress: number; // 0-100
  isPremium: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'audio' | 'video';
  duration: string;
  thumbnailUrl: string;
  isPremium: boolean;
}
