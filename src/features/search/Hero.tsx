import React from 'react';
import { MessageCircle, Star, Building2, Waves } from 'lucide-react';

const Hero: React.FC = () => {

  const quickActions = [
    { key: 'payWaterBill', icon: Waves },
    { key: 'reportPothole', icon: Building2 },
    { key: 'animalServices', icon: Star },
    { key: 'permits', icon: Building2 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 hc:from-black hc:via-gray-900 hc:to-black py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Dallas Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 hc:from-yellow-400 hc:to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white dark:text-gray-900 hc:text-black" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-yellow-900" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white hc:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 hc:from-yellow-400 hc:to-yellow-500 bg-clip-text text-transparent">
              Welcome to Dear Dallas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 hc:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your 24/7 virtual assistant for all City of Dallas services
          </p>

          {/* Quick Action Chips
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {quickActions.map(({ key, icon: Icon }) => (
              <button
                key={key}
                className="group flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 hc:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 hc:hover:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-700 hc:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 hc:focus:ring-yellow-400 focus:ring-offset-2"
                aria-label={key}
              >
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 hc:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 dark:text-gray-300 hc:text-white font-medium">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
              </button>
            ))}
          </div> */}

          {/* Chat Preview */}
          {/* <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 hc:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hc:border-gray-600 p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 hc:from-yellow-400 hc:to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white dark:text-gray-900 hc:text-black text-sm font-bold">D</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 hc:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                    <p className="text-gray-800 dark:text-gray-200 hc:text-white text-sm">
                      Hello! How can I help you with City of Dallas services today?
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hc:text-gray-300">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-xs">Dear Dallas is typing...</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;