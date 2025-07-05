import React, { useState, useEffect, useRef } from 'react';
import { 
  Plane, 
  MapPin, 
  Camera, 
  Utensils,
  User,
  Gift,
  Heart,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Globe,
  Car
} from 'lucide-react';

const MedicalTourismPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const tourDestinations = [
    {
      id: 1,
      name: "Amritsar - Golden Temple",
      image: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Visit the spiritual heart of Sikhism with its magnificent Golden Temple and witness the community kitchen feeding thousands daily",
      highlights: ["Golden Temple visit", "Jallianwala Bagh", "Wagah Border ceremony", "Authentic Punjabi langar"]
    },
    {
      id: 2,
      name: "Delhi - Capital Heritage",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&auto=format&fit=crop&q=60",
      description: "Explore India's vibrant capital with its blend of Mughal architecture, colonial history, and modern urban culture",
      highlights: ["Red Fort & Qutub Minar", "India Gate", "Humayun's Tomb", "Chandni Chowk bazaar"]
    },
    {
      id: 3,
      name: "Jaipur - Pink City",
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww",
      description: "Experience the royal grandeur of Rajasthan's Pink City with its magnificent palaces, forts, and vibrant culture",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Local handicrafts"]
    },
    {
      id: 4,
      name: "Agra - Taj Mahal",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&auto=format&fit=crop&q=60",
      description: "Marvel at the eternal symbol of love - the Taj Mahal, and explore the rich Mughal heritage of this historic city",
      highlights: ["Taj Mahal sunrise", "Agra Fort", "Mehtab Bagh", "Mughlai cuisine"]
    },
    {
      id: 5,
      name: "Ajmer - Spiritual Center",
      image: "https://images.unsplash.com/photo-1646559292795-e5efd20c008b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experience the spiritual essence at the revered Ajmer Sharif Dargah, a place of unity and divine blessings",
      highlights: ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Taragarh Fort", "Sufi music experience"]
    },
    {
      id: 6,
      name: "Rishikesh - Yoga Capital",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=60",
      description: "Find peace and spiritual awakening in the world's yoga capital, nestled in the foothills of the Himalayas",
      highlights: ["Ganga Aarti ceremony", "Laxman Jhula", "Yoga ashrams", "River rafting"]
    }
  ];

  const cuisineExperiences = [
    {
      name: "North Indian Delights",
      items: ["Butter Chicken", "Biryani", "Naan & Roti", "Kulfi"],
      image: "🍛"
    },
    {
      name: "South Indian Flavors",
      items: ["Dosa & Idli", "Sambar", "Coconut Chutney", "Filter Coffee"],
      image: "🥞"
    },
    {
      name: "Street Food Adventure",
      items: ["Chaat", "Gol Gappa", "Vada Pav", "Kulfi"],
      image: "🍘"
    },
    {
      name: "Royal Rajasthani",
      items: ["Dal Baati", "Ghevar", "Laal Maas", "Ker Sangri"],
      image: "🍲"
    }
  ];

  const complimentaryServices = [
    {
      icon: User,
      title: "Dedicated Tour Guide",
      description: "Personal guide from our team throughout your entire journey"
    },
    {
      icon: Car,
      title: "Private Transportation",
      description: "Comfortable AC vehicles with experienced drivers"
    },
    {
      icon: Camera,
      title: "Photography Service",
      description: "Professional photos of your memorable moments"
    },
    {
      icon: Utensils,
      title: "Authentic Dining",
      description: "Curated local cuisine experiences at best restaurants"
    },
    {
      icon: Shield,
      title: "Complete Safety",
      description: "24/7 support and assistance during your tour"
    },
    {
      icon: Gift,
      title: "Souvenir Package",
      description: "Handpicked local crafts and mementos to take home"
    }
  ];

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

  const TourCard = ({ destination, index }) => {
    return (
      <div className="group transition-all duration-800 transform opacity-100 translate-y-0">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-pink-100 hover:border-pink-200 transform hover:scale-[1.02] hover:-translate-y-2">
          
          {/* Destination Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&auto=format&fit=crop&q=60";
              }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            

          </div>

          {/* Destination Info */}
          <div className="p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors duration-300">
              {destination.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">{destination.description}</p>

            {/* Highlights */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-400" />
                Tour Highlights
              </h4>
              <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                {destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 via-white to-rose-25">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-20 w-32 h-32 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-rose-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10">
        
        {/* Hero Section with Taj Mahal Background */}
        <section 
          className={`relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.15), rgba(236, 72, 153, 0.15)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 via-pink-800/40 to-transparent"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mr-0 sm:mr-4 mb-2 sm:mb-0 drop-shadow-lg" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
                Local Tourism
              </h1>
            </div>
            
            <p className="text-sm sm:text-lg md:text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow-md px-4">
              Heal, Recover & Explore India's Rich Heritage - Complimentary!
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">🎁 After Your Treatment - FREE India Tour!</h2>
              <p className="text-pink-100 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                Once you've recovered, embark on a magical journey through India's most iconic destinations. 
                Enjoy authentic local cuisines, cultural experiences, and create memories that last a lifetime - 
                all complimentary from our side with a dedicated team member as your guide.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <div className="py-8 sm:py-12 md:py-16"></div>

        {/* Tour Destinations */}
        <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent text-center sm:text-left">
                  Choose Your Dream Destination
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                After your successful treatment, explore India's cultural treasures with our complimentary local tour package
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {tourDestinations.map((destination, index) => (
                <TourCard
                  key={destination.id}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Cuisine Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-pink-400 to-rose-400">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
                  Authentic Culinary Journey
                </h2>
              </div>
              <p className="text-pink-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Savor the diverse flavors of India with our curated food experiences
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {cuisineExperiences.map((cuisine, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 transform hover:scale-105 hover:bg-white/20"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{cuisine.image}</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">{cuisine.name}</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {cuisine.items.map((item, idx) => (
                      <div key={idx} className="text-pink-100 text-xs sm:text-sm">• {item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complimentary Services */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent text-center sm:text-left">
                  What's Included - Absolutely FREE!
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Every service is complimentary - our gift to you for choosing us for your medical care
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {complimentaryServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-pink-100"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-3 sm:mt-4 inline-flex items-center text-green-600 text-xs sm:text-sm font-semibold">
                    <Gift className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Complimentary
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 md:mb-16">
              How Your Journey Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "1",
                  title: "Medical Treatment",
                  description: "Complete your treatment at our partner hospitals",
                  icon: Heart
                },
                {
                  step: "2", 
                  title: "Recovery Period",
                  description: "Rest and recover with our medical team's care",
                  icon: Shield
                },
                {
                  step: "3",
                  title: "Tour Planning",
                  description: "Choose your preferred destinations and experiences",
                  icon: MapPin
                },
                {
                  step: "4",
                  title: "Explore & Enjoy",
                  description: "Embark on your complimentary India adventure",
                  icon: Camera
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-700 transform hover:scale-105"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-pink-100 text-xs sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden mx-2 sm:mx-0">
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready for Treatment + Adventure?
              </h2>
              <p className="text-pink-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Get world-class medical treatment and explore incredible India - all in one journey. 
                Your tour is our complimentary gift to celebrate your recovery!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="bg-white text-pink-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Start Your Medical Journey
                </button>
                <button className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Plan Your Tour
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MedicalTourismPage;