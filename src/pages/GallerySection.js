import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera,
  Eye
} from 'lucide-react';

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_5717-scaled.jpg",
      alt: "Medical Facility 1"
    },
    {
      id: 2,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_6384.jpg",
      alt: "Medical Facility 2"
    },
    {
      id: 3,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_6383.jpg",
      alt: "Medical Facility 3"
    },
    {
      id: 4,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_6382.jpg",
      alt: "Medical Facility 4"
    },
    {
      id: 5,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_6381.jpg",
      alt: "Medical Facility 5"
    },
    {
      id: 6,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_6380.jpg",
      alt: "Medical Facility 6"
    },
    {
      id: 7,
      src: "https://drpurvaglobal.com/wp-content/uploads/2025/05/IMG_6379.jpg",
      alt: "Medical Facility 7"
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
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get visible images for desktop (3 at a time)
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push({
        ...galleryImages[index],
        position: i
      });
    }
    return images;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-pink-300/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-300/20 to-pink-200/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-200/20 to-pink-300/20 rounded-full animate-bounce delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent">
                Our Gallery
              </h2>
              <p className="text-pink-600 font-medium mt-2">Medical Excellence in Action</p>
            </div>
          </div>
          <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Take a glimpse into our state-of-the-art facilities and medical environment where we provide world-class healthcare services.
          </p>
        </div>

        {/* Gallery Container */}
        <div className={`relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Desktop View - 3 Images */}
          <div className="hidden lg:block">
            <div className="flex justify-center items-center space-x-6 h-80">
              {getVisibleImages().map((image, index) => (
                <div
                  key={`${image.id}-${currentIndex}`}
                  className={`relative transition-all duration-700 ease-in-out transform ${
                    index === 1 
                      ? 'scale-110 z-20 shadow-2xl' 
                      : 'scale-95 z-10 opacity-80'
                  }`}
                >
                  <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=400&fit=crop&crop=center`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - 1 Image */}
          <div className="lg:hidden">
            <div className="flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=400&fit=crop&crop=center`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-pink-100 hover:border-pink-300 group z-30"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600 group-hover:text-pink-800 transition-colors duration-200" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-pink-100 hover:border-pink-300 group z-30"
          >
            <ChevronRight className="w-6 h-6 text-pink-600 group-hover:text-pink-800 transition-colors duration-200" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-600 w-6 shadow-lg'
                    : 'bg-pink-300 hover:bg-pink-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-32 mx-auto bg-pink-100 rounded-full h-1 mt-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transition-all duration-300 ease-linear"
              style={{ 
                width: `${((currentIndex + 1) / galleryImages.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

// To integrate into your HomePage, add this import at the top:
// import GallerySection from './GallerySection';

// Then add this line in your HomePage component after TestimonialSection:
// {/* Gallery Section */}
// <GallerySection />