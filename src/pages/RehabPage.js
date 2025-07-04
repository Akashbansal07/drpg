import { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Activity, 
  Target, 
  Users, 
  Clock, 
  Calendar,
  CheckCircle,
  Brain,
  Dumbbell,
  Heart,
  Laptop,
  User,
  Shield,
  Award,
  ThumbsUp
} from 'lucide-react';

const RehabPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const rehabServices = [
    {
      id: 1,
      title: "Physiotherapy",
      description: "Learn the benefits of hands-on manual therapy techniques mixed with sophisticated therapeutic modalities. Our physiotherapy services treat a variety of musculoskeletal issues, including sports injuries, post-operative rehabilitation, back and neck discomfort, joint stiffness, and more. Our goal with tailored treatment regimens is to restore function, reduce discomfort, and avoid future injuries.",
      icon: Activity,
      features: ["Manual Therapy", "Therapeutic Modalities", "Sports Injury Treatment", "Post-operative Rehabilitation", "Back & Neck Pain Relief", "Joint Stiffness Treatment"]
    },
    {
      id: 2,
      title: "Orthopaedic Rehabilitation",
      description: "Whether you're recovering from surgery, sickness, or accident, our rehabilitation programs are tailored to help you restore strength, flexibility, and independence. We specialize in pre- and post-surgery rehabilitation, employing cutting-edge procedures to improve results and accelerate recovery. From hip replacements to spinal procedures, our comprehensive approach ensures that you get the help you need at every stage of the recovery process.",
      icon: Target,
      features: ["Pre & Post-surgery Rehabilitation", "Hip Replacement Recovery", "Spinal Procedures", "Strength Restoration", "Flexibility Training", "Independence Building"]
    },
    {
      id: 3,
      title: "Sports Injury Rehabilitation",
      description: "Our sports injury rehabilitation programs are designed for athletes of all levels. We use manual treatment, advanced exercise techniques, and sport-specific training to speed up recovery and improve performance. Whether you are sidelined due to a sprain, strain, or overuse injury, our team is here to help you return to the game stronger than ever.",
      icon: Dumbbell,
      features: ["Manual Treatment", "Advanced Exercise Techniques", "Sport-specific Training", "Sprain & Strain Recovery", "Overuse Injury Treatment", "Performance Enhancement"]
    },
    {
      id: 4,
      title: "Neuro Rehabilitation",
      description: "We have highly trained therapists who are experts in helping patients recover from neurological conditions or injuries. From stroke recovery to managing Parkinson's disease symptoms, we make our programs to meet each individual's unique needs and goals. We aim to provide personalized care that maximizes outcomes and improves the quality of life for our patients. So whether you're looking to improve your mobility, speech, or cognitive function, rest assured that you'll be in good hands with our team of professionals. Let us help you on your journey to better health and independence!",
      icon: Brain,
      features: ["Stroke Recovery", "Parkinson's Disease Management", "Mobility Improvement", "Speech Therapy", "Cognitive Function Enhancement", "Personalized Care"]
    },
    {
      id: 5,
      title: "Pulmonary Rehabilitation",
      description: "We offer the absolute best pulmonary rehabilitation services around. Our experienced team caters to each individual's specific needs and goals, using a combination of exercise, education, and support to improve lung function and overall quality of life. Whether you're recovering from a respiratory illness or managing a chronic condition, our pulmonary rehab program is designed to help you regain strength, increase endurance, and enhance your overall well-being.",
      icon: Heart,
      features: ["Lung Function Improvement", "Exercise Training", "Patient Education", "Respiratory Support", "Endurance Building", "Quality of Life Enhancement"]
    },
    {
      id: 6,
      title: "Virtual Rehabilitation Sessions",
      description: "Our sessions are designed to help you recover from injuries, improve mobility, and regain strength all from the comfort of your own home. With expert therapists guiding you every step of the way, you can rest assured that you'll receive personalized care and attention according to your specific needs. Not only will you see results, but you'll also enjoy the convenience of being able to attend sessions at a time that works best for you. So why wait? Give our virtual rehab sessions a try and start your journey to recovery today!",
      icon: Laptop,
      features: ["Home-based Recovery", "Expert Guidance", "Personalized Care", "Flexible Scheduling", "Injury Recovery", "Mobility Improvement"]
    },
    {
      id: 7,
      title: "Chronic Pain Management",
      description: "Chronic pain can have a big influence on your everyday life, but it is manageable with the appropriate approach. Our comprehensive chronic pain treatment programs include a combination of physical therapy, therapeutic modalities, mindfulness techniques, and lifestyle changes to help you reduce pain, increase functionality, and improve your overall health.",
      icon: Shield,
      features: ["Physical Therapy", "Therapeutic Modalities", "Mindfulness Techniques", "Lifestyle Changes", "Pain Reduction", "Functionality Improvement"]
    },
    {
      id: 8,
      title: "Preventive Treatment",
      description: "At Dr Purva Global we strongly believe in the value of preventive treatment in maintaining good health and avoiding future accidents. Our staff provides information, ergonomic assessments, injury prevention measures, and individualized exercise regimens to help you stay active and maintain good health.",
      icon: Users,
      features: ["Ergonomic Assessments", "Injury Prevention", "Exercise Regimens", "Health Education", "Wellness Programs", "Personalized Guidance"]
    }
  ];

  const whyChooseUs = [
    {
      icon: User,
      title: "Expertise",
      description: "Our team of highly skilled physiotherapists and rehabilitation specialists is committed to assisting you in achieving your objectives."
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "We understand that every patient is unique, therefore we tailor our treatment regimens to your exact needs and goals."
    },
    {
      icon: Award,
      title: "State-of-the-Art Facilities",
      description: "Our clinic is outfitted with cutting-edge technology and equipment to ensure that you receive the best possible care."
    },
    {
      icon: ThumbsUp,
      title: "Compassionate Care",
      description: "We prioritize compassion, empathy, and open communication to make you feel supported and empowered throughout your rehabilitation process."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section with Background Image */}
      <section 
        className={`relative py-20 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.2)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 via-pink-800/30 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                <HeartHandshake className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Rehabilitation
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-pink-100 drop-shadow-md leading-relaxed">
                Welcome to Dr Purva Global, where our primary goal is to help you regain mobility, reduce pain, and improve your overall quality of life through tailored physiotherapy and rehabilitation programs.
              </p>
              <p className="text-base sm:text-lg text-pink-200 drop-shadow-sm">
                Our staff consists of professional physiotherapists and rehabilitation specialists that are committed to assisting you on your road to recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Range of Services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rehabServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-pink-100 ${
                    activeService === index ? 'ring-2 ring-pink-500 bg-gradient-to-br from-pink-50 to-white' : ''
                  }`}
                  onClick={() => setActiveService(index)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-pink-100"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90">
              Dr Purva Global is committed to providing you with the best possible care and support as you work toward increased mobility and well-being. 
              Whether you're healing from an injury, getting ready for surgery, or want to improve your sports performance, we're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RehabPage;