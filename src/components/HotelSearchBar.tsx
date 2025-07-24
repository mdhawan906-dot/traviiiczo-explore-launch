import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, Calendar as CalendarIcon, Users, Search, 
  Minus, Plus
} from 'lucide-react';
import { format } from 'date-fns';

const HotelSearchBar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [location, setLocation] = useState('');
  const [showGuestSelector, setShowGuestSelector] = useState(false);

  const updateGuests = (type: keyof typeof guests, operation: 'plus' | 'minus') => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'plus' 
        ? prev[type] + 1 
        : Math.max(type === 'rooms' ? 1 : 0, prev[type] - 1)
    }));
  };

  return (
    <Card className="shadow-lg border-0 bg-background/95 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Location */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">City / Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Where do you want to stay?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Check-in</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-background border shadow-lg" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Check-out</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-background border shadow-lg" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests & Rooms */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Guests & Rooms</Label>
            <Popover open={showGuestSelector} onOpenChange={setShowGuestSelector}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-start text-left font-normal"
                >
                  <Users className="mr-2 h-5 w-5" />
                  {`${guests.adults + guests.children} guests, ${guests.rooms} room${guests.rooms > 1 ? 's' : ''}`}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-background border shadow-lg" align="start">
                <div className="space-y-4 p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Adults</div>
                      <div className="text-sm text-muted-foreground">Ages 13+</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateGuests('adults', 'minus')}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{guests.adults}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateGuests('adults', 'plus')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Children</div>
                      <div className="text-sm text-muted-foreground">Ages 0-12</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateGuests('children', 'minus')}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{guests.children}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateGuests('children', 'plus')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Rooms</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateGuests('rooms', 'minus')}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{guests.rooms}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateGuests('rooms', 'plus')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <Button 
            className="h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
          >
            <Search className="mr-2 h-5 w-5" />
            Search Hotels
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelSearchBar;