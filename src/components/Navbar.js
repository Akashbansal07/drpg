import { useState, useEffect } from 'react';
import { 
  Home, 
  Building2, 
  Plane, 
  Route,
  Users,
  Stethoscope
} from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'hospitals', label: 'Hospitals', icon: Building2 },
    { id: 'medical-tourism', label: 'Medical Tourism', icon: Plane },
    { id: 'patient-journey', label: 'Patient Journey', icon: Route },
    { id: 'about-us', label: 'About Us', icon: Users }
  ];

  // Navbar entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle page navigation with animation
  const handlePageChange = (pageId) => {
    if (pageId === currentPage) return;
    
    setIsAnimating(true);
    
    // Animate button click
    setTimeout(() => {
      setCurrentPage(pageId);
      setIsAnimating(false);
      setIsMobileMenuOpen(false);
    }, 300);
  };

  return (
    <nav className={`bg-gradient-to-r from-pink-50 via-white to-pink-50 shadow-lg sticky top-0 z-50 border-b border-pink-100 transition-all duration-1000 transform ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Animation */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => handlePageChange('home')}>
            <div className="flex items-center space-x-3 transform transition-all duration-300 group-hover:scale-105">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent">
                  Dr Purva Global
                </div>
                <div className="text-xs text-pink-500 font-medium -mt-1">
                  Fearless Healthcare
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    disabled={isAnimating}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 group ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg hover:shadow-xl'
                        : 'text-pink-700 hover:text-pink-800 hover:bg-pink-50'
                    } ${
                      isAnimating ? 'animate-pulse' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <IconComponent className="w-4 h-4 mr-2 inline transition-transform duration-300 group-hover:scale-110" />
                    {item.label}
                    
                    {/* Active indicator */}
                    {currentPage === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                      currentPage === item.id ? 'hidden' : ''
                    }`}></div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-pink-600 hover:text-pink-700 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-all duration-200 transform hover:scale-110"
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-pink-50 to-white rounded-2xl mt-2 border border-pink-100 shadow-lg">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  disabled={isAnimating}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md'
                      : 'text-pink-700 hover:text-pink-800 hover:bg-pink-100'
                  } ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease-in-out ${index * 50}ms`
                  }}
                >
                  <IconComponent className="w-5 h-5 mr-3 inline transition-transform duration-300 hover:scale-110" />
                  {item.label}
                  
                  {currentPage === item.id && (
                    <span className="float-right">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Loading bar animation during page transitions */}
      {isAnimating && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-100 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-shimmer"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;