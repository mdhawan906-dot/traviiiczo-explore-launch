import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, MapPin, Wifi, Car, Coffee, Waves, 
  Dumbbell, Sparkles, PawPrint, Heart
} from 'lucide-react';
import { useState } from 'react';

interface Hotel {
  id: string;
  name: string;
  location: string;
  starRating: number;
  price: number;
  originalPrice?: number;
  image: string;
  amenities: string[];
  rating: number;
  reviews: number;
}

interface HotelCardProps {
  hotel: Hotel;
  onViewDetails: () => void;
}

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  pool: Waves,
  gym: Dumbbell,
  spa: Sparkles,
  pets: PawPrint,
};

const HotelCard = ({ hotel, onViewDetails }: HotelCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = hotel.originalPrice 
    ? Math.round(((hotel.originalPrice - hotel.price) / hotel.originalPrice) * 100)
    : 0;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart 
            className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
          />
        </button>

        {/* Discount Badge */}
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
            {discount}% OFF
          </Badge>
        )}

        {/* Star Rating Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded">
          {Array.from({ length: hotel.starRating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg leading-tight mb-1">
            {hotel.name}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {hotel.location}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{hotel.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({hotel.reviews} reviews)
          </span>
        </div>

        {/* Amenities Preview */}
        <div className="flex items-center gap-2 flex-wrap">
          {hotel.amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
            return IconComponent ? (
              <div
                key={amenity}
                className="flex items-center justify-center w-8 h-8 bg-accent rounded-full"
                title={amenity}
              >
                <IconComponent className="h-4 w-4 text-accent-foreground" />
              </div>
            ) : null;
          })}
          {hotel.amenities.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{hotel.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                ₹{hotel.price.toLocaleString()}
              </span>
              {hotel.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{hotel.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">per night</div>
          </div>
          
          <Button 
            onClick={onViewDetails}
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;