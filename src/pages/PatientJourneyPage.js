import React, { useState, useEffect } from 'react';
import { 
  Route, 
  User, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  Stethoscope,
  Plane,
  Home,
  Hospital,
  FileText,
  Users,
  ClipboardCheck,
  Car,
  Heart,
  Award,
  ArrowRight,
  CheckCircle,
  MapPin
} from 'lucide-react';

const PatientJourneyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const journeySteps = [
    {
      step: 1,
      title: "Person needs Orthopaedic Attention",
      description: "Patient identifies need for orthopedic care and treatment",
      icon: User,
      color: "from-pink-500 to-rose-500"
    },
    {
      step: 2,
      title: "Connects with Dr Purva Global",
      description: "Patient reaches out to our healthcare coordination team",
      icon: UserCheck,
      color: "from-pink-600 to-rose-600"
    },
    {
      step: 3,
      title: "Profiles of Orthopedic Expert shared with the Patient",
      description: "Detailed doctor profiles and expertise information provided",
      icon: FileText,
      color: "from-rose-500 to-pink-600"
    },
    {
      step: 4,
      title: "Appointment gets fixed with the doctor",
      description: "Consultation appointment scheduled with selected specialist",
      icon: Calendar,
      color: "from-rose-600 to-pink-700"
    },
    {
      step: 5,
      title: "Zero email consultation fee",
      description: "Free initial consultation provided via email communication",
      icon: DollarSign,
      color: "from-pink-700 to-rose-700"
    },
    {
      step: 6,
      title: "Doctor Advices Treatment & Patient shares his slot for the procedure",
      description: "Treatment plan discussed and procedure scheduling coordinated",
      icon: Stethoscope,
      color: "from-rose-700 to-pink-800"
    },
    {
      step: 7,
      title: "We arrange all the travel requirement for the patient & attendant",
      description: "Complete travel arrangements including visa, flights, and accommodation",
      icon: Plane,
      color: "from-pink-800 to-rose-800"
    },
    {
      step: 8,
      title: "Team picks up the patient & attendant from the airport and they stay at the care home",
      description: "Airport pickup and comfortable accommodation at our care facility",
      icon: Car,
      color: "from-rose-800 to-pink-900"
    },
    {
      step: 9,
      title: "Gets briefed by the Expert before the procedure",
      description: "Pre-procedure consultation and detailed briefing with the specialist",
      icon: ClipboardCheck,
      color: "from-pink-900 to-rose-900"
    },
    {
      step: 10,
      title: "Patient gets admitted & the attendant stays with him",
      description: "Hospital admission with attendant accommodation support",
      icon: Hospital,
      color: "from-rose-900 to-pink-500"
    },
    {
      step: 11,
      title: "Post op discussion with the family",
      description: "Post-operative briefing and discussion with family members",
      icon: Users,
      color: "from-pink-500 to-rose-500"
    },
    {
      step: 12,
      title: "Discharge is discussed with the patient",
      description: "Discharge planning and post-care instructions provided",
      icon: FileText,
      color: "from-rose-500 to-pink-600"
    },
    {
      step: 13,
      title: "We take care of the Discharge formalities & the patient is transferred back to Care Home",
      description: "Complete discharge coordination and transfer to recovery facility",
      icon: Home,
      color: "from-pink-600 to-rose-600"
    },
    {
      step: 14,
      title: "Rehabilitation Expert visits everyday at the care home",
      description: "Daily rehabilitation sessions and recovery monitoring",
      icon: Heart,
      color: "from-rose-600 to-pink-700"
    },
    {
      step: 15,
      title: "Patient visits the doctor and Fit to fly certificate is issued for the patient",
      description: "Final medical clearance and travel fitness certification",
      icon: Award,
      color: "from-pink-700 to-rose-700"
    },
    {
      step: 16,
      title: "Patient flies back home",
      description: "Safe return journey with all necessary medical documentation",
      icon: Plane,
      color: "from-rose-700 to-pink-800"
    },
    {
      step: 17,
      title: "Rehabilitation is continued in the parent country",
      description: "Ongoing rehabilitation support and follow-up care coordination",
      icon: MapPin,
      color: "from-pink-800 to-rose-800"
    }
  ];

  const StepCard = ({ step, index, isActive }) => {
    const IconComponent = step.icon;
    const isLeftSide = index % 2 === 0;
    
    return (
      <div className={`relative transition-all duration-700 ${isActive ? 'scale-105' : ''}`}>
        
        {/* Step Card with Zigzag Layout */}
        <div className={`flex items-center ${isLeftSide ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
          
          {/* Card Content */}
          <div
            className={`relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-pink-100 flex-1 max-w-md ${
              isActive ? 'ring-2 ring-pink-500 bg-gradient-to-br from-pink-50 to-white' : ''
            }`}
            onClick={() => setActiveStep(index)}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Step Number Badge */}
            <div className={`absolute -top-3 ${isLeftSide ? '-right-3' : '-left-3'} w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-md`}>
              <span className="text-white text-sm font-bold">{step.step}</span>
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>

            {/* Check Mark for Active Step */}
            {isActive && (
              <div className={`absolute top-4 ${isLeftSide ? 'left-4' : 'right-4'}`}>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            )}
          </div>

          {/* Timeline Connection Circle */}
          <div className="flex-shrink-0 relative">
            {/* Vertical Line */}
            {index < journeySteps.length - 1 && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-pink-300 to-rose-300 z-0"></div>
            )}
            
            {/* Connection Circle */}
            <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full border-2 border-white shadow-md z-10 relative"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section 
        className={`relative py-20 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.3)), url('https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&auto=format&fit=crop&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-rose-500/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                <Route className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Patient Journey
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-pink-100 drop-shadow-md leading-relaxed">
                Your Complete Healthcare Journey with Dr Purva Global
              </p>
              <p className="text-base sm:text-lg text-pink-200 drop-shadow-sm">
                From initial consultation to complete recovery - we guide you through every step of your medical journey with personalized care and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Journey with Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 17-step process designed to ensure your comfort, safety, and successful treatment outcome
            </p>
          </div>

          {/* Journey Flow */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-300 rounded-full blur-xl"></div>
            </div>

            {/* Steps Grid */}
            <div className="relative z-10 space-y-8">
              {journeySteps.map((step, index) => (
                <StepCard
                  key={step.step}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientJourneyPage;