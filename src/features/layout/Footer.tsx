import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 dark:bg-black hc:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-400 hc:from-yellow-500 hc:to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white hc:text-black font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold">Dear Dallas</span>
            </div>
            <p className="text-gray-300 hc:text-gray-200 mb-6 leading-relaxed">
              Your digital gateway to city services and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">City Services</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Permits & Licenses</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Pay Bills</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">News</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Departments</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Water Utilities</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Public Works</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Parks & Recreation</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Planning & Development</a></li>
              <li><a href="#" className="text-gray-300 hc:text-gray-200 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">Code Compliance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 hc:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 hc:text-gray-200 text-sm">1500 Marilla Street</p>
                  <p className="text-gray-300 hc:text-gray-200 text-sm">Dallas, TX 75201</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 hc:text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 hc:text-gray-200 text-sm">311 (Dallas 311)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 hc:text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 hc:text-gray-200 text-sm">help@dallascityhall.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-teal-400 hc:text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 hc:text-gray-200 text-sm">dallascityhall.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 hc:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 hc:text-gray-300">
              © 2025 City of Dallas. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hc:text-gray-300 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hc:text-gray-300 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hc:text-gray-300 hover:text-teal-400 hc:hover:text-yellow-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;