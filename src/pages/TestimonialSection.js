import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  Quote, 
  Heart,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Angela",
      procedure: "Knee Replacement",
      image: "https://drpurvaglobal.com/wp-content/uploads/2025/05/Russian-2-scaled.jpg",
      content: "I'm incredibly grateful to Dr. Purva and the team at Dr. Purva Global Solutions for their outstanding support throughout my surgery journey. Dr. Purva's personal attention, compassion, and expertise made me feel completely at ease. She went above and beyond to ensure everything was smooth, from pre-op to recovery. I couldn't have asked for better care!",
      rating: 5
    },
    {
      id: 2,
      name: "Nikolai",
      procedure: "General Surgery",
      image: "https://drpurvaglobal.com/wp-content/uploads/2025/05/Russian-scaled.jpg",
      content: "Dr. Purva is a blessing! From the first consultation to post-surgery care, she guided me with such kindness and clarity. I felt safe and supported every step of the way. Thank you, Dr. Purva Global Solutions, for making a stressful time so much easier.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael",
      procedure: "Hair Transplant",
      image: "https://drpurvaglobal.com/wp-content/uploads/2025/05/Russian-3-scaled.jpg",
      content: "After months of uncertainty, finding Dr. Purva Global Solutions changed everything. Dr. Purva treated me not just as a patient, but as a person. Her compassion and expertise gave me hope and healing I didn't think was possible.",
      rating: 5
    },
    {
      id: 4,
      name: "Sabina",
      procedure: "General Surgery",
      image: "https://drpurvaglobal.com/wp-content/uploads/2025/05/Arabian.jpg",
      content: "I was nervous about traveling for surgery, but Dr. Purva's professionalism and constant communication gave me full confidence. Everything was arranged perfectly, and the care I received was world-class. I highly recommend Dr. Purva Global Solutions!",
      rating: 5
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

  // Remove auto-rotate functionality - only manual navigation

  // Manual navigation functions
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center justify-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating 
                ? 'text-yellow-400 fill-current animate-pulse' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial, isActive, position }) => {
    const getCardStyle = () => {
      if (position === 'center') {
        return 'scale-100 opacity-100 z-20';
      } else if (position === 'side') {
        return 'scale-90 opacity-70 z-10';
      } else {
        return 'scale-75 opacity-40 z-0';
      }
    };

    return (
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${getCardStyle()}`}
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mx-4 sm:mx-8 h-full flex flex-col border border-pink-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-300">
          {/* Patient Info - Moved to top */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-3">
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-3 border-pink-200 shadow-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 border-3 border-pink-200 shadow-md items-center justify-center hidden">
                  <User className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600" />
                </div>
              </div>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-1">{testimonial.name}</h4>
            <p className="text-pink-600 text-sm font-medium mb-3">{testimonial.procedure}</p>
          </div>

          {/* Star Rating */}
          <StarRating rating={testimonial.rating} />

          {/* Testimonial Content */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center line-clamp-6 overflow-hidden">
              "{testimonial.content}"
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full animate-bounce delay-500" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <Heart className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent">
                Patient Stories
              </h2>
              <p className="text-pink-600 font-medium mt-2">Real experiences, Real results</p>
            </div>
          </div>
          <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Discover how Dr. Purva Global Solutions has transformed lives with compassionate care and expert medical treatment.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Main Carousel Container */}
          <div className="relative h-80 sm:h-96 lg:h-[420px] max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => {
              let position = 'hidden';
              
              if (index === currentIndex) {
                position = 'center';
              } else if (
                index === (currentIndex - 1 + testimonials.length) % testimonials.length ||
                index === (currentIndex + 1) % testimonials.length
              ) {
                position = 'side';
              }

              return (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                  position={position}
                />
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-pink-100 hover:border-pink-300 group z-30"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors duration-200" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-pink-100 hover:border-pink-300 group z-30"
          >
            <ChevronRight className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors duration-200" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-600 w-8 shadow-lg'
                    : 'bg-pink-300 hover:bg-pink-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .line-clamp-6 {
            -webkit-line-clamp: 4;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;

// To integrate into your HomePage, add this import at the top:
// import TestimonialSection from './TestimonialSection';

// Then add this line in your HomePage component after DoctorsSection:
// {/* Patient Testimonials Section */}
// <TestimonialSection />