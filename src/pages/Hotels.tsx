import Navigation from '@/components/Navigation';
import HotelSearchBar from '@/components/HotelSearchBar';
import HotelFilters from '@/components/HotelFilters';
import HotelResults from '@/components/HotelResults';
import Footer from '@/components/Footer';

const Hotels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Search */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Find Your Perfect Stay
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover amazing hotels at unbeatable prices
              </p>
            </div>
            
            <HotelSearchBar />
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-8">
              {/* Filter Sidebar */}
              <div className="hidden lg:block w-80 shrink-0">
                <HotelFilters />
              </div>
              
              {/* Hotel Results */}
              <div className="flex-1">
                <HotelResults />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hotels;