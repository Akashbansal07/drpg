import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Award, 
  Users, 
  Star,
  Shield,
  CheckCircle,
  Quote,
  Stethoscope,
  BookOpen,
  Trophy,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Activity
} from 'lucide-react';

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [doctorVisible, setDoctorVisible] = useState(false);
  const sectionRef = useRef(null);
  const doctorRef = useRef(null);

  // Intersection Observer for main content
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

  // Intersection Observer for doctor section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDoctorVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (doctorRef.current) {
      observer.observe(doctorRef.current);
    }

    return () => {
      if (doctorRef.current) {
        observer.unobserve(doctorRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      icon: Calendar,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Users,
      number: "5000+",
      label: "Patients Treated"
    },
    {
      icon: Award,
      number: "3",
      label: "Specialized Clinics"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Patient Satisfaction"
    }
  ];

  const services = [
    "Musculoskeletal Conditions Treatment",
    "Post-operative Rehabilitation", 
    "Chronic Pain Management",
    "Cryotherapy & Heat Therapy",
    "Electrical Stimulation & TENS",
    "Soft Tissue Mobilization",
    "Ergonomic Training",
    "Strengthening Exercises"
  ];

  const qualifications = [
    {
      degree: "Master's in Physiotherapy",
      specialization: "Cardiovascular & Pulmonary Sciences",
      university: "Chaudhary Charan Singh University"
    },
    {
      degree: "Bachelor's in Physiotherapy", 
      specialization: "Clinical Practice",
      university: "Chaudhary Charan Singh University"
    }
  ];

  const experience = [
    {
      position: "Founder & Head",
      organization: "Dr. Purva Global Solutions",
      current: true
    },
    {
      position: "Head of Department",
      organization: "Yes Plus Pain Management Clinic",
      current: true
    },
    {
      position: "Founder",
      organization: "Yes Plus Wellness Store",
      current: true
    },
    {
      position: "Head of Department",
      organization: "Triveni Hospital",
      current: false
    },
    {
      position: "Senior Physiotherapist",
      organization: "Fortis Hospital & Park Hospital",
      current: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 via-white to-rose-25">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-20 w-32 h-32 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-rose-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10">
        
        {/* Hero Section */}
        <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-pulse" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">
                About Dr. Purva Global
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Empathy, Transparency, and Guidance - The foundation of exceptional healthcare
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-pulse" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">
                    Our Story
                  </h2>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-pink-100 max-w-5xl mx-auto">
                <div className="flex items-start mb-6">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                      Founded in the heart of <span className="font-semibold text-pink-600">Gurgaon, India's medical hub</span>, 
                      Dr. Purva Global Solutions is built on the belief that empathy, transparency, and guidance are as vital as the treatment itself. 
                      From the moment of diagnosis to post-surgery recovery, the center supports patients at every step.
                    </p>
                    
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                      Our team of trained experts walks patients through hospital processes, helps them choose the right doctors and hospitals, 
                      explains procedures in layman's terms, and offers post-operative support to ensure peace of mind.
                    </p>
                    
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 sm:p-6 border-l-4 border-pink-400">
                      <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                        Experience truly personalized care — unlike other medical tour facilitators, we ensure every patient is 
                        <span className="font-bold text-pink-600"> guided and supported directly by the doctor herself</span>, 
                        from consultation to recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-pink-400 to-rose-400">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-pink-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Years of dedication reflected in patient success stories
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-700 transform hover:scale-105 hover:bg-white/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  <achievement.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mx-auto mb-3 sm:mb-4" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-pink-100 text-xs sm:text-sm md:text-base">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Profile Section */}
        <section ref={doctorRef} className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ${
              doctorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-pulse" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">
                    Meet Dr. Purva Gupta
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Doctor Image */}
                <div className={`transition-all duration-1000 delay-300 ${
                  doctorVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
                      <img
                        src="https://drpurvaglobal.com/wp-content/uploads/2025/05/Purva-pic-3-2048x1171.jpg"
                        alt="Dr. Purva Gupta"
                        className="w-full rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&crop=center";
                        }}
                      />
                    </div>
                    
                    {/* Floating Achievement Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-3 shadow-xl">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className={`transition-all duration-1000 delay-500 ${
                  doctorVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-pink-100">
                    
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Dr. Purva Gupta
                      </h3>
                      <p className="text-pink-600 font-semibold text-sm sm:text-base md:text-lg">
                        Distinguished Physiotherapist & Healthcare Entrepreneur
                      </p>
                      <div className="flex items-center mt-2">
                        <MapPin className="w-4 h-4 text-pink-400 mr-2" />
                        <span className="text-gray-600 text-sm">Gurgaon, India</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                      Dr. Purva Gupta is a distinguished physiotherapist and healthcare entrepreneur based in Gurgaon, India. 
                      With over <span className="font-semibold text-pink-600">15 years of clinical experience</span>, she has been 
                      instrumental in advancing patient-centric rehabilitation practices and fostering wellness initiatives in the region.
                    </p>

                    {/* Qualifications */}
                    <div className="mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-pink-500" />
                        Education & Qualifications
                      </h4>
                      <div className="space-y-3">
                        {qualifications.map((qual, index) => (
                          <div key={index} className="bg-pink-50 rounded-lg p-3 border-l-3 border-pink-400">
                            <div className="font-semibold text-gray-800 text-sm">{qual.degree}</div>
                            <div className="text-pink-600 text-xs">{qual.specialization}</div>
                            <div className="text-gray-600 text-xs">{qual.university}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Dr. Purva
                      </button>
                      <button className="flex-1 border-2 border-pink-400 text-pink-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Services Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Professional Experience */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-pink-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-pink-500" />
                  Professional Experience
                </h3>
                
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0 ${
                        exp.current ? 'bg-pink-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{exp.position}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">{exp.organization}</p>
                        {exp.current && (
                          <span className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full mt-1">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-pink-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-pink-500" />
                  Specialized Services
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mr-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Strategic Partnership
                </h2>
              </div>
              
              <p className="text-pink-100 text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                In a strategic move to enhance service delivery and broaden reach, the Yes Plus Wellness Store has 
                partnered with <span className="font-bold text-white">Tata 1mg as a Health Partner</span>. This collaboration 
                enables the store to leverage Tata 1mg's robust platform for order processing and delivery in Gurgaon.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="bg-white text-pink-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Start Your Journey
                </button>
                <button className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;