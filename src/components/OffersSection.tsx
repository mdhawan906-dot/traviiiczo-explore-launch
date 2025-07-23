import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Percent, Clock, Gift, Star, Plane, Building, MapPin } from 'lucide-react';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      type: 'FLIGHT',
      title: 'Flat ₹3000 OFF',
      subtitle: 'on International Flights',
      code: 'INTFLY3000',
      validity: 'Valid till 31st Dec',
      color: 'bg-blue-500',
      icon: Plane,
      terms: 'Min booking ₹25,000'
    },
    {
      id: 2,
      type: 'HOTEL',
      title: 'Up to 60% OFF',
      subtitle: 'on Hotel Bookings',
      code: 'HOTELSAVE',
      validity: 'Valid till 30th Nov',
      color: 'bg-green-500',
      icon: Building,
      terms: 'On stays above ₹2,500'
    },
    {
      id: 3,
      type: 'PACKAGE',
      title: '₹10,000 Instant Discount',
      subtitle: 'on Holiday Packages',
      code: 'HOLIDAY10K',
      validity: 'Limited time offer',
      color: 'bg-purple-500',
      icon: MapPin,
      terms: 'On packages above ₹75,000'
    },
    {
      id: 4,
      type: 'COMBO',
      title: 'Book More, Save More',
      subtitle: 'Flight + Hotel Combo',
      code: 'COMBO2024',
      validity: 'Valid for 15 days',
      color: 'bg-orange-500',
      icon: Gift,
      terms: 'Extra 15% off on combos'
    }
  ];

  const bankOffers = [
    {
      bank: 'HDFC Bank',
      offer: 'Get ₹2000 OFF',
      terms: 'On credit card payments above ₹20,000',
      color: 'bg-red-100 text-red-700'
    },
    {
      bank: 'ICICI Bank',
      offer: 'Flat ₹1500 OFF',
      terms: 'On debit card payments above ₹15,000',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      bank: 'SBI Card',
      offer: 'Up to ₹3000 OFF',
      terms: 'On international bookings',
      color: 'bg-blue-100 text-blue-700'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary-light/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trending Offers */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Trending Offers</h2>
              <p className="text-muted-foreground">Save big on your next adventure</p>
            </div>
            <Button variant="outline" className="btn-travel-secondary">
              View All Offers
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <Card key={offer.id} className="travel-card group relative overflow-hidden border-2 hover:border-primary/40">
                <div className={`absolute top-0 left-0 right-0 h-1 ${offer.color}`}></div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {offer.type}
                    </Badge>
                    <div className={`p-2 rounded-lg ${offer.color} text-white`}>
                      <offer.icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.subtitle}</p>

                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Code:</span>
                      <span className="font-mono text-sm font-bold text-primary">{offer.code}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {offer.validity}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3" />
                      {offer.terms}
                    </div>
                  </div>

                  <Button className="w-full mt-4 btn-travel-primary group-hover:scale-105 transition-transform duration-200">
                    <Percent className="mr-2 h-4 w-4" />
                    Grab Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bank Offers */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Bank Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bankOffers.map((bank, index) => (
              <Card key={index} className="travel-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-foreground">{bank.bank}</h4>
                    <Badge className={bank.color}>{bank.offer}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{bank.terms}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Flash Sale Banner */}
        <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white travel-card">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="animate-pulse">⚡</div>
              <h3 className="text-2xl font-bold">FLASH SALE</h3>
              <div className="animate-pulse">⚡</div>
            </div>
            <p className="text-lg mb-4">Limited Time: Get up to 70% OFF on selected destinations!</p>
            <div className="flex items-center justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ends in: 23h 45m 12s</span>
              </div>
            </div>
            <Button className="bg-white text-red-500 hover:bg-red-50 font-bold px-8 py-3">
              Shop Flash Sale
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OffersSection;