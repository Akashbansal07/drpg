import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail,
  CheckCircle,
  Activity,
  Award,
  X,
  ChevronDown,
  Shield
} from 'lucide-react';

// Import countries data (assuming you have this file)
// import { countries, defaultCountry } from './countries.js';

// Countries data (simplified version - you can replace with your full countries file)
const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸', phoneCode: '+1' },
  { code: 'IN', name: 'India', flag: '🇮🇳', phoneCode: '+91' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', phoneCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', phoneCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', phoneCode: '+61' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', phoneCode: '+971' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', phoneCode: '+966' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', phoneCode: '+880' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰', phoneCode: '+92' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', phoneCode: '+234' },
];

const defaultCountry = countries[1]; // India

const HospitalsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const sectionRef = useRef(null);

  // Form state
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

  const countryDropdownRef = useRef(null);

  const hospitals = [
    {
      id: 1,
      name: "CK Birla Hospital",
      location: "Gurugram",
      image: "https://assets.bajajfinservhealth.in/media/doctorprofilepic/1642140810886_HospitalFacilityImages_Capture-w720-h720.webp",
      established: "2015",
      description: "A leading multi-specialty hospital providing world-class healthcare services with cutting-edge technology.",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      name: "Metro Hospital",
      location: "Faridabad",
      image: "https://metrohospitalfaridabad.com/wp-content/uploads/2024/07/Metro-building.webp",
      established: "2010",
      description: "Advanced medical care with state-of-the-art technology and experienced medical professionals.",
      color: "from-pink-600 to-pink-700"
    },
    {
      id: 3,
      name: "Medanta The Medicity",
      location: "Gurugram",
      image: "https://static.hospidio.com/uploads/hospital/23/medanta-themedicitygurugram-hospital.jpg.webp",
      established: "2009",
      description: "One of India's largest super-specialty hospitals with comprehensive medical services.",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 4,
      name: "Marengo Asia Hospital",
      location: "Faridabad, Gurugram",
      image: "https://www.marengoasiahospitals.com/static/uploads/6d49269c-ac35-4828-a2fb-a5afa27e66f5-1681190737506.png",
      established: "2018",
      description: "Modern healthcare facility with advanced diagnostic and treatment capabilities.",
      color: "from-pink-700 to-rose-600"
    },
    {
      id: 5,
      name: "Fortis Memorial",
      location: "Gurugram",
      image: "https://rawahealth.com/wp-content/uploads/2023/08/fortis-memorial-research-institute-gurgaon-1467190475-57738ccb5ab5b.jpg",
      established: "2001",
      description: "Premier healthcare destination offering comprehensive medical services and research.",
      color: "from-rose-600 to-pink-700"
    },
    {
      id: 6,
      name: "Sarvodaya Hospital",
      location: "Faridabad",
      image: "https://sdk-image2.s3.ap-south-1.amazonaws.com/small_Sarvodaya_Building_New_Image_final_8d5554a560.jpg",
      established: "2012",
      description: "Compassionate care with modern medical facilities and experienced healthcare team.",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 7,
      name: "Narayana Health",
      location: "Gurugram",
      image: "https://content.jdmagicbox.com/v2/comp/bangalore/x4/080PXX80.XX80.160511174017.Z4X4/catalogue/narayana-health-city-bommasandra-industrial-area-bangalore-ent-doctors-2rf7dcp.jpg",
      established: "2008",
      description: "Leading healthcare provider with comprehensive medical services and advanced treatments.",
      color: "from-pink-600 to-rose-600"
    }
  ];

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

  // Intersection Observer
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendInquiry = (hospital) => {
    setSelectedHospital(hospital);
    setShowPopup(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedHospital(null);
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
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.age || !formData.gender || !formData.email || !formData.phone || !formData.country || !formData.medicalProblem) {
      alert('Please fill in all required fields');
      return;
    }

    // Include selected country phone code with the phone number and hospital info
    const formDataWithCountry = {
      ...formData,
      phone: `${selectedCountry.phoneCode} ${formData.phone}`,
      selectedCountry: selectedCountry.name,
      timestamp: new Date().toLocaleString(),
      hospitalName: selectedHospital?.name || '',
      hospitalLocation: selectedHospital?.location || '',
      formType: 'Hospital Inquiry' // To distinguish from home page form
    };

    try {
      // Create a hidden form and submit it (this bypasses CORS completely)
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbxPb38FiOhoVaEHTAxYuNxId9-4ykqzoANuFxrdnyAcPYk3eDTc8Q0YdYsd0CbXNzPiag/exec';
      form.target = 'hidden_iframe_hospital';
      form.style.display = 'none';

      // Create hidden iframe to catch the response
      let iframe = document.getElementById('hidden_iframe_hospital');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden_iframe_hospital';
        iframe.name = 'hidden_iframe_hospital';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Add form data as hidden inputs
      Object.keys(formDataWithCountry).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formDataWithCountry[key];
        form.appendChild(input);
      });

      // Add form to page and submit
      document.body.appendChild(form);
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
      }, 1000);

      // Show success message and close popup
      alert('Thank you! We will contact you soon regarding your inquiry.');
      closePopup();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
    country.phoneCode.includes(countrySearchTerm)
  );

  const HospitalCard = ({ hospital, index }) => {
    return (
      <div className="group transition-all duration-800 transform opacity-100 translate-y-0">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-pink-100 hover:border-pink-200 transform hover:scale-[1.02] hover:-translate-y-2">
          
          {/* Hospital Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop";
              }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Hospital Info */}
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                {hospital.name}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                <span className="font-medium">{hospital.location}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{hospital.description}</p>
            </div>

            {/* Action Button */}
            <div>
              <button 
                onClick={() => handleSendInquiry(hospital)}
                className="w-full py-2 px-6 rounded-xl font-medium border-2 border-pink-300 text-pink-600 hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-rose-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10">
        
        {/* Hero Section with Background Image */}
        <section 
          className={`relative py-20 sm:py-24 lg:py-28 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.2)), url('https://images.unsplash.com/photo-1650449430794-d9faa5ddec65?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="flex items-center justify-center mb-8">
              <Building2 className="w-12 h-12 text-white mr-4 drop-shadow-lg" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Partner Hospitals
              </h1>
            </div>
            
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-md">
              Discover India's premier healthcare facilities where advanced medical technology meets compassionate care. 
              Our partner hospitals are internationally accredited and staffed with world-class specialists.
            </p>
          </div>
        </section>

        {/* Spacing between hero and hospital cards */}
        <div className="py-16"></div>

        {/* Hospitals Grid */}
        <section className="pb-20 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hospitals.map((hospital, index) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Partner Hospitals?
            </h2>
            <p className="text-pink-100 text-lg mb-16 max-w-2xl mx-auto">
              We carefully select hospitals that meet the highest international standards for quality, safety, and patient care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "International Accreditation",
                  description: "JCI, NABH, and ISO certified hospitals ensuring global quality standards and patient safety protocols."
                },
                {
                  icon: Activity,
                  title: "Advanced Technology",
                  description: "State-of-the-art medical equipment, robotic surgery systems, and cutting-edge diagnostic facilities."
                },
                {
                  icon: Building2,
                  title: "Expert Medical Team",
                  description: "Highly qualified doctors and surgeons with international training and years of specialized experience."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 transform hover:scale-105 hover:bg-white/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                >
                  <feature.icon className="w-12 h-12 text-white mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-pink-100 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Form Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-t-2xl">
              <h2 className="text-xl font-bold text-white mb-2">Send Inquiry</h2>
              <p className="text-pink-100 text-sm">
                {selectedHospital?.name} - {selectedHospital?.location}
              </p>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none"
                    placeholder="Full name"
                    required
                  />
                </div>

                {/* Age and Gender */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Age <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none"
                      placeholder="Age"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Gender <span className="text-pink-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none bg-white"
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
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none"
                    placeholder="Email address"
                    required
                  />
                </div>

                {/* Phone Field with Country Selector */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    WhatsApp <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative flex">
                    {/* Country Selector */}
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="flex items-center px-3 py-2 text-sm rounded-l-lg border-2 border-pink-100 border-r-0 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none bg-white min-w-[80px]"
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
                      className="flex-1 px-3 py-2 text-sm rounded-r-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none"
                      placeholder="WhatsApp number"
                      required
                    />
                  </div>
                </div>

                {/* Country Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Country <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none"
                    placeholder="Your country"
                    required
                  />
                </div>

                {/* Medical Problem Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Medical Problem <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    name="medicalProblem"
                    value={formData.medicalProblem}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-1 focus:ring-pink-100 transition-all duration-200 outline-none resize-none"
                    placeholder="Describe your medical condition..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-4 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-pink-200 outline-none active:scale-95 flex items-center justify-center mt-6"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Send Inquiry
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Privacy protected
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalsPage;