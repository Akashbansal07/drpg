import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Stethoscope,
  Facebook,
  Twitter,
  Youtube,
  Instagram
} from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'services', label: 'Service' },
    { id: 'contact', label: 'Contact us' },
    { id: 'portfolio', label: 'FAQs' }
  ];

  const socialLinks = [
    { icon: Facebook, color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: Twitter, color: 'hover:bg-gray-800', label: 'Twitter' },
    { icon: Youtube, color: 'hover:bg-red-600', label: 'YouTube' },
    { icon: Instagram, color: 'hover:bg-pink-600', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-800 via-pink-700 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-0 left-0 w-20 sm:w-40 h-20 sm:h-40 bg-white rounded-full -translate-x-10 sm:-translate-x-20 -translate-y-10 sm:-translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-30 sm:w-60 h-30 sm:h-60 bg-white rounded-full translate-x-10 sm:translate-x-20 translate-y-10 sm:translate-y-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Stethoscope className="w-4 sm:w-5 h-4 sm:h-5 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Dr Purva Global</h3>
                <p className="text-pink-200 text-xs sm:text-sm">Fearless Surgeries</p>
              </div>
            </div>
            
            <p className="text-pink-100 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md">
              Empathy, transparency, and guidance with expert medical care. From diagnosis to recovery, we support patients at every step with trained experts and comprehensive solutions.
            </p>

            {/* Social Media */}
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    className={`w-8 sm:w-10 h-8 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-3 sm:w-4 h-3 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 relative">
                Quick Links
                <div className="absolute -bottom-0.5 left-0 w-8 sm:w-12 h-0.5 sm:h-1 bg-pink-300 rounded-full"></div>
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setCurrentPage(link.id)}
                      className="text-pink-200 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 block transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 relative">
                Contact
                <div className="absolute -bottom-0.5 left-0 w-8 sm:w-12 h-0.5 sm:h-1 bg-pink-300 rounded-full"></div>
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-pink-300 mt-0.5 flex-shrink-0" />
                  <div className="text-pink-100 text-xs sm:text-sm">
                    <p>617, Sector 14, Gurgaon</p>
                    <p>Haryana 122001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-pink-300 flex-shrink-0" />
                  <a href="tel:+918700268640" className="text-pink-100 text-xs sm:text-sm hover:text-white transition-colors duration-300">
                    +91 8700268640
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-pink-300 flex-shrink-0" />
                  <a href="mailto:info@drpurvaglobal.com" className="text-pink-100 text-xs sm:text-sm hover:text-white transition-colors duration-300 break-all">
                    info@drpurvaglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-600 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-pink-200 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Billion Plus Enterprises. All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-4 text-xs">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-pink-200 hover:text-white transition-colors duration-300"
              >
                Privacy
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-pink-200 hover:text-white transition-colors duration-300"
              >
                Terms
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-pink-200 hover:text-white transition-colors duration-300"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;