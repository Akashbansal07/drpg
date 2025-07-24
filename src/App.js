import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetQuoteButton from './components/GetQuoteButton';
import HomePage from './pages/HomePage';
import HospitalsPage from './pages/HospitalsPage';
import MedicalTourismPage from './pages/MedicalTourismPage';
import PatientJourneyPage from './pages/PatientJourneyPage';
import RehabPage from './pages/RehabPage';
import PricingPage from './pages/PricingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage'; // Add this import
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'hospitals':
        return <HospitalsPage />;
      case 'medical-tourism':
        return <MedicalTourismPage />;
      case 'patient-journey':
        return <PatientJourneyPage />;
      case 'rehab':
        return <RehabPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about-us':
        return <AboutUsPage />;
      case 'contact-us':
        return <ContactUsPage />; // Add this case
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-of-service':
        return <TermsOfServicePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Add the Get Quote Button component */}
      <GetQuoteButton />
    </div>
  );
}

export default App;