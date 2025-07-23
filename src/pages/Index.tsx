import TopBar from '@/components/TopBar';
import MainSearchInterface from '@/components/MainSearchInterface';
import OffersSection from '@/components/OffersSection';
import FeaturedPackages from '@/components/FeaturedPackages';
import WhyChooseUs from '@/components/WhyChooseUs';
import VisaInsuranceSection from '@/components/VisaInsuranceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <MainSearchInterface />
        <OffersSection />
        <FeaturedPackages />
        <WhyChooseUs />
        <VisaInsuranceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;