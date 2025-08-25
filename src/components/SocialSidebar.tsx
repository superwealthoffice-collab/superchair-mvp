import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import ChatWidget from './ChatWidget';

interface SocialSidebarProps {
  isDarkMode: boolean;
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ isDarkMode }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ${
          isDarkMode 
            ? 'bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white' 
            : 'bg-white hover:bg-blue-600 text-gray-600 hover:text-white'
        }`}
        aria-label="Follow us on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
      
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative overflow-hidden ${
          isDarkMode 
            ? 'bg-gray-800 text-gray-300 hover:text-white' 
            : 'bg-white text-gray-600 hover:text-white'
        }`}
        aria-label="Follow us on Instagram"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        <Instagram className="h-4 w-4 relative z-10" />
      </a>
      
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ${
          isDarkMode 
            ? 'bg-gray-800 hover:bg-black text-gray-300 hover:text-white' 
            : 'bg-white hover:bg-black text-gray-600 hover:text-white'
        }`}
        aria-label="Follow us on TikTok"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      </a>
      
      <ChatWidget isDarkMode={isDarkMode} />
    </div>
  );
};

export default SocialSidebar;