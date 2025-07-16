import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import FeaturesSection from './PageSection/FeaturesSection';
import IntegrationSection from './components/IntegrationSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FAQSection';
import CasesSection from './PageSection/CasesSection'

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CasesSection />
      <IntegrationSection />
      <PricingSection />
      <FaqSection />
    </div>


  );
}

export default App