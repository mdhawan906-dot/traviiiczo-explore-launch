import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Star, MapPin } from 'lucide-react';
import baliImage from '@/assets/bali-temple.jpg';
import dubaiImage from '@/assets/dubai-skyline.jpg';
import maldivesImage from '@/assets/maldives-resort.jpg';

const FeaturedPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Bali Getaway',
      duration: '5N/6D',
      price: '₹45,999',
      originalPrice: '₹55,999',
      image: baliImage,
      rating: 4.8,
      reviews: 324,
      highlights: ['Beach Resort', 'Temple Tours', 'Cultural Experience'],
      location: 'Bali, Indonesia'
    },
    {
      id: 2,
      title: 'Dubai Explorer',
      duration: '4N/5D',
      price: '₹38,999',
      originalPrice: '₹48,999',
      image: dubaiImage,
      rating: 4.9,
      reviews: 456,
      highlights: ['Burj Khalifa', 'Desert Safari', 'Shopping Festival'],
      location: 'Dubai, UAE'
    },
    {
      id: 3,
      title: 'Maldives Paradise',
      duration: '6N/7D',
      price: '₹85,999',
      originalPrice: '₹99,999',
      image: maldivesImage,
      rating: 4.9,
      reviews: 278,
      highlights: ['Overwater Villa', 'Spa Treatments', 'Water Sports'],
      location: 'Maldives'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked travel packages designed to give you the perfect vacation experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="travel-card group overflow-hidden border-0 bg-background shadow-[var(--shadow-card)]">
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.duration}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{pkg.location}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{pkg.reviews} reviews</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                  </div>
                </div>

                <Button className="btn-travel-primary w-full group">
                  View Details
                  <MapPin className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-travel-secondary">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;