import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Heart, 
  Star, 
  Award,
  CheckCircle,
  TrendingUp,
  MapPin,
  Phone,
  Users,
  ChevronDown
} from 'lucide-react';

// Import countries data
import { countries, defaultCountry } from './countries.js';

// Import the Enhanced Medical Services Component
import EnhancedMedicalServicesSection from './EnhancedMedicalServicesSection';

// Import the Doctors Section Component
import DoctorsSection from './DoctorsSection';

// Top Hospitals Section Component (updated)
const TopHospitalsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHospital, setHoveredHospital] = useState(null);
  const sectionRef = useRef(null);

  const hospitals = [
    {
      id: 1,
      name: "CK Birla Hospital",
      location: "Gurugram",
      image: "https://assets.bajajfinservhealth.in/media/doctorprofilepic/1642140810886_HospitalFacilityImages_Capture-w720-h720.webp",
      established: "2015"
    },
    {
      id: 2,
      name: "Metro Hospital",
      location: "Faridabad",
      image: "https://metrohospitalfaridabad.com/wp-content/uploads/2024/07/Metro-building.webp",
      established: "2010"
    },
    {
      id: 3,
      name: "Medanta The Medicity",
      location: "Gurugram",
      image: "https://static.hospidio.com/uploads/hospital/23/medanta-themedicitygurugram-hospital.jpg.webp",
      established: "2009"
    },
    {
      id: 4,
      name: "Marengo Asia Hospital",
      location: "Faridabad, Gurugram",
      image: "https://www.marengoasiahospitals.com/static/uploads/6d49269c-ac35-4828-a2fb-a5afa27e66f5-1681190737506.png",
      established: "2018"
    },
    {
      id: 5,
      name: "Fortis Memorial",
      location: "Gurugram",
      image: "https://rawahealth.com/wp-content/uploads/2023/08/fortis-memorial-research-institute-gurgaon-1467190475-57738ccb5ab5b.jpg",
      established: "2001"
    },
    {
      id: 6,
      name: "Sarvodaya Hospital",
      location: "Faridabad",
      image: "https://sdk-image2.s3.ap-south-1.amazonaws.com/small_Sarvodaya_Building_New_Image_final_8d5554a560.jpg",
      established: "2012"
    }
  ];

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-300 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-400 rounded-full translate-x-30 translate-y-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-200 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent">
                Top Partner Hospitals
              </h2>
              <p className="text-pink-600 font-medium mt-1 text-sm sm:text-base">Excellence in Healthcare</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            We partner with India's leading hospitals to provide you with world-class medical care, 
            advanced technology, and experienced specialists all under one roof.
          </p>
        </div>

        {/* Hospitals Grid with 3D Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hospitals.map((hospital, index) => (
            <div
              key={hospital.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-20 rotate-3'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredHospital(hospital.id)}
              onMouseLeave={() => setHoveredHospital(null)}
            >
              {/* 3D Card Container */}
              <div className="relative" style={{ perspective: '1000px' }}>
                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform ${
                  hoveredHospital === hospital.id 
                    ? 'shadow-2xl' 
                    : ''
                } hover:shadow-pink-200/50`}
                style={{
                  transform: hoveredHospital === hospital.id 
                    ? 'rotateY(10deg) rotateX(5deg) translateZ(20px)' 
                    : 'rotateY(0deg) rotateX(0deg) translateZ(0px)'
                }}>
                  
                  {/* Hospital Image with Overlay */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop&crop=center`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Established Badge */}
                    <div className="absolute top-4 left-4 bg-pink-500/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                      <span className="text-xs font-semibold text-white">Est. {hospital.established}</span>
                    </div>
                  </div>

                  {/* Hospital Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                        {hospital.name}
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                        <span className="text-sm">{hospital.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* 3D Depth Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce ${
                hoveredHospital === hospital.id ? 'scale-100' : 'scale-0'
              }`}>
                <div className="w-full h-full rounded-full bg-pink-400 animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Complete HomePage Component
const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    country: '',
    medicalProblem: ''
  });

  // Country selector state
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const countryDropdownRef = useRef(null);

  // Animation triggers
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setContentVisible(true), 300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.name || !formData.age || !formData.gender || !formData.email || !formData.phone || !formData.country || !formData.medicalProblem) {
      alert('Please fill in all required fields');
      return;
    }

    // Include selected country phone code with the phone number
    const formDataWithCountry = {
      ...formData,
      phone: `${selectedCountry.phoneCode} ${formData.phone}`,
      selectedCountry: selectedCountry.name
    };
    console.log('Form submitted:', formDataWithCountry);
    alert('Thank you! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      age: '',
      gender: '',
      email: '',
      phone: '',
      country: '',
      medicalProblem: ''
    });
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
    country.phoneCode.includes(countrySearchTerm)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className={`relative min-h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.1), rgba(236, 72, 153, 0.2)), url('https://plus.unsplash.com/premium_photo-1681995206380-babb9b6debc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBhdGllbnR8ZW58MHx8MHx8fDA%3D')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-pink-800/50 to-transparent"></div>
        
        <div className="relative z-10 min-h-[calc(100vh-4rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12 lg:py-12">
            
            {/* Left Side - Content with Staggered Animation */}
            <div className={`text-white space-y-3 sm:space-y-4 lg:space-y-6 order-1 lg:order-1 text-center lg:text-left transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-1200 delay-200 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <span className="text-white drop-shadow-lg">Fearless</span>
                  <span className="block text-pink-200 animate-pulse drop-shadow-lg">Surgeries</span>
                </h1>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light text-pink-100 drop-shadow-md transition-all duration-1200 delay-400 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Healthy life make your life happy
                </p>
                <p className={`text-xs sm:text-sm lg:text-base text-pink-200 max-w-md mx-auto lg:mx-0 leading-relaxed drop-shadow-sm transition-all duration-1200 delay-600 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Experience world-class medical care with our network of top-rated hospitals.
                </p>
              </div>
              
              <div className={`grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-4 max-w-xs mx-auto lg:mx-0 transition-all duration-1200 delay-800 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {[
                  { number: '500+', label: 'Surgeries', icon: Heart },
                  { number: '50+', label: 'Hospitals', icon: Shield },
                  { number: '98%', label: 'Success Rate', icon: TrendingUp }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className={`text-center transform transition-all duration-500 hover:scale-110 bg-black/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 ${
                      contentVisible ? 'animate-bounce' : ''
                    }`} style={{ animationDelay: `${index * 200 + 1000}ms`, animationDuration: '2s', animationIterationCount: '1' }}>
                      <div className="flex flex-col items-center">
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-200 mb-1" />
                        <div className="text-sm sm:text-base lg:text-lg font-bold text-white drop-shadow-lg">{stat.number}</div>
                        <div className="text-xs text-pink-200 drop-shadow-sm">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Beautiful Form with Slide Animation */}
            <div className={`order-2 w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:ml-auto transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-2xl p-2.5 sm:p-3 lg:p-4 border border-pink-100 h-fit transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center mb-2 sm:mb-3">
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600 mr-1.5" />
                    <h2 className="text-xs sm:text-sm lg:text-base font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent animate-pulse">
                      Get Free Consultation
                    </h2>
                  </div>
                  <p className="text-xs text-gray-600">Connect with our experts</p>
                </div>

                <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {/* Name Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                      Name <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  {/* Age and Gender - Combined Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="transform transition-all duration-300 hover:translate-x-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                        Age <span className="text-pink-500 animate-pulse">*</span>
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                        placeholder="Age"
                        required
                      />
                    </div>
                    
                    <div className="transform transition-all duration-300 hover:translate-x-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                        Gender <span className="text-pink-500 animate-pulse">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none bg-white hover:shadow-md focus:scale-[1.02]"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                      Email <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  {/* Phone Field with Country Selector */}
                  <div className="transform transition-all duration-300 hover:translate-x-1 relative z-[100]">
                    <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                      WhatsApp <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <div className="relative flex">
                      {/* Country Selector */}
                      <div className="relative z-[101]" ref={countryDropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-l-md border-2 border-pink-100 border-r-0 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none bg-white hover:shadow-md focus:scale-[1.02] min-w-[80px] relative z-[102]"
                        >
                          <span className="mr-1">{selectedCountry.flag}</span>
                          <span className="text-xs font-medium mr-1">{selectedCountry.phoneCode}</span>
                          <ChevronDown className="w-3 h-3 text-gray-400" />
                        </button>
                        
                        {/* Country Dropdown */}
                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 w-72 bg-white border border-pink-200 rounded-lg shadow-2xl z-[9999] max-h-60 overflow-hidden">
                            {/* Search Input */}
                            <div className="p-2 border-b border-pink-100">
                              <input
                                type="text"
                                placeholder="Search countries..."
                                value={countrySearchTerm}
                                onChange={(e) => setCountrySearchTerm(e.target.value)}
                                className="w-full px-2 py-1 text-xs border border-pink-200 rounded outline-none focus:border-pink-400"
                              />
                            </div>
                            
                            {/* Country List */}
                            <div className="max-h-48 overflow-y-auto">
                              {filteredCountries.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setIsCountryDropdownOpen(false);
                                    setCountrySearchTerm('');
                                  }}
                                  className="w-full flex items-center px-3 py-2 text-xs hover:bg-pink-50 transition-colors duration-200 text-left"
                                >
                                  <span className="mr-2">{country.flag}</span>
                                  <span className="flex-1 text-gray-700">{country.name}</span>
                                  <span className="text-gray-500 font-medium">{country.phoneCode}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-r-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                        placeholder="WhatsApp number"
                        required
                      />
                    </div>
                  </div>

                  {/* Country Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                      Country <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Your country"
                      required
                    />
                  </div>

                  {/* Medical Problem Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-0.5">
                      Medical Problem <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <textarea
                      name="medicalProblem"
                      value={formData.medicalProblem}
                      onChange={handleInputChange}
                      rows="2"
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none resize-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Describe condition..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-3 text-xs sm:text-sm rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-pink-200 outline-none active:scale-95 animate-pulse hover:animate-none flex items-center justify-center"
                  >
                    <CheckCircle className="w-3 h-3 mr-1.5" />
                    Get Free Consultation
                  </button>
                </div>

                <div className="mt-1.5 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center">
                    <Shield className="w-2.5 h-2.5 mr-1" />
                    Privacy protected
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Top Hospitals Section */}
      <TopHospitalsSection />

      {/* Doctors Section */}
      <DoctorsSection />

      {/* Enhanced Medical Services Section - NEW COMPONENT WITH ANIMATIONS */}
      <EnhancedMedicalServicesSection />
    </div>
  );
};

export default HomePage;