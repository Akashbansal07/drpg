import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText,
  Cookie,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Users,
  Database,
  Key,
  Globe
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('collection');
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

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    // Find the section element and scroll to it
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const yOffset = -100; // Offset to account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sections = [
    {
      id: 'collection',
      title: 'Information Collection',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you visit our site and fill forms to share health condition details, we collect and store this information to ensure an efficient, smooth, and personalized experience.'
        },
        {
          subtitle: 'Automatic Collection',
          text: 'We automatically track certain information based on user behavior for internal research on demographics and interests to better understand and serve our users.'
        },
        {
          subtitle: 'Transaction Information',
          text: 'During transactions, we collect billing addresses, payment details, and tracking information from various payment methods.'
        }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: Cookie,
      content: [
        {
          subtitle: 'What are Cookies?',
          text: 'Cookies are small files placed on your browser that help us provide our services and remember user-specific information.'
        },
        {
          subtitle: 'Types of Cookies',
          text: 'We use both permanent and temporary cookies. These do not contain personally identifiable information.'
        },
        {
          subtitle: 'Third-Party Cookies',
          text: 'Some pages may contain cookies from third parties, which we do not control.'
        }
      ]
    },
    {
      id: 'consent',
      title: 'User Consent',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'Your Agreement',
          text: 'By using our website and providing your information, you consent to collection and use as per this Privacy Policy.'
        },
        {
          subtitle: 'Policy Updates',
          text: 'We may revise this policy without notice. Continued use constitutes acceptance of any changes.'
        },
        {
          subtitle: 'Partner Services',
          text: 'When using affiliate/partner services, their privacy policies apply with your consent.'
        }
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: Key,
      content: [
        {
          subtitle: 'Access & Correction',
          text: 'You can review, update, and correct your personal information at any time.'
        },
        {
          subtitle: 'Deletion Requests',
          text: 'You may request deletion of inaccurate, incomplete, or irrelevant information.'
        },
        {
          subtitle: 'Limitations',
          text: 'Some rights may be limited by law, pending legal proceedings, or to protect others\' safety.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className={`relative py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Billion Plus Enterprises (Dr Purva Global Solutions)
          </p>
          
          <div className="bg-pink-100 border border-pink-200 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-sm text-pink-700">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionClick(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
                          activeSection === section.id
                            ? 'bg-pink-500 text-white shadow-md'
                            : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Introduction */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Commitment to Your Privacy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We understand the need for protecting user privacy and adhere to the highest standards 
                    of securing all transactions and customer information. This policy explains our data 
                    collection and sharing practices.
                  </p>
                  
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-amber-800 font-medium">Important Note</p>
                        <p className="text-sm text-amber-700 mt-1">
                          Our privacy policy may be revised from time to time without notice at management's discretion. 
                          Please review this policy periodically for any changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Section Content */}
                <div className="space-y-8">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <div
                        key={section.id}
                        id={`section-${section.id}`}
                        className={`transition-all duration-500 ${
                          activeSection === section.id ? 'opacity-100' : 'opacity-40'
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                            <IconComponent className="w-5 h-5 text-pink-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          {section.content.map((item, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-700 mb-2">{item.subtitle}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Grievance Officer</h3>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-4">
                      In accordance with Information Technology Act 2000 and rules made thereunder:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-700">BILLION PLUS ENTERPRISES</p>
                          <p className="text-gray-600"> Sector 14, Gurgaon, Haryana 122001</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-pink-500 mr-3" />
                        <a href="tel:+918700268640" className="text-gray-600 hover:text-pink-600">
                          +91-8700268640
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-pink-500 mr-3" />
                        <a href="mailto:info@DrPurvaGlobal.com" className="text-gray-600 hover:text-pink-600">
                          info@DrPurvaGlobal.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;