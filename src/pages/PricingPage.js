import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Heart, 
  Shield, 
  Brain,
  Bone,
  Baby,
  Users,
  Activity,
  Stethoscope
} from 'lucide-react';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const medicalProcedures = [
    {
      id: 'cardiology',
      title: 'Heart Surgery Cost in India',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      minCost: 2700,
      maxCost: 3600,
      type: 'range'
    },
    {
      id: 'oncology',
      title: 'Cancer Treatment Cost in India',
      subtitle: 'Most Asked Procedures',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      type: 'procedures',
      procedures: [
        { name: 'Gallbladder Cancer', cost: 9000 },
        { name: 'Gastro Intestinal Cancer', cost: 8000 },
        { name: 'Esophageal Cancer', cost: 7000 },
        { name: 'Colorectal Cancer', cost: 7000 },
        { name: 'Radiation Therapy', cost: 4000 },
        { name: 'Head and Neck Cancer', cost: 3000 },
        { name: 'Prostate Cancer', cost: 3000 },
        { name: 'Breast Cancer', cost: 3000 },
        { name: 'Cervical Cancer', cost: 3000 },
        { name: 'HIPEC', cost: 2500 },
        { name: 'Blood Cancer', cost: 1200 },
        { name: 'Chemotherapy', cost: 700 }
      ]
    },
    {
      id: 'neurosurgery',
      title: 'Neurosurgery Cost in India',
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      minCost: 3000,
      maxCost: 4000,
      type: 'range'
    },
    {
      id: 'orthopedic',
      title: 'Orthopedic Surgery Cost in India',
      subtitle: 'Most Asked Procedures',
      icon: Bone,
      color: 'from-green-500 to-green-600',
      type: 'procedures',
      procedures: [
        { name: 'Total HIP replacement - THR', cost: 10000 },
        { name: 'Limb lengthening', cost: 6000 },
        { name: 'Shoulder Arthroscopy', cost: 4500 },
        { name: 'Knock knee surgery', cost: 3500 },
        { name: 'Knee Replacement', cost: 3000 },
        { name: 'Shoulder replacement', cost: 2500 },
        { name: 'Shoulder rotator cuff', cost: 2000 },
        { name: 'Elbow Surgery', cost: 2000 },
        { name: 'Osteotomy', cost: 1500 },
        { name: 'Elbow Arthroscopy', cost: 1000 },
        { name: 'ACL - anterior cruciate ligament', cost: 900 }
      ]
    },
    {
      id: 'ivf',
      title: 'IVF Cost in India',
      icon: Baby,
      color: 'from-pink-500 to-pink-600',
      minCost: 2100,
      maxCost: 2800,
      type: 'range'
    },
    {
      id: 'gynecological',
      title: 'Gynecological surgery Cost in India',
      icon: Users,
      color: 'from-rose-500 to-rose-600',
      type: 'procedures',
      procedures: [
        { name: 'Laparoscopic Hysterectomy', minCost: 'Rs.142080', maxCost: 'Rs.189440' },
        { name: 'Endometriosis Surgery', minCost: 'Rs.155400', maxCost: 'Rs.207200' },
        { name: 'Uterine Fibroid Embolization (UFE)', minCost: 'Rs.133200', maxCost: 'Rs.177600' },
        { name: 'Fibroid Removal Surgery', minCost: 'Rs.88800', maxCost: 'Rs.118400' },
        { name: 'Fibroid Removal Myomectomy', minCost: 'Rs.97680', maxCost: 'Rs.130240' },
        { name: 'Endometrial Ablation', minCost: 'Rs.88800', maxCost: 'Rs.118400' },
        { name: 'Ovarian Cyst Removal', minCost: 'Rs.111000', maxCost: 'Rs.148000' },
        { name: 'Cystoscopy', minCost: 'Rs.22200', maxCost: 'Rs.29600' },
        { name: 'Blastocyst Culture and Transfer', minCost: 'Rs.12432', maxCost: 'Rs.16576' },
        { name: 'Colposcopy', minCost: 'Rs.3552', maxCost: 'Rs.4736' },
        { name: 'IUD Insertion - Intrauterine Device Insertion', minCost: 'Rs.355', maxCost: 'Rs.474' }
      ]
    },
    {
      id: 'bone-marrow',
      title: 'Bone Marrow Transplant Cost in India',
      icon: Activity,
      color: 'from-orange-500 to-orange-600',
      minCost: 9000,
      maxCost: 12000,
      type: 'range'
    }
  ];

  const ProcedureCard = ({ procedure, index }) => {
    const IconComponent = procedure.icon;
    
    return (
      <div
        className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 overflow-hidden h-[520px] flex flex-col`}
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${procedure.color} p-6 text-white flex-shrink-0`}>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{procedure.title}</h3>
              {procedure.subtitle && (
                <p className="text-white/90 text-sm mt-1">{procedure.subtitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col overflow-hidden">
          {procedure.type === 'range' ? (
            <div className="text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Minimum Cost</p>
                    <p className="text-2xl font-bold text-gray-900">USD ${procedure.minCost}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Maximum Cost</p>
                    <p className="text-2xl font-bold text-gray-900">USD ${procedure.maxCost}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className={`bg-gradient-to-r ${procedure.color} h-2 rounded-full`} style={{ width: '100%' }}></div>
                </div>
              </div>
              
              {/* Filler content for range cards */}
              <div className="space-y-3 mt-4 flex-1">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">Comprehensive Treatment Package</p>
                  <p className="text-xs text-gray-600 mt-1">Includes pre-op consultation, surgery, post-op care, and follow-up</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">Hospital Stay & Medications</p>
                  <p className="text-xs text-gray-600 mt-1">Complete hospitalization with all required medications included</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">Expert Specialist Care</p>
                  <p className="text-xs text-gray-600 mt-1">Treatment by internationally trained specialists</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">24/7 Medical Support</p>
                  <p className="text-xs text-gray-600 mt-1">Round-the-clock medical assistance during treatment</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3 flex-1 overflow-y-auto">
              {procedure.procedures.map((proc, procIndex) => (
                <div key={procIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-sm text-gray-800 font-medium flex-1 pr-2">{proc.name}</span>
                  <div className="text-right flex-shrink-0">
                    {proc.cost ? (
                      <span className="text-sm font-bold text-gray-900">Start from ${proc.cost} USD</span>
                    ) : (
                      <div className="text-xs text-gray-700">
                        <div>{proc.minCost} - {proc.maxCost}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Show only first 4 cards initially
  const displayedProcedures = showAll ? medicalProcedures : medicalProcedures.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Hero Section */}
      <section 
        className={`relative py-20 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.2)), url('https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&auto=format&fit=crop&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 via-pink-800/30 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Medical Pricing in India
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-pink-100 drop-shadow-md leading-relaxed">
                Transparent and Affordable Healthcare Costs
              </p>
              <p className="text-base sm:text-lg text-pink-200 drop-shadow-sm">
                Comprehensive pricing information for various medical procedures and treatments available in India's top hospitals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Medical Procedure Costs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed pricing for various medical specialties and procedures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedProcedures.map((procedure, index) => (
              <ProcedureCard
                key={procedure.id}
                procedure={procedure}
                index={index}
              />
            ))}
          </div>

          {/* Load More Button */}
          {!showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Load More Procedures
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;