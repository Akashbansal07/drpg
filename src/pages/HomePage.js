import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Heart, 
  Star, 
  Award,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

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

  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Animation triggers
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setContentVisible(true), 300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
                  Top Hospitals • Lowest Cost • Complete Care
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
            <div className={`order-2 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-3 sm:p-4 border border-pink-100 h-fit transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="flex items-center justify-center mb-1 sm:mb-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mr-2" />
                    <h2 className="text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent animate-pulse">
                      Get Free Consultation
                    </h2>
                  </div>
                  <p className="text-xs text-gray-600">Connect with our medical experts</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                  {/* Name Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Name <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  {/* Age and Gender - Combined Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="transform transition-all duration-300 hover:translate-x-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Age <span className="text-pink-500 animate-pulse">*</span>
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                        placeholder="Age"
                        required
                      />
                    </div>
                    
                    <div className="transform transition-all duration-300 hover:translate-x-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Gender <span className="text-pink-500 animate-pulse">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none bg-white hover:shadow-md focus:scale-[1.02]"
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
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      WhatsApp Phone <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="WhatsApp number"
                      required
                    />
                  </div>

                  {/* Country Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Country <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Your country"
                      required
                    />
                  </div>

                  {/* Medical Problem Field */}
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Medical Problem <span className="text-pink-500 animate-pulse">*</span>
                    </label>
                    <textarea
                      name="medicalProblem"
                      value={formData.medicalProblem}
                      onChange={handleInputChange}
                      rows="2"
                      className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none resize-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="Describe your condition..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2.5 px-4 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-pink-200 outline-none active:scale-95 animate-pulse hover:animate-none flex items-center justify-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get Free Consultation
                  </button>
                </form>

                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Privacy policy protected
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;