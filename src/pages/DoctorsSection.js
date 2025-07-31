import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Award, 
  GraduationCap, 
  Briefcase, 
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Calendar,
  Users,
  Heart,
  Shield,
  CheckCircle
} from 'lucide-react';

// Import doctor images
import nishaImage from '../utils/nisha.png';
import sachinImage from '../utils/sachin.png';
import shwetaImage from '../utils/shweta.png';
import tarunImage from '../utils/tarun.png';
import yugalImage from '../utils/yugal.png';

const DoctorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedDoctor, setExpandedDoctor] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Nisha Kapoor",
      image: nishaImage,
      designation: "Director & HOD, Obstetrics, Gynaecology & Minimally Invasive Laparoscopic Surgery",
      hospital: "Marengo Asia Hospitals, Faridabad (NCR)",
      experience: "35+ Years",
      rating: 4.9,
      education: [
        "MBBS, MD, DGO - PGIMS, Rothak",
        "RCOG I",
        "FICOG"
      ],
      expertise: [
        "High Risk and Critical Care Obstetrics",
        "Advanced Laparoscopic and Hysteroscopic Surgery",
        "Infertility & Recurrent Pregnancy Loss",
        "Adolescent Health",
        "Menopausal Health"
      ],
      achievements: [
        "Performed more than 20,000 minimally invasive surgeries",
        "President, Faridabad Obs and Gynae Society (2012-2019)",
        "President, Haryana Association of Gynae Laparoscopists",
        "Vice President, Haryana Association of Obstetricians and Gynaecologists",
        "Mentoring postgraduate course of DNB for 15 years"
      ],
      affiliations: [
        "Indian Medical Association (IMA)",
        "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
        "Indian Menopause Society (IMS)",
        "IAGE, ISAR, HAROBGYN, ISPAT"
      ],
      pastExperience: [
        "Director & HOD, Department of Obstetrics & Minimally Invasive Gynae Surgery at Fortis Escorts Hospital, Faridabad (1998-2017)",
        "Consultant Gynaecologist at KSA for 5 years",
        "Worked in various hospitals of Delhi for 7 years"
      ]
    },
    {
      id: 2,
      name: "Dr. Sachin Goel",
      image: sachinImage,
      designation: "HOD & Senior Consultant - Neuro & Spine Surgery",
      hospital: "Marengo Asia Hospitals, Faridabad (NCR)",
      experience: "15+ Years",
      rating: 4.8,
      education: [
        "MCh (Neurosurgery) - PGIMER, Chandigarh (2010)",
        "MS (General Surgery) - Banaras Hindu University, Varanasi (2006)",
        "MBBS - Banaras Hindu University, Varanasi (2003)"
      ],
      expertise: [
        "Complex spinal reconstruction including Kyphoscoliosis correction surgeries",
        "Minimal access brain & spine surgeries including endoscopic & stereotactic surgeries",
        "Pediatric Neurosurgery",
        "Functional neurosurgeries (DBS for Parkinson diseases)",
        "Image guided Functional & Stereotactic Neurosurgery"
      ],
      achievements: [
        "Specializes in Minimally Invasive Surgery (MIS) technique",
        "Attended many national and international workshops on MIS",
        "Currently associated with Marengo Asia Hospitals as HOD and Senior Consultant"
      ],
      pastExperience: [
        "HOD, Neuro Spine Surgery at Metro Group of Hospitals",
        "Senior Consultant Neuro Spine Surgery at QRG Central Hospital, Faridabad",
        "Senior Consultant Neuro Spine Surgery at Sarvodaya Group of Hospitals, Faridabad",
        "Consultant Neuro Spine Surgery at Fortis Hospital Noida (U.P.)",
        "Mch Neuro Surgery Registrar at PGIMER Chandigarh",
        "Senior Resident Neuro Surgery at Safdarjung Hospital, New Delhi",
        "Senior Resident Neuro Spine Surgery at Guru Teg Bahadur Hospital, New Delhi"
      ]
    },
    {
      id: 3,
      name: "Dr. Shweta Mendiratta",
      image: shwetaImage,
      designation: "Associate Clinical Director and Head Unit 2 - Obstetrics & Gynaecology",
      hospital: "Marengo Asia Hospitals, Faridabad (NCR)",
      experience: "15+ Years",
      rating: 4.7,
      education: [
        "M.B.B.S",
        "MS (OB-GYN) - Institute of Medical Sciences (IMS), Banaras Hindu University (BHU), Varanasi",
        "DNB (OB-GYN) - National Board of Examinations, (NBE), New Delhi",
        "Fellowship in Advanced Laparoscopy Surgery (FALS)",
        "Credentialed IMS Menopause Practitioner (CIMP)- Indian Menopause Society (IMS)",
        "Fellow of Indian College of Obstetricians & Gynaecologists. (FICOG)"
      ],
      expertise: [
        "A highly skilled & competent Gynaecologist & Obstetrician practising for 15 years",
        "Caesarean Operations, Laparoscopic, Hysteroscopy & Conventional Surgeries",
        "Laparotomies & Hysterectomy Operations",
        "IVF & treating Infertility, Infertility Laparoscopic Procedures",
        "Diagnostic Laparoscopic, & Ultrasound",
        "High-risk pregnancies management",
        "Emergency, OPD, Ward Duties including Spontaneous & Assisted Vaginal Deliveries"
      ],
      achievements: [
        "Dedicated guide, coach, mentor for DNB students",
        "Published numerous articles in national and international journals",
        "Member of respected organizations such as FOGSI, FOGS Faridabad, ISOPARB, and the Indian Menopause Society",
        "Credentialed FICOG and certified IMS Menopause Practitioner (CIMP)"
      ],
      specializations: [
        "Prenatal and postnatal care",
        "Management of painful menstrual periods",
        "Treatment of vaginal infections",
        "High-risk pregnancies",
        "Abdominal and vaginal hysterectomy",
        "Minimally invasive gynaecological endoscopic surgeries",
        "Diagnostic and operative hysteroscopies",
        "Infertility and adolescent health"
      ]
    },
    {
      id: 4,
      name: "Dr. Tarun Sharma",
      image: tarunImage,
      designation: "Director, Neuro & Spine Surgery",
      hospital: "Marengo Asia Hospitals, Faridabad (NCR)",
      experience: "20+ Years",
      rating: 4.9,
      education: [
        "Fellowship in clinical Neuro-oncology at university of Toronto (Canada)",
        "Visiting fellowship in pediatric neurosurgery at Hospital for sick-kids Toronto (Canada)",
        "MCh (Neurosurgery) - PGIMER, Chandigarh (2008)",
        "MS (General Surgery) - S.S Medical College Rewa APS University (2004)",
        "MBBS - G.R Medical College, Jivaji University (1999)"
      ],
      expertise: [
        "Complex spinal reconstruction including Transthoracic & transabdominal spine surgeries",
        "Kyphoscoliosis correction surgeries",
        "Minimal access brain & spine surgeries including endoscopic & stereotactic surgeries",
        "Skull base tumor surgeries",
        "Pediatric Neurosurgery",
        "Awake craniotomy for brain tumors",
        "Endoscopic neurosurgery & minimally invasive spine surgery techniques"
      ],
      achievements: [
        "First neurosurgeon in Faridabad region to implement the technique of Awake Craniotomy for resection of brain tumors",
        "Has many publications to his credit and chapters in books",
        "Rich experience of neurosurgery & performed more than fifteen thousand brain & spine surgeries",
        "Worked as assistant professor neurosurgery at Indra Gandhi Medical College Shimla (H.P.)",
        "Worked as Consultant Neurosurgeon at various reputed hospitals in north India"
      ],
      pastExperience: [
        "Director, Neuro Spine Surgery at Metro Hospital, Faridabad",
        "HOD, Neuro Spine Surgery at QRG Central Hospital, Faridabad",
        "HOD, Neurosurgery at Sarvodaya Group of Hospitals, Faridabad",
        "Consultant Neuro surgery at Fortis Hospital, Mohali (Punjab) & Fortis Hospital, Noida (U.P.)",
        "Assistant Professor Neuro surgery at I.G.M.C. Shimla (H.P.)",
        "Mch. Neuro Surgery Registrar at PGIMER, Chandigarh",
        "Senior Resident Neuro Surgery at R.M.L. Hospital, New Delhi",
        "Senior Resident Neuro Surgery at Indraprastha Apollo Hospital, New Delhi",
        "M.S. General Surgery Resident at S.S. Medical College, Rewa (M.P.)"
      ]
    },
    {
      id: 5,
      name: "Dr. Yugal Karkhur",
      image: yugalImage,
      designation: "Senior Consultant - Orthopaedics & Joint Replacement",
      hospital: "Narayana Health",
      experience: "12+ Years",
      rating: 4.8,
      education: [
        "MBBS, MS (Ortho), MAMC, DNB (Ortho), MNAMS",
        "Fellowship in Joint Replacement & Adult Hip Reconstruction Surgery",
        "Fellowship in Sports Injury",
        "Fellowship in Hip and Knee Replacement"
      ],
      expertise: [
        "Primary & Revision Hip & Knee Replacement",
        "Knee & Shoulder Arthroscopy",
        "Complex Trauma Surgery",
        "Arthritis of Small & Large Joints",
        "Spine Related Problems",
        "Sports related injuries of Knee & Shoulder",
        "Fracture fixation & Infected Non Union"
      ],
      achievements: [
        "Extensive experience of 12 years in Orthopaedics & Joint Replacement Surgery",
        "Completed Clinical fellowship at Max Smart Superspeciality Hospital, Saket, New Delhi",
        "Associate consultant for 2 years",
        "More than 17 research papers in various international and national journals",
        "Various ongoing researches in pipeline"
      ],
      languages: ["Hindi", "English"],
      pastExperience: [
        "Max Smart Superspeciality Hospital, Saket, New Delhi - Clinical Fellowship and Associate Consultant",
        "Delhi Government Hospitals - MS from Maulana Azad Medical College",
        "Nayak Hospital and Shushma Trauma Centre - Senior registrar for 3 years",
        "Missouri Orthopedic Institute, Missouri, USA - Training in arthroscopic and shoulder surgeries"
      ]
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

  const displayedDoctors = showMore ? doctors : doctors.slice(0, 3);

  const toggleExpanded = (doctorId) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-300 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-400 rounded-full translate-x-30 translate-y-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-200 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mr-3 sm:mr-4">
          <User className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent">
          Meet Our Expert Doctors
        </h2>
      </div>
      <p className="text-pink-600 font-medium mt-1 text-sm sm:text-base text-center">
        World-Class Medical Professionals
      </p>
    </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Our team of highly qualified and experienced doctors are dedicated to providing you with 
            exceptional medical care using the latest technologies and treatment methods.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {displayedDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`group relative transform transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-20 rotate-3'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.02] h-full flex flex-col">
                
                {/* Doctor Image and Basic Info - Fixed Height */}
                <div className="relative flex-shrink-0">
                  <div className="h-40 sm:h-44 overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-lg transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=center&face`;
                      }}
                    />
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-0.5 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                      <span className="text-xs font-bold text-gray-800">{doctor.rating}</span>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3 bg-pink-500/90 backdrop-blur-sm rounded-full px-2.5 py-0.5 shadow-lg">
                    <span className="text-xs font-semibold text-white">{doctor.experience}</span>
                  </div>
                </div>

                {/* Doctor Info - Flex Grow for Equal Heights */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Header Section - Fixed */}
                  <div className="text-center mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1.5 group-hover:text-pink-600 transition-colors duration-300 min-h-[28px] flex items-center justify-center">
                      {doctor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-pink-600 font-medium mb-1.5 leading-snug min-h-[40px] flex items-center justify-center text-center">
                      {doctor.designation}
                    </p>
                    <div className="flex items-center justify-center text-gray-600 min-h-[20px]">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-center">{doctor.hospital}</span>
                    </div>
                  </div>

                  {/* Quick Info - Fixed Height */}
                  <div className="grid grid-cols-2 gap-3 mb-3 pt-3 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-0.5">
                        <Calendar className="w-3.5 h-3.5 text-pink-500 mr-1" />
                        <span className="text-xs sm:text-sm font-bold text-gray-800">{doctor.experience}</span>
                      </div>
                      <p className="text-xs text-gray-600">Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-0.5">
                        <Award className="w-3.5 h-3.5 text-pink-500 mr-1" />
                        <span className="text-xs sm:text-sm font-bold text-gray-800">Expert</span>
                      </div>
                      <p className="text-xs text-gray-600">Specialist</p>
                    </div>
                  </div>

                  {/* Expertise Preview - Fixed Height */}
                  <div className="mb-3 flex-grow">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Key Expertise:</h4>
                    <div className="flex flex-wrap gap-1 min-h-[40px]">
                      {doctor.expertise.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-pink-100 text-pink-700 text-xs rounded-full font-medium h-fit"
                        >
                          {skill.length > 25 ? skill.substring(0, 25) + '...' : skill}
                        </span>
                      ))}
                      {doctor.expertise.length > 2 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full font-medium h-fit">
                          +{doctor.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Details Button - Always at Bottom */}
                  <button
                    onClick={() => toggleExpanded(doctor.id)}
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mt-auto text-sm"
                  >
                    {expandedDoctor === doctor.id ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5 mr-1.5" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5 mr-1.5" />
                        View Details
                      </>
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedDoctor === doctor.id && (
                  <div className="border-t border-gray-100 p-4 sm:p-5 bg-gray-50 max-h-80 overflow-y-auto">
                    <div className="space-y-3">
                      
                      {/* Education */}
                      <div>
                        <h4 className="flex items-center text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-pink-500" />
                          Education
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-0.5">
                          {doctor.education.map((edu, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-3 h-3 mr-1.5 text-pink-500 mt-0.5 flex-shrink-0" />
                              <span className="break-words">{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expertise */}
                      <div>
                        <h4 className="flex items-center text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          <Heart className="w-3.5 h-3.5 mr-1.5 text-pink-500" />
                          Areas of Expertise
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-0.5">
                          {doctor.expertise.map((skill, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-3 h-3 mr-1.5 text-pink-500 mt-0.5 flex-shrink-0" />
                              <span className="break-words">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {doctor.achievements && (
                        <div>
                          <h4 className="flex items-center text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                            <Award className="w-3.5 h-3.5 mr-1.5 text-pink-500" />
                            Key Achievements
                          </h4>
                          <ul className="text-xs text-gray-600 space-y-0.5">
                            {doctor.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-3 h-3 mr-1.5 text-pink-500 mt-0.5 flex-shrink-0" />
                                <span className="break-words">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Past Experience */}
                      {doctor.pastExperience && (
                        <div>
                          <h4 className="flex items-center text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                            <Briefcase className="w-3.5 h-3.5 mr-1.5 text-pink-500" />
                            Past Experience
                          </h4>
                          <ul className="text-xs text-gray-600 space-y-0.5">
                            {doctor.pastExperience.slice(0, 3).map((exp, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-3 h-3 mr-1.5 text-pink-500 mt-0.5 flex-shrink-0" />
                                <span className="break-words">{exp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Languages (for Dr. Yugal) */}
                      {doctor.languages && (
                        <div>
                          <h4 className="flex items-center text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                            <Users className="w-3.5 h-3.5 mr-1.5 text-pink-500" />
                            Languages Spoken
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {doctor.languages.map((lang, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-pink-100 text-pink-700 text-xs rounded-full font-medium"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto"
          >
            {showMore ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Less Doctors
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                Show More Doctors
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;