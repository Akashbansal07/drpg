import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  Globe,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Users,
  Stethoscope
} from 'lucide-react';

// Custom X (formerly Twitter) logo component
const XLogo = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ContactUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Dr Purva Global Solutions',
        '(Unit of Billion Plus Enterprises)',
        'Sector 14, Gurugram',
        'Haryana 122001, India'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        { text: 'info@drpurvaglobal.com', link: 'mailto:info@drpurvaglobal.com' },
        { text: 'support@drpurvaglobal.com', link: 'mailto:support@drpurvaglobal.com' }
      ]
    }
  ];

  // Updated social links to match Footer component exactly
  const socialLinks = [
    { 
      icon: Facebook, 
      name: 'Facebook',
      color: 'hover:bg-blue-600', 
      url: 'https://www.facebook.com/profile.php?id=61578662107153'
    },
    { 
      icon: Instagram, 
      name: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500', 
      url: 'https://www.instagram.com/drpurvaglobal/'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn',
      color: 'hover:bg-blue-700', 
      url: 'https://www.linkedin.com/company/dr-purva-global-solutions/'
    },
    { 
      icon: Youtube, 
      name: 'YouTube',
      color: 'hover:bg-red-600', 
      url: 'https://www.youtube.com/@DrPurvaGlobal'
    },
    { 
      icon: XLogo, 
      name: 'X (Twitter)',
      color: 'hover:bg-gray-800', 
      url: 'https://x.com/DrPurvaGlobal'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className={`relative py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Info Cards - Properly Centered */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-xl p-8 lg:p-10 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                      {info.title}
                    </h3>
                    
                    <div className="text-center space-y-3">
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {typeof detail === 'object' ? (
                            <a 
                              href={detail.link}
                              className="text-lg text-pink-600 hover:text-pink-700 transition-colors duration-300 font-semibold block py-1 hover:underline"
                            >
                              {detail.text}
                            </a>
                          ) : (
                            <p className="text-base text-gray-600 leading-relaxed">{detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Why Contact Us - Takes 2 columns on XL screens */}
            <div className={`xl:col-span-2 bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Contact Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-pink-50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <HelpCircle className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">Medical Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Get expert advice on your medical condition and treatment options
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-pink-50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <Users className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">Patient Support</h3>
                  <p className="text-sm text-gray-600">
                    24/7 assistance for all your healthcare needs and queries
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-pink-50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <Stethoscope className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">Hospital Network</h3>
                  <p className="text-sm text-gray-600">
                    Access to top hospitals and specialists across India
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className={`xl:col-span-1 space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Social Media - Updated to match Footer */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Follow us for updates and health tips
                </p>
                
                <div className="flex justify-center flex-wrap gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSocialClick(social.url)}
                        className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group relative overflow-hidden`}
                        aria-label={social.name}
                        title={social.name}
                      >
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300 relative z-10" />
                        
                        {/* Special Instagram gradient background */}
                        {social.name === 'Instagram' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Corporate Info */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Corporate Information
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Company:</strong> Billion Plus Enterprises</p>
                  <p><strong>Brand:</strong> Dr Purva Global Solutions</p>
                  <p><strong>Registration:</strong> Gurugram, Haryana</p>
                  <p><strong>Service Area:</strong> Pan India & International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className={`mt-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-10 text-center text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 text-pink-100">
              Click the "Get Quote Now" button to fill out our consultation form
            </p>
            <div className="flex items-center justify-center space-x-2">
              <MessageSquare className="w-6 h-6" />
              <span className="text-lg font-medium">Or email us directly at info@drpurvaglobal.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;