import React from 'react';
import { Search, ShoppingCart, Shield, Sun, Moon, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`transition-colors duration-300 border-b ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Shield className={`h-6 w-6 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Super Chair</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/products" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>{t('nav.products')}</Link>
            <Link to="/about" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>{t('nav.about')}</Link>
            <Link to="/articles" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>{t('nav.articles')}</Link>
            <Link to="/contact" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>{t('nav.contact')}</Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder={t('nav.search')}
                className={`pl-4 pr-10 py-2 text-sm border rounded-full focus:outline-none focus:ring-1 w-64 transition-colors ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-gray-600 focus:border-gray-600' : 'bg-white border-gray-200 text-black placeholder-gray-500 focus:ring-gray-300 focus:border-gray-300'}`}
              />
              <Search className={`absolute right-3 top-2.5 h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
            </button>
            
            <div className="relative">
              <Link to="/cart">
                <ShoppingCart className={`h-5 w-5 cursor-pointer transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} />
              </Link>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">3</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;