import { useState } from 'react';
import HotelCard from './HotelCard';
import HotelDetailsModal from './HotelDetailsModal';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import HotelFilters from './HotelFilters';
import { Filter, MapPin } from 'lucide-react';

// Sample hotel data
const sampleHotels = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    location: 'Central Mumbai',
    starRating: 5,
    price: 8999,
    originalPrice: 12999,
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
    amenities: ['wifi', 'pool', 'gym', 'spa', 'parking'],
    rating: 4.5,
    reviews: 1250,
    description: 'Experience luxury at its finest with our premium suites and world-class amenities.',
    rooms: [
      {
        id: 'r1',
        name: 'Deluxe Room',
        price: 8999,
        maxGuests: 2,
        bedType: 'King Bed',
        available: 3,
        amenities: ['wifi', 'ac', 'minibar']
      }
    ]
  },
  {
    id: '2',
    name: 'Boutique Heritage Inn',
    location: 'Colaba, Mumbai',
    starRating: 4,
    price: 4500,
    originalPrice: 6500,
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
    amenities: ['wifi', 'breakfast', 'parking'],
    rating: 4.2,
    reviews: 890,
    description: 'A charming boutique hotel with heritage architecture and modern comforts.',
    rooms: [
      {
        id: 'r2',
        name: 'Standard Room',
        price: 4500,
        maxGuests: 2,
        bedType: 'Queen Bed',
        available: 5,
        amenities: ['wifi', 'ac']
      }
    ]
  },
  {
    id: '3',
    name: 'Business Suites Hotel',
    location: 'Bandra East, Mumbai',
    starRating: 4,
    price: 6200,
    originalPrice: 8500,
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
    amenities: ['wifi', 'gym', 'breakfast', 'parking'],
    rating: 4.3,
    reviews: 567,
    description: 'Perfect for business travelers with excellent connectivity and meeting facilities.',
    rooms: [
      {
        id: 'r3',
        name: 'Business Suite',
        price: 6200,
        maxGuests: 2,
        bedType: 'King Bed',
        available: 2,
        amenities: ['wifi', 'ac', 'desk']
      }
    ]
  }
];

const HotelResults = () => {
  const [selectedHotel, setSelectedHotel] = useState<typeof sampleHotels[0] | null>(null);
  const [sortBy, setSortBy] = useState('');

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Star Rating' },
    { value: 'reviews', label: 'Top Reviewed' },
  ];

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Hotels in Mumbai
          </h2>
          <p className="text-muted-foreground">
            {sampleHotels.length} properties found
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Mobile Filter Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <HotelFilters />
            </SheetContent>
          </Sheet>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sampleHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onViewDetails={() => setSelectedHotel(hotel)}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Hotels
        </Button>
      </div>

      {/* Hotel Details Modal */}
      {selectedHotel && (
        <HotelDetailsModal
          hotel={selectedHotel}
          isOpen={!!selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </div>
  );
};

export default HotelResults;