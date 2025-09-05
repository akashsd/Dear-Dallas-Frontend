import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Eye, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'high-contrast'>('light');
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const themeIcons = {
    light: Sun,
    dark: Moon,
    'high-contrast': Eye,
  };

  const ThemeIcon = themeIcons[theme];

  const nextTheme = () => {
    const themes = ['light', 'dark', 'high-contrast'] as const;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header className="bg-white dark:bg-gray-900 hc:bg-black border-b-2 border-blue-600 dark:border-blue-400 hc:border-yellow-400 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 hc:bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 hc:text-black font-bold text-sm">D</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white hc:text-white">
                  Dear Dallas
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={nextTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hc:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400"
                aria-label={`Current theme: ${theme}. Click to change theme`}
              >
                <ThemeIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hc:text-white" />
              </button>

              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hc:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400"
                aria-label={`Current language: ${language.toUpperCase()}. Click to switch language`}
              >
                <Globe className="w-4 h-4 text-gray-700 dark:text-gray-300 hc:text-white" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">
                  {language.toUpperCase()}
                </span>
              </button>


            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hc:hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300 hc:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300 hc:text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={nextTheme}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hc:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hc:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400"
                >
                  <ThemeIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hc:text-white" />
                  <span className="text-gray-700 dark:text-gray-300 hc:text-white">
                    {theme === 'high-contrast' ? 'High Contrast' : theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </span>
                </button>

                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hc:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hc:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400"
                >
                  <Globe className="w-4 h-4 text-gray-700 dark:text-gray-300 hc:text-white" />
                  <span className="text-gray-700 dark:text-gray-300 hc:text-white">
                    {language === 'en' ? 'Español' : 'English'}
                  </span>
                </button>


              </div>
            </div>
          )}
        </div>
      </header>
  );
};

export default Header;