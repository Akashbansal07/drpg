import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Heart, 
  Star, 
  Award,
  MapPin,
  Phone,
  Globe,
  Mail,
  Sparkles,
  Zap,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

// Import your actual medical treatment icons
import icon1 from '../utils/1.png';
import icon2 from '../utils/2.png';
import icon3 from '../utils/3.png';
import icon4 from '../utils/4.png';
import icon5 from '../utils/5.png';
import icon6 from '../utils/6.png';
import icon7 from '../utils/7.png';
import icon8 from '../utils/8.png';
import icon9 from '../utils/9.png';
import icon10 from '../utils/10.png';

// Import comprehensive service icons
import icon11 from '../utils/11.png';
import icon12 from '../utils/12.png';
import icon13 from '../utils/13.png';
import icon14 from '../utils/14.png';
import icon15 from '../utils/15.png';
import icon16 from '../utils/16.png';
import icon17 from '../utils/17.png';
import icon18 from '../utils/18.png';

// Enhanced Medical Services Section Component with Classic Animations
const EnhancedMedicalServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Your actual medical treatments data with icons and light backgrounds for better contrast
  const medicalTreatments = [
    { id: 8, name: "Cardiology", icon: icon8, color: "from-red-100 to-rose-100", bgColor: "bg-red-50" },
    { id: 9, name: "Oncology", icon: icon9, color: "from-gray-100 to-gray-200", bgColor: "bg-gray-50" },
    { id: 2, name: "Neurology", icon: icon2, color: "from-blue-100 to-cyan-100", bgColor: "bg-blue-50" },
    { id: 5, name: "Gynecology", icon: icon5, color: "from-indigo-100 to-purple-100", bgColor: "bg-indigo-50" },
    { id: 10, name: "Orthopedics", icon: icon10, color: "from-teal-100 to-cyan-100", bgColor: "bg-teal-50" },
    { id: 1, name: "Weight Loss Surgery", icon: icon1, color: "from-purple-100 to-pink-100", bgColor: "bg-purple-50" },
    { id: 3, name: "IVF & Fertility", icon: icon3, color: "from-green-100 to-emerald-100", bgColor: "bg-green-50" },
    { id: 4, name: "Cosmetic Surgery", icon: icon4, color: "from-pink-100 to-rose-100", bgColor: "bg-pink-50" },
    { id: 6, name: "Bone Marrow Transplant", icon: icon6, color: "from-red-100 to-pink-100", bgColor: "bg-red-50" },
    { id: 7, name: "Kidney & Liver Transplant", icon: icon7, color: "from-orange-100 to-red-100", bgColor: "bg-orange-50" },
    { id: 8, name: "Dental Services", icon: icon18, color: "from-orange-100 to-red-100", bgColor: "bg-orange-50" },
    { id: 9, name: "Hair transplant", icon: icon17, color: "from-orange-100 to-red-100", bgColor: "bg-orange-50" },
  ];

  const comprehensiveServices = [
    { id: 12, name: "Visa Assistance", icon: icon12, color: "from-violet-100 to-purple-100", bgColor: "bg-violet-50" },
    { id: 15, name: "Translator Services", icon: icon15, color: "from-rose-100 to-pink-100", bgColor: "bg-rose-50" },
    { id: 14, name: "Local SIM Card", icon: icon14, color: "from-sky-100 to-blue-100", bgColor: "bg-sky-50" },
    { id: 13, name: "Hospital Buddy", icon: icon13, color: "from-emerald-100 to-teal-100", bgColor: "bg-emerald-50" },
    { id: 11, name: "Post Surgery Stay", icon: icon11, color: "from-amber-100 to-orange-100", bgColor: "bg-amber-50" },
    { id: 16, name: "Transportation Service", icon: icon16, color: "from-cyan-100 to-blue-100", bgColor: "bg-cyan-50" },
  ];

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  const ClassicServiceCard = ({ service, index, isComprehensive = false }) => (
    <div
      className={`group relative transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-gray-200 group-hover:translate-y-[-2px]">
        
        {/* Subtle gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-xl`} />
        
        {/* Content Container */}
        <div className="relative flex items-center space-x-4">
          
          {/* Icon Container with White Square Background - Enhanced Size */}
          <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex-shrink-0 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 p-2`}>
            {/* White square background for PNG - Enhanced padding */}
            <div className="w-full h-full bg-white rounded-lg flex items-center justify-center shadow-sm p-1">
              <img 
                src={service.icon} 
                alt={service.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 max-w-full max-h-full"
                style={{
                  width: 'calc(100% - 4px)',
                  height: 'calc(100% - 4px)',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallbackIcon = service.id <= 10 ? '❤️' : '🛡️';
                  e.target.parentElement.innerHTML = `<div class="text-2xl sm:text-3xl md:text-4xl flex items-center justify-center w-full h-full">${fallbackIcon}</div>`;
                }}
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 truncate">
              {service.name}
            </h3>
            
            {/* Elegant underline animation */}
            <div className="mt-1 h-0.5 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${service.color} transform transition-transform duration-500 -translate-x-full group-hover:translate-x-0`} />
            </div>
            
            {/* Service badge */}
            <div className="mt-2 flex items-center space-x-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="text-xs text-gray-600 font-medium">Premium Service</span>
            </div>
          </div>
          
          {/* Subtle arrow indicator */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full animate-pulse transform rotate-45" 
             style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(45deg)` }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full animate-pulse delay-1000" 
             style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full animate-bounce delay-500" />
        
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'moveGrid 20s linear infinite'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header Section */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Premium Medical Services</span>
            <Zap className="w-4 h-4 animate-pulse" />
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            
            {/* Header Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-white/5 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
              </div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="inline-block animate-pulse">BEST MEDICAL SERVICE IN INDIA</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  FOR INTERNATIONAL PATIENTS
                </span>
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-300 animate-bounce">
                  @DR PURVA
                </div>
                <div className="text-lg sm:text-xl md:text-2xl">
                  GLOBAL SOLUTIONS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Treatments Section - Three Columns Layout */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`}>
          {/* Medical Treatments Header with Slide Animation */}
          <div className={`flex items-center justify-center mb-8 sm:mb-10 transition-all duration-800 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className={`w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-sm transition-all duration-500 delay-400 ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
            }`}>
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <h3 className={`text-2xl sm:text-3xl font-bold text-gray-800 transition-all duration-600 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                Medical Treatments
              </h3>
              <p className={`text-gray-600 text-sm transition-all duration-600 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                Advanced healthcare solutions
              </p>
            </div>
          </div>
          
          {/* Medical Treatments Grid - Three Columns Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16 sm:mb-20">
            {medicalTreatments.map((treatment, index) => (
              <ClassicServiceCard
                key={treatment.id}
                service={treatment}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Comprehensive Services Section with Delayed Animation */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`}>
          {/* Comprehensive Services Header with Enhanced Animation */}
          <div className={`flex items-center justify-center mb-8 sm:mb-10 transition-all duration-800 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className={`w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-sm transition-all duration-500 delay-900 ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-45'
            }`}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <h3 className={`text-2xl sm:text-3xl font-bold text-gray-800 transition-all duration-600 delay-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                Comprehensive Services
              </h3>
              <p className={`text-gray-600 text-sm transition-all duration-600 delay-1100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                Complete care ecosystem
              </p>
            </div>
          </div>
          
          {/* Comprehensive Services Grid - Responsive Layout with Wave Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {comprehensiveServices.map((service, index) => (
              <ClassicServiceCard
                key={service.id}
                service={service}
                index={index + medicalTreatments.length}
                isComprehensive={true}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Custom CSS for advanced animations */}
      <style jsx>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(90deg); }
          50% { transform: scale(0.9) rotate(180deg); }
          75% { transform: scale(1.05) rotate(270deg); }
        }
      `}</style>
    </section>
  );
};

export default EnhancedMedicalServicesSection;