import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import BookingForm from './BookingForm';
import { 
  Star, MapPin, Wifi, Car, Coffee, Waves, Dumbbell, 
  Sparkles, PawPrint, Users, Bed, ChevronLeft, ChevronRight,
  Heart, Share2, Phone, Mail
} from 'lucide-react';

interface Room {
  id: string;
  name: string;
  price: number;
  maxGuests: number;
  bedType: string;
  available: number;
  amenities: string[];
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  starRating: number;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  amenities: string[];
  rating: number;
  reviews: number;
  description: string;
  rooms: Room[];
}

interface HotelDetailsModalProps {
  hotel: Hotel;
  isOpen: boolean;
  onClose: () => void;
}

const amenityLabels = {
  wifi: 'Free WiFi',
  parking: 'Free Parking',
  breakfast: 'Breakfast Included',
  pool: 'Swimming Pool',
  gym: 'Fitness Center',
  spa: 'Spa & Wellness',
  pets: 'Pet-friendly',
  ac: 'Air Conditioning',
  minibar: 'Minibar',
  desk: 'Work Desk',
};

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  pool: Waves,
  gym: Dumbbell,
  spa: Sparkles,
  pets: PawPrint,
};

const HotelDetailsModal = ({ hotel, isOpen, onClose }: HotelDetailsModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === hotel.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setShowBookingForm(true);
  };

  if (showBookingForm && selectedRoom) {
    return (
      <BookingForm
        hotel={hotel}
        room={selectedRoom}
        isOpen={isOpen}
        onClose={() => {
          setShowBookingForm(false);
          setSelectedRoom(null);
        }}
        onBack={() => setShowBookingForm(false)}
      />
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {hotel.name}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center">
              {Array.from({ length: hotel.starRating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {hotel.location}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{hotel.rating}</span>
              <span className="text-muted-foreground">({hotel.reviews} reviews)</span>
            </div>
          </div>
        </DialogHeader>

        {/* Image Carousel */}
        <div className="relative">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img
              src={hotel.images[currentImageIndex]}
              alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {hotel.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">About this hotel</h3>
              <p className="text-muted-foreground">{hotel.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Family-friendly</Badge>
              <Badge variant="secondary">Business travelers</Badge>
              <Badge variant="secondary">Couples</Badge>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call Hotel
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-4">
            <h3 className="text-lg font-semibold">Available Rooms</h3>
            <div className="space-y-4">
              {hotel.rooms.map((room) => (
                <Card key={room.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">{room.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Max {room.maxGuests} guests
                          </div>
                          <div className="flex items-center gap-1">
                            <Bed className="h-4 w-4" />
                            {room.bedType}
                          </div>
                        </div>
                        <div className="text-sm text-green-600">
                          {room.available} rooms available
                        </div>
                        <div className="flex gap-2">
                          {room.amenities.map((amenity) => (
                            <Badge key={amenity} variant="outline" className="text-xs">
                              {amenityLabels[amenity as keyof typeof amenityLabels] || amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          ₹{room.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">per night</div>
                        <Button 
                          onClick={() => handleRoomSelect(room)}
                          className="bg-primary hover:bg-primary-hover"
                        >
                          Select Room
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="space-y-4">
            <h3 className="text-lg font-semibold">Hotel Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hotel.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
                return (
                  <div key={amenity} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
                    <span className="font-medium">
                      {amenityLabels[amenity as keyof typeof amenityLabels] || amenity}
                    </span>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive map would be integrated here</p>
                <p className="text-sm text-muted-foreground mt-1">{hotel.location}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default HotelDetailsModal;