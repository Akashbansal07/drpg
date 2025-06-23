import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Star, 
  MapPin, 
  Users, 
  Award,
  Phone,
  Mail,
  Calendar,
  Shield,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Activity,
  Clock
} from 'lucide-react';

const HospitalsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const hospitals = [
    {
      id: 1,
      name: "CK Birla Hospital",
      location: "Gurugram",
      image: "https://assets.bajajfinservhealth.in/media/doctorprofilepic/1642140810886_HospitalFacilityImages_Capture-w720-h720.webp",
      rating: 4.8,
      specialties: ["Cardiology", "Oncology", "Neurology"],
      established: "2015",
      beds: "400+",
      description: "A leading multi-specialty hospital providing world-class healthcare services with cutting-edge technology.",
      accreditation: "NABH Accredited",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      name: "Metro Hospital",
      location: "Faridabad",
      image: "https://metrohospitalfaridabad.com/wp-content/uploads/2024/07/Metro-building.webp",
      rating: 4.7,
      specialties: ["Orthopedics", "Gastro", "Pediatrics"],
      established: "2010",
      beds: "300+",
      description: "Advanced medical care with state-of-the-art technology and experienced medical professionals.",
      accreditation: "ISO Certified",
      color: "from-pink-600 to-pink-700"
    },
    {
      id: 3,
      name: "Medanta The Medicity",
      location: "Gurugram",
      image: "https://static.hospidio.com/uploads/hospital/23/medanta-themedicitygurugram-hospital.jpg.webp",
      rating: 4.9,
      specialties: ["Multi-Specialty", "Transplant", "Critical Care"],
      established: "2009",
      beds: "1250+",
      description: "One of India's largest super-specialty hospitals with comprehensive medical services.",
      accreditation: "JCI Accredited",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 4,
      name: "Marengo Asia Hospital",
      location: "Faridabad",
      image: "https://www.marengoasiahospitals.com/static/uploads/6d49269c-ac35-4828-a2fb-a5afa27e66f5-1681190737506.png",
      rating: 4.6,
      specialties: ["Emergency", "Surgery", "Diagnostics"],
      established: "2018",
      beds: "200+",
      description: "Modern healthcare facility with advanced diagnostic and treatment capabilities.",
      accreditation: "NABH Certified",
      color: "from-pink-700 to-rose-600"
    },
    {
      id: 5,
      name: "Fortis Memorial",
      location: "Gurugram",
      image: "https://rawahealth.com/wp-content/uploads/2023/08/fortis-memorial-research-institute-gurgaon-1467190475-57738ccb5ab5b.jpg",
      rating: 4.8,
      specialties: ["Heart", "Cancer", "Kidney"],
      established: "2001",
      beds: "1000+",
      description: "Premier healthcare destination offering comprehensive medical services and research.",
      accreditation: "JCI & NABH Accredited",
      color: "from-rose-600 to-pink-700"
    },
    {
      id: 6,
      name: "Sarvodaya Hospital",
      location: "Faridabad",
      image: "https://sdk-image2.s3.ap-south-1.amazonaws.com/small_Sarvodaya_Building_New_Image_final_8d5554a560.jpg",
      rating: 4.5,
      specialties: ["General", "Maternity", "Emergency"],
      established: "2012",
      beds: "250+",
      description: "Compassionate care with modern medical facilities and experienced healthcare team.",
      accreditation: "ISO Certified",
      color: "from-pink-500 to-rose-500"
    }
  ];

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
            
            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform transition-all duration-300 group-hover:scale-110">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-bold text-gray-800">{hospital.rating}</span>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className={`absolute top-4 left-4 bg-gradient-to-r ${hospital.color} rounded-full px-3 py-1 shadow-lg`}>
              <span className="text-xs font-semibold text-white">{hospital.accreditation}</span>
            </div>

            {/* Established Year */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-xs font-medium text-white">Est. {hospital.established}</span>
            </div>
          </div>

          {/* Hospital Info */}
          <div className="p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                {hospital.name}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                <span className="font-medium">{hospital.location}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{hospital.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors duration-300">
                <Users className="w-5 h-5 text-pink-500 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-800">{hospital.beds}</div>
                <div className="text-xs text-gray-600">Beds</div>
              </div>
              <div className="text-center p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors duration-300">
                <Award className="w-5 h-5 text-pink-500 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-800">A+</div>
                <div className="text-xs text-gray-600">Grade</div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Stethoscope className="w-4 h-4 mr-2 text-pink-500" />
                Medical Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium hover:bg-pink-200 transition-colors duration-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center bg-gradient-to-r ${hospital.color} text-white shadow-md hover:shadow-lg group`}>
                <Phone className="w-4 h-4 mr-2" />
                Get Information
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full py-2 px-6 rounded-xl font-medium border-2 border-pink-300 text-pink-600 hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
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
                  icon: Stethoscope,
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-white relative overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Begin Your Healthcare Journey?
              </h2>
              <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Let our medical experts help you choose the right hospital and specialist for your specific needs. 
                Get personalized recommendations and support throughout your treatment journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-pink-600 font-bold py-4 px-8 rounded-2xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Call: +91 97113 13773
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HospitalsPage;