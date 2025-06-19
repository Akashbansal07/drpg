import React, { useState, useEffect } from 'react';

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
        className={`relative h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.1), rgba(236, 72, 153, 0.2)), url('https://plus.unsplash.com/premium_photo-1681995206380-babb9b6debc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBhdGllbnR8ZW58MHx8MHx8fDA%3D')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-pink-800/50 to-transparent"></div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-6 sm:py-8 lg:py-12">
            
            {/* Left Side - Content with Staggered Animation */}
            <div className={`text-white space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-1200 delay-200 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <span className="text-white">Fearless</span>
                  <span className="block text-pink-200 animate-pulse">Surgeries</span>
                </h1>
                <p className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-pink-100 transition-all duration-1200 delay-400 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Top Hospitals • Lowest Cost • Complete Care
                </p>
                <p className={`text-sm sm:text-base lg:text-lg text-pink-200 max-w-lg leading-relaxed transition-all duration-1200 delay-600 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Experience world-class medical care with our network of top-rated hospitals. 
                  We provide comprehensive surgical solutions at affordable costs, ensuring 
                  you receive the best treatment without compromise.
                </p>
              </div>
              
              <div className={`grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8 transition-all duration-1200 delay-800 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {[
                  { number: '500+', label: 'Surgeries' },
                  { number: '50+', label: 'Hospitals' },
                  { number: '98%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <div key={index} className={`text-center transform transition-all duration-500 hover:scale-110 ${
                    contentVisible ? 'animate-bounce' : ''
                  }`} style={{ animationDelay: `${index * 200 + 1000}ms`, animationDuration: '2s', animationIterationCount: '1' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-pink-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Beautiful Form with Slide Animation */}
            <div className={`lg:ml-auto order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-6 border border-pink-100 h-fit transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent mb-1 sm:mb-2 animate-pulse">
                    Get Free Consultation
                  </h2>
                  <p className="text-xs text-gray-600">Connect with our medical experts</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 lg:space-y-4">
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
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2.5 px-4 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-pink-200 outline-none active:scale-95 animate-pulse hover:animate-none"
                  >
                    Get Free Consultation
                  </button>
                </form>

                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500">
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