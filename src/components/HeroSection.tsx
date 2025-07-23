import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Explore the World with{' '}
          <span className="text-primary-light">Traviiczo</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Domestic & International Tours | Flights | Hotels | Visas | Insurance
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-travel-primary text-lg px-8 py-4 group"
          >
            Plan Your Trip
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-travel-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
          >
            Explore Packages
          </Button>
        </div>

        {/* Quick Search Hint */}
        <div className="mt-12 animate-bounce">
          <p className="text-sm opacity-75">Scroll down to start planning</p>
          <div className="w-1 h-8 bg-white/50 mx-auto mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;