import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  CreditCard,
  Building,
  Mail,
  Phone,
  MapPin,
  Info,
  Ban,
  Gavel
} from 'lucide-react';

const TermsOfServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('nature');
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
      id: 'nature',
      title: 'Nature & Applicability',
      icon: FileText,
      content: {
        intro: 'These Terms and Conditions ("Terms") and the Privacy Policy constitute a legal agreement between you and Dr Purva Global Solutions.',
        points: [
          'Applies to all patients, representatives, attendants, relatives, friends, affiliates, and website users',
          'Governs all services made available on the Website',
          'Services may change at the sole discretion of Dr Purva Global Solutions',
          'By using our services, you irrevocably accept all terms and conditions'
        ]
      }
    },
    {
      id: 'conditions',
      title: 'Conditions of Use',
      icon: CheckCircle,
      content: {
        intro: 'You must meet certain conditions to use our services:',
        points: [
          'Must be 18 years of age or older to register or use services',
          'Must have the right, authority, and capacity to agree to these Terms',
          'Must provide accurate and truthful information',
          'Must not misuse the platform or services in any way'
        ]
      }
    },
    {
      id: 'privacy',
      title: 'Data Privacy',
      icon: Shield,
      content: {
        intro: 'We collect and handle your data according to strict privacy standards:',
        points: [
          'Collection of device information, location, and usage data for service improvement',
          'Access to email or phone for communication and analytics',
          'Secure handling of sensitive personal data or information',
          'User consent required for data collection and usage'
        ]
      }
    },
    {
      id: 'services',
      title: 'Medical Services',
      icon: Building,
      content: {
        intro: 'Important disclaimers about medical services:',
        points: [
          'No guarantee of appointment confirmations with medical providers',
          'No liability for cancelled, postponed, or rescheduled appointments',
          'Services do not constitute medical advice or diagnosis',
          'Users engage with medical providers at their own risk'
        ]
      }
    },
    {
      id: 'content',
      title: 'Content & Copyright',
      icon: Globe,
      content: {
        intro: 'All content on our platform is protected:',
        points: [
          'Content belongs to Dr Purva Global Solutions and its Partners',
          'Copying for commercial purposes is prohibited',
          'Users may only view and access content as per this Agreement',
          'All trademarks and logos are proprietary property'
        ]
      }
    },
    {
      id: 'financing',
      title: 'EMI Services',
      icon: CreditCard,
      content: {
        intro: 'We offer financing assistance for medical treatments:',
        points: [
          'Partnership with various NBFCs for EMI facilities',
          'Eligibility decided by lending partners case-by-case',
          'No interest or processing fees for No-Cost EMI',
          'KYC documents and income proof required'
        ]
      }
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: {
        intro: 'Important limitations on our liability:',
        points: [
          'No warranty on information accuracy or completeness',
          'Not liable for medical outcomes or service quality',
          'Maximum liability limited to INR 1',
          'Users indemnify Dr Purva Global Solutions from third-party claims'
        ]
      }
    },
    {
      id: 'law',
      title: 'Governing Law',
      icon: Gavel,
      content: {
        intro: 'Legal framework governing these Terms:',
        points: [
          'Governed by laws of India',
          'Exclusive jurisdiction of courts at Gurugram, Haryana',
          'Compliance with IT Act 2000 and related rules',
          'Severability clause applies to all provisions'
        ]
      }
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
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Billion Plus Enterprises (Dr Purva Global Solutions)
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <Info className="w-5 h-5 text-blue-600 mr-2" />
              <p className="text-sm text-blue-700">
                Please read these terms carefully before using our services
              </p>
            </div>
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
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Sections</h3>
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
                        
                        <div className="bg-gray-50 rounded-xl p-6">
                          <p className="text-gray-700 mb-4">{section.content.intro}</p>
                          
                          <ul className="space-y-3">
                            {section.content.points.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-3 font-bold">•</span>
                                <span className="text-gray-600 text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Prohibited Activities */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Ban className="w-6 h-6 text-red-500 mr-3" />
                    Prohibited Activities
                  </h3>
                  
                  <div className="bg-red-50 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">Users are strictly prohibited from:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          Hosting content that belongs to others without permission
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          Publishing harmful, defamatory, or illegal content
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          Attempting to breach security or disrupt services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          Using automated tools to scrape or copy content
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-4">
                      For questions or grievances related to these Terms:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-700">BILLION PLUS ENTERPRISES</p>
                          <p className="text-gray-600">617 Sector 14, Gurgaon, Haryana 122001</p>
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

                {/* DND Override Notice */}
                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-amber-800 mb-1">Contact Authorization</p>
                      <p className="text-sm text-amber-700">
                        By sharing your contact information, you authorize Billion Plus Enterprises and its representatives 
                        to contact you for promotional offers and services. This overrides any DND/DNC registration.
                      </p>
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

export default TermsOfServicePage;