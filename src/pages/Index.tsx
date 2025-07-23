import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import FeaturedPackages from '@/components/FeaturedPackages';
import WhyChooseUs from '@/components/WhyChooseUs';
import VisaInsuranceSection from '@/components/VisaInsuranceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SearchSection />
        <FeaturedPackages />
        <WhyChooseUs />
        <VisaInsuranceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;