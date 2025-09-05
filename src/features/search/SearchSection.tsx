import React, { useState, useRef, useEffect } from 'react';
import { Search, Mic, X, Clock, TrendingUp } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    'How do I pay my water bill?',
    'How do I report a pothole?',
    'What are the days for animal adoption?',
    'How can I apply for a new roll cart?',
    'How do I report my neighbor\'s noisy dog?'
  ];

  const recentSearches = [
    'How do I apply for a permit for opening a grocery store?',
    'I want to reserve a park shelter for my party',
    'When is trash pickup at 1500 Marilla St?',
  ];

  useEffect(() => {
    if (query.length > 2) {
      const filtered = popularSearches.filter(search =>
        search.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        handleSearch(transcript);
      };

      recognition.start();
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 hc:bg-black py-16 border-t border-gray-100 dark:border-gray-800 hc:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white hc:text-white mb-4">
            Search City Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 hc:text-gray-200">
            Find information about Dallas city services, report issues, or get assistance
          </p>
        </div> */}

        {/* Main Search Bar */}
        <div className="relative mb-8">
          <div className="relative">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(query.length > 2)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && query.trim()) {
                  handleSearch(query.trim());
                }
              }}
              placeholder="Search for city services..."
              className="w-full px-6 py-4 pl-14 pr-24 text-lg rounded-2xl border-2 border-gray-200 dark:border-gray-700 hc:border-gray-600 bg-white dark:bg-gray-800 hc:bg-gray-900 text-gray-900 dark:text-white hc:text-white placeholder-gray-500 dark:placeholder-gray-400 hc:placeholder-gray-300 focus:border-blue-500 hc:focus:border-yellow-400 focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400 focus:ring-opacity-20 transition-all duration-300"
              aria-label="Search for city services"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500 hc:text-gray-400" />
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    setShowSuggestions(false);
                  }}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 hc:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5 text-gray-400 dark:text-gray-500 hc:text-gray-400" />
                </button>
              )}
              <button
                onClick={handleVoiceSearch}
                disabled={isListening}
                className={`p-2 rounded-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400 ${
                  isListening
                    ? 'bg-red-500 text-white'
                    : 'bg-teal-100 dark:bg-teal-800 hc:bg-teal-800 text-teal-700 dark:text-teal-300 hc:text-white hover:bg-teal-200 dark:hover:bg-teal-700 hc:hover:bg-teal-700'
                }`}
                aria-label={isListening ? "Listening..." : "Voice search"}
              >
                <Mic className={`w-5 h-5 ${isListening ? 'animate-pulse' : ''}`} />
              </button>
            </div>
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 hc:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-gray-600 shadow-lg z-10 max-h-64 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion)}
                  className="w-full px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 hc:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hc:text-white transition-colors border-b border-gray-100 dark:border-gray-700 hc:border-gray-700 last:border-b-0 focus:bg-blue-50 dark:focus:bg-blue-900 hc:focus:bg-yellow-900 focus:text-blue-700 dark:focus:text-blue-300 hc:focus:text-white focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 hc:text-gray-400" />
                    <span>{suggestion}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Chips */}
        <div className="space-y-6">
          {/* Popular Searches */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-4 h-4 text-teal-500" />
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 hc:text-gray-200 uppercase tracking-wide">
                Popular Searches
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {popularSearches.slice(0, 6).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hc:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-800 hc:hover:bg-teal-800 text-gray-700 dark:text-gray-300 hc:text-white hover:text-teal-700 dark:hover:text-teal-300 hc:hover:text-white rounded-full text-sm font-medium transition-all duration-300 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:scale-105"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 hc:text-gray-200 uppercase tracking-wide">
                Recent Searches
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900 hc:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 hc:hover:bg-blue-800 text-blue-700 dark:text-blue-300 hc:text-white rounded-full text-sm font-medium transition-all duration-300 focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400 focus:ring-offset-2 transform hover:scale-105"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;