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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Dr Purva Global</h3>
                <p className="text-pink-200 text-sm">Solutions</p>
                <p className="text-pink-300 text-xs">Fearless Surgeries</p>
              </div>
            </div>
            
            <p className="text-pink-100 leading-relaxed mb-6 max-w-md">
              Dr Purva Global Solutions is built on the belief that empathy, transparency, and guidance are as vital as the treatment itself. From the moment of diagnosis to post-surgery recovery, the center supports patients at every step. Our team of trained experts walks patients through hospital processes, helps them choose the right doctors and hospitals, explains procedures in layman's terms, and offers post-operative support to ensure peace of mind.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    className={`w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 relative">
                Dr Purva Global Solutions
                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-300 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setCurrentPage(link.id)}
                      className="text-pink-200 hover:text-white transition-all duration-300 hover:translate-x-2 block transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 relative">
                Address
                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-pink-300 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-300 mt-1 flex-shrink-0" />
                  <div className="text-pink-100">
                    <p className="font-medium">617, SECTOR 14</p>
                    <p>GURGAON 122001</p>
                    <p>HARYANA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-300 flex-shrink-0" />
                  <a href="tel:+918700268640" className="text-pink-100 hover:text-white transition-colors duration-300">
                    +91 8700268640
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-pink-300 flex-shrink-0" />
                  <a href="https://wa.me/918700268640" className="text-pink-100 hover:text-white transition-colors duration-300">
                    +91 8700268640
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-300 flex-shrink-0" />
                  <a href="mailto:info@drpurvaglobal.com" className="text-pink-100 hover:text-white transition-colors duration-300">
                    info@drpurvaglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-pink-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Billion Plus Enterprises [c] All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-pink-200 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-pink-200 hover:text-white transition-colors duration-300"
              >
                Terms of Service
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