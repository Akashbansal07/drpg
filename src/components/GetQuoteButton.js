import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquareQuote,
  X,
  CheckCircle,
  Shield,
  Award,
  ChevronDown,
  Phone
} from 'lucide-react';

// Countries data - comprehensive list
const defaultCountry = {
  name: "India",
  code: "IN",
  phoneCode: "+91",
  flag: "🇮🇳"
};

// Complete countries array with all countries
const countries = [
  { name: "Afghanistan", code: "AF", phoneCode: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", phoneCode: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", phoneCode: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", phoneCode: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", phoneCode: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "AR", phoneCode: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", phoneCode: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "AU", phoneCode: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", phoneCode: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", phoneCode: "+994", flag: "🇦🇿" },
  { name: "Bahamas", code: "BS", phoneCode: "+1-242", flag: "🇧🇸" },
  { name: "Bahrain", code: "BH", phoneCode: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", phoneCode: "+880", flag: "🇧🇩" },
  { name: "Barbados", code: "BB", phoneCode: "+1-246", flag: "🇧🇧" },
  { name: "Belarus", code: "BY", phoneCode: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", phoneCode: "+32", flag: "🇧🇪" },
  { name: "Belize", code: "BZ", phoneCode: "+501", flag: "🇧🇿" },
  { name: "Benin", code: "BJ", phoneCode: "+229", flag: "🇧🇯" },
  { name: "Bhutan", code: "BT", phoneCode: "+975", flag: "🇧🇹" },
  { name: "Bolivia", code: "BO", phoneCode: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", code: "BA", phoneCode: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "BW", phoneCode: "+267", flag: "🇧🇼" },
  { name: "Brazil", code: "BR", phoneCode: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", phoneCode: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", phoneCode: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "BF", phoneCode: "+226", flag: "🇧🇫" },
  { name: "Burundi", code: "BI", phoneCode: "+257", flag: "🇧🇮" },
  { name: "Cambodia", code: "KH", phoneCode: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", phoneCode: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "CA", phoneCode: "+1", flag: "🇨🇦" },
  { name: "Cape Verde", code: "CV", phoneCode: "+238", flag: "🇨🇻" },
  { name: "Central African Republic", code: "CF", phoneCode: "+236", flag: "🇨🇫" },
  { name: "Chad", code: "TD", phoneCode: "+235", flag: "🇹🇩" },
  { name: "Chile", code: "CL", phoneCode: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", phoneCode: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", phoneCode: "+57", flag: "🇨🇴" },
  { name: "Comoros", code: "KM", phoneCode: "+269", flag: "🇰🇲" },
  { name: "Congo", code: "CG", phoneCode: "+242", flag: "🇨🇬" },
  { name: "Costa Rica", code: "CR", phoneCode: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", phoneCode: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "CU", phoneCode: "+53", flag: "🇨🇺" },
  { name: "Cyprus", code: "CY", phoneCode: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", phoneCode: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "DK", phoneCode: "+45", flag: "🇩🇰" },
  { name: "Djibouti", code: "DJ", phoneCode: "+253", flag: "🇩🇯" },
  { name: "Dominica", code: "DM", phoneCode: "+1-767", flag: "🇩🇲" },
  { name: "Dominican Republic", code: "DO", phoneCode: "+1-809", flag: "🇩🇴" },
  { name: "Ecuador", code: "EC", phoneCode: "+593", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", phoneCode: "+20", flag: "🇪🇬" },
  { name: "El Salvador", code: "SV", phoneCode: "+503", flag: "🇸🇻" },
  { name: "Equatorial Guinea", code: "GQ", phoneCode: "+240", flag: "🇬🇶" },
  { name: "Eritrea", code: "ER", phoneCode: "+291", flag: "🇪🇷" },
  { name: "Estonia", code: "EE", phoneCode: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", phoneCode: "+251", flag: "🇪🇹" },
  { name: "Fiji", code: "FJ", phoneCode: "+679", flag: "🇫🇯" },
  { name: "Finland", code: "FI", phoneCode: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", phoneCode: "+33", flag: "🇫🇷" },
  { name: "Gabon", code: "GA", phoneCode: "+241", flag: "🇬🇦" },
  { name: "Gambia", code: "GM", phoneCode: "+220", flag: "🇬🇲" },
  { name: "Georgia", code: "GE", phoneCode: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "DE", phoneCode: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", phoneCode: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "GR", phoneCode: "+30", flag: "🇬🇷" },
  { name: "Grenada", code: "GD", phoneCode: "+1-473", flag: "🇬🇩" },
  { name: "Guatemala", code: "GT", phoneCode: "+502", flag: "🇬🇹" },
  { name: "Guinea", code: "GN", phoneCode: "+224", flag: "🇬🇳" },
  { name: "Guinea-Bissau", code: "GW", phoneCode: "+245", flag: "🇬🇼" },
  { name: "Guyana", code: "GY", phoneCode: "+592", flag: "🇬🇾" },
  { name: "Haiti", code: "HT", phoneCode: "+509", flag: "🇭🇹" },
  { name: "Honduras", code: "HN", phoneCode: "+504", flag: "🇭🇳" },
  { name: "Hungary", code: "HU", phoneCode: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", phoneCode: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", phoneCode: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", phoneCode: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", phoneCode: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", phoneCode: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", phoneCode: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", phoneCode: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", phoneCode: "+39", flag: "🇮🇹" },
  { name: "Jamaica", code: "JM", phoneCode: "+1-876", flag: "🇯🇲" },
  { name: "Japan", code: "JP", phoneCode: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", phoneCode: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "KZ", phoneCode: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", phoneCode: "+254", flag: "🇰🇪" },
  { name: "Kiribati", code: "KI", phoneCode: "+686", flag: "🇰🇮" },
  { name: "Kuwait", code: "KW", phoneCode: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "KG", phoneCode: "+996", flag: "🇰🇬" },
  { name: "Laos", code: "LA", phoneCode: "+856", flag: "🇱🇦" },
  { name: "Latvia", code: "LV", phoneCode: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", phoneCode: "+961", flag: "🇱🇧" },
  { name: "Lesotho", code: "LS", phoneCode: "+266", flag: "🇱🇸" },
  { name: "Liberia", code: "LR", phoneCode: "+231", flag: "🇱🇷" },
  { name: "Libya", code: "LY", phoneCode: "+218", flag: "🇱🇾" },
  { name: "Liechtenstein", code: "LI", phoneCode: "+423", flag: "🇱🇮" },
  { name: "Lithuania", code: "LT", phoneCode: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", phoneCode: "+352", flag: "🇱🇺" },
  { name: "Madagascar", code: "MG", phoneCode: "+261", flag: "🇲🇬" },
  { name: "Malawi", code: "MW", phoneCode: "+265", flag: "🇲🇼" },
  { name: "Malaysia", code: "MY", phoneCode: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", phoneCode: "+960", flag: "🇲🇻" },
  { name: "Mali", code: "ML", phoneCode: "+223", flag: "🇲🇱" },
  { name: "Malta", code: "MT", phoneCode: "+356", flag: "🇲🇹" },
  { name: "Marshall Islands", code: "MH", phoneCode: "+692", flag: "🇲🇭" },
  { name: "Mauritania", code: "MR", phoneCode: "+222", flag: "🇲🇷" },
  { name: "Mauritius", code: "MU", phoneCode: "+230", flag: "🇲🇺" },
  { name: "Mexico", code: "MX", phoneCode: "+52", flag: "🇲🇽" },
  { name: "Micronesia", code: "FM", phoneCode: "+691", flag: "🇫🇲" },
  { name: "Moldova", code: "MD", phoneCode: "+373", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", phoneCode: "+377", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", phoneCode: "+976", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", phoneCode: "+382", flag: "🇲🇪" },
  { name: "Morocco", code: "MA", phoneCode: "+212", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", phoneCode: "+258", flag: "🇲🇿" },
  { name: "Myanmar", code: "MM", phoneCode: "+95", flag: "🇲🇲" },
  { name: "Namibia", code: "NA", phoneCode: "+264", flag: "🇳🇦" },
  { name: "Nauru", code: "NR", phoneCode: "+674", flag: "🇳🇷" },
  { name: "Nepal", code: "NP", phoneCode: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", phoneCode: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", phoneCode: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", code: "NI", phoneCode: "+505", flag: "🇳🇮" },
  { name: "Niger", code: "NE", phoneCode: "+227", flag: "🇳🇪" },
  { name: "Nigeria", code: "NG", phoneCode: "+234", flag: "🇳🇬" },
  { name: "North Korea", code: "KP", phoneCode: "+850", flag: "🇰🇵" },
  { name: "North Macedonia", code: "MK", phoneCode: "+389", flag: "🇲🇰" },
  { name: "Norway", code: "NO", phoneCode: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "OM", phoneCode: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", phoneCode: "+92", flag: "🇵🇰" },
  { name: "Palau", code: "PW", phoneCode: "+680", flag: "🇵🇼" },
  { name: "Palestine", code: "PS", phoneCode: "+970", flag: "🇵🇸" },
  { name: "Panama", code: "PA", phoneCode: "+507", flag: "🇵🇦" },
  { name: "Papua New Guinea", code: "PG", phoneCode: "+675", flag: "🇵🇬" },
  { name: "Paraguay", code: "PY", phoneCode: "+595", flag: "🇵🇾" },
  { name: "Peru", code: "PE", phoneCode: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", phoneCode: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", phoneCode: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", phoneCode: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", phoneCode: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "RO", phoneCode: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", phoneCode: "+7", flag: "🇷🇺" },
  { name: "Rwanda", code: "RW", phoneCode: "+250", flag: "🇷🇼" },
  { name: "Saint Kitts and Nevis", code: "KN", phoneCode: "+1-869", flag: "🇰🇳" },
  { name: "Saint Lucia", code: "LC", phoneCode: "+1-758", flag: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", code: "VC", phoneCode: "+1-784", flag: "🇻🇨" },
  { name: "Samoa", code: "WS", phoneCode: "+685", flag: "🇼🇸" },
  { name: "San Marino", code: "SM", phoneCode: "+378", flag: "🇸🇲" },
  { name: "Sao Tome and Principe", code: "ST", phoneCode: "+239", flag: "🇸🇹" },
  { name: "Saudi Arabia", code: "SA", phoneCode: "+966", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", phoneCode: "+221", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", phoneCode: "+381", flag: "🇷🇸" },
  { name: "Seychelles", code: "SC", phoneCode: "+248", flag: "🇸🇨" },
  { name: "Sierra Leone", code: "SL", phoneCode: "+232", flag: "🇸🇱" },
  { name: "Singapore", code: "SG", phoneCode: "+65", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", phoneCode: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", phoneCode: "+386", flag: "🇸🇮" },
  { name: "Solomon Islands", code: "SB", phoneCode: "+677", flag: "🇸🇧" },
  { name: "Somalia", code: "SO", phoneCode: "+252", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", phoneCode: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", phoneCode: "+82", flag: "🇰🇷" },
  { name: "South Sudan", code: "SS", phoneCode: "+211", flag: "🇸🇸" },
  { name: "Spain", code: "ES", phoneCode: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", phoneCode: "+94", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", phoneCode: "+249", flag: "🇸🇩" },
  { name: "Suriname", code: "SR", phoneCode: "+597", flag: "🇸🇷" },
  { name: "Sweden", code: "SE", phoneCode: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", phoneCode: "+41", flag: "🇨🇭" },
  { name: "Syria", code: "SY", phoneCode: "+963", flag: "🇸🇾" },
  { name: "Taiwan", code: "TW", phoneCode: "+886", flag: "🇹🇼" },
  { name: "Tajikistan", code: "TJ", phoneCode: "+992", flag: "🇹🇯" },
  { name: "Tanzania", code: "TZ", phoneCode: "+255", flag: "🇹🇿" },
  { name: "Thailand", code: "TH", phoneCode: "+66", flag: "🇹🇭" },
  { name: "Timor-Leste", code: "TL", phoneCode: "+670", flag: "🇹🇱" },
  { name: "Togo", code: "TG", phoneCode: "+228", flag: "🇹🇬" },
  { name: "Tonga", code: "TO", phoneCode: "+676", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", code: "TT", phoneCode: "+1-868", flag: "🇹🇹" },
  { name: "Tunisia", code: "TN", phoneCode: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", phoneCode: "+90", flag: "🇹🇷" },
  { name: "Turkmenistan", code: "TM", phoneCode: "+993", flag: "🇹🇲" },
  { name: "Tuvalu", code: "TV", phoneCode: "+688", flag: "🇹🇻" },
  { name: "Uganda", code: "UG", phoneCode: "+256", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", phoneCode: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", phoneCode: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", phoneCode: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", phoneCode: "+1", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", phoneCode: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", phoneCode: "+998", flag: "🇺🇿" },
  { name: "Vanuatu", code: "VU", phoneCode: "+678", flag: "🇻🇺" },
  { name: "Vatican City", code: "VA", phoneCode: "+379", flag: "🇻🇦" },
  { name: "Venezuela", code: "VE", phoneCode: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", phoneCode: "+84", flag: "🇻🇳" },
  { name: "Yemen", code: "YE", phoneCode: "+967", flag: "🇾🇪" },
  { name: "Zambia", code: "ZM", phoneCode: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", phoneCode: "+263", flag: "🇿🇼" }
];

const GetQuoteButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    country: '',
    medicalProblem: ''
  });

  // Country selector state
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  
  const countryDropdownRef = useRef(null);
  const modalRef = useRef(null);

  // Show button with animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsButtonVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target) && event.target.id === 'modal-overlay') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.age || !formData.gender || !formData.email || !formData.phone || !formData.country || !formData.medicalProblem) {
      alert('Please fill in all required fields');
      return;
    }

    // Include selected country phone code with the phone number
    const formDataWithCountry = {
      ...formData,
      phone: `${selectedCountry.phoneCode} ${formData.phone}`,
      selectedCountry: selectedCountry.name,
      timestamp: new Date().toLocaleString(),
      source: 'Get Quote Button'
    };

    try {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbxPb38FiOhoVaEHTAxYuNxId9-4ykqzoANuFxrdnyAcPYk3eDTc8Q0YdYsd0CbXNzPiag/exec';
      form.target = 'hidden_iframe';
      form.style.display = 'none';

      // Create hidden iframe to catch the response
      let iframe = document.getElementById('hidden_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden_iframe';
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Add form data as hidden inputs
      Object.keys(formDataWithCountry).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formDataWithCountry[key];
        form.appendChild(input);
      });

      // Add form to page and submit
      document.body.appendChild(form);
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
      }, 1000);

      // Show success message
      alert('Thank you! We will contact you soon.');
      
      // Reset form and close modal
      setFormData({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        country: '',
        medicalProblem: ''
      });
      setIsModalOpen(false);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
    country.phoneCode.includes(countrySearchTerm)
  );

  return (
    <>
      {/* Fixed Get Quote Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`fixed right-4 sm:right-6 lg:right-8 bottom-8 sm:bottom-12 lg:bottom-16 z-[90] bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-4 sm:py-4 sm:px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center group ${
          isButtonVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <MessageSquareQuote className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
        <span className="text-sm sm:text-base whitespace-nowrap">Get Quote Now</span>
      </button>

      {/* Modal Overlay and Form */}
      {isModalOpen && (
        <div 
          id="modal-overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-slideIn"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-pink-100 p-4 sm:p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mr-2" />
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                  Get Free Consultation
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-pink-50 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500 hover:text-pink-600" />
              </button>
            </div>

            {/* Modal Body - Form */}
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {/* Name Field */}
                <div className="transform transition-all duration-300 hover:translate-x-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
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

                {/* Phone Field with Country Selector */}
                <div className="transform transition-all duration-300 hover:translate-x-1 relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    WhatsApp <span className="text-pink-500 animate-pulse">*</span>
                  </label>
                  <div className="relative flex">
                    {/* Country Selector */}
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="flex items-center px-3 py-2 text-sm rounded-l-lg border-2 border-pink-100 border-r-0 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none bg-white hover:shadow-md focus:scale-[1.02] min-w-[100px]"
                      >
                        <span className="mr-1">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium mr-1">{selectedCountry.phoneCode}</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                      </button>
                      
                      {/* Country Dropdown */}
                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 bg-white border border-pink-200 rounded-lg shadow-2xl z-[110] max-h-60 overflow-hidden mt-1">
                          {/* Search Input */}
                          <div className="p-2 border-b border-pink-100">
                            <input
                              type="text"
                              placeholder="Search countries..."
                              value={countrySearchTerm}
                              onChange={(e) => setCountrySearchTerm(e.target.value)}
                              className="w-full px-2 py-1 text-sm border border-pink-200 rounded outline-none focus:border-pink-400"
                            />
                          </div>
                          
                          {/* Country List */}
                          <div className="max-h-48 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsCountryDropdownOpen(false);
                                  setCountrySearchTerm('');
                                }}
                                className="w-full flex items-center px-3 py-2 text-sm hover:bg-pink-50 transition-colors duration-200 text-left"
                              >
                                <span className="mr-2">{country.flag}</span>
                                <span className="flex-1 text-gray-700">{country.name}</span>
                                <span className="text-gray-500 font-medium">{country.phoneCode}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-3 py-2 text-sm rounded-r-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none hover:shadow-md focus:scale-[1.02]"
                      placeholder="WhatsApp number"
                      required
                    />
                  </div>
                </div>

                {/* Country Field */}
                <div className="transform transition-all duration-300 hover:translate-x-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Medical Problem <span className="text-pink-500 animate-pulse">*</span>
                  </label>
                  <textarea
                    name="medicalProblem"
                    value={formData.medicalProblem}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 text-sm rounded-lg border-2 border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200 outline-none resize-none hover:shadow-md focus:scale-[1.02]"
                    placeholder="Describe your medical condition..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-4 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-pink-200 outline-none active:scale-95 flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Get Free Consultation
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Your information is 100% secure
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add required animations to global styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(100px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default GetQuoteButton;