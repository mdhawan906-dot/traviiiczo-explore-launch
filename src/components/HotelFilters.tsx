import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Star, Wifi, Car, Coffee, Waves, Dumbbell, 
  Sparkles, PawPrint, Filter, RotateCcw
} from 'lucide-react';

const HotelFilters = () => {
  const [budget, setBudget] = useState([1000, 25000]);
  const [starRating, setStarRating] = useState<string[]>([]);
  const [roomType, setRoomType] = useState('');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('');

  const starOptions = [
    { value: '3', label: '3 Star' },
    { value: '4', label: '4 Star' },
    { value: '5', label: '5 Star' },
  ];

  const roomTypes = [
    { value: 'standard', label: 'Standard' },
    { value: 'deluxe', label: 'Deluxe' },
    { value: 'suite', label: 'Suite' },
  ];

  const amenityOptions = [
    { value: 'wifi', label: 'WiFi', icon: Wifi },
    { value: 'parking', label: 'Parking', icon: Car },
    { value: 'breakfast', label: 'Breakfast', icon: Coffee },
    { value: 'pool', label: 'Swimming Pool', icon: Waves },
    { value: 'gym', label: 'Fitness Center', icon: Dumbbell },
    { value: 'spa', label: 'Spa & Wellness', icon: Sparkles },
    { value: 'pets', label: 'Pet-friendly', icon: PawPrint },
  ];

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Star Rating' },
    { value: 'reviews', label: 'Top Reviewed' },
  ];

  const handleStarChange = (value: string) => {
    setStarRating(prev => 
      prev.includes(value) 
        ? prev.filter(star => star !== value)
        : [...prev, value]
    );
  };

  const handleAmenityChange = (value: string) => {
    setAmenities(prev => 
      prev.includes(value)
        ? prev.filter(amenity => amenity !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setBudget([1000, 25000]);
    setStarRating([]);
    setRoomType('');
    setAmenities([]);
    setSortBy('');
  };

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-primary hover:text-primary-hover"
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>

      {/* Sort Options */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Choose sorting option" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Star Rating */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Star Rating
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {starOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`star-${option.value}`}
                checked={starRating.includes(option.value)}
                onCheckedChange={() => handleStarChange(option.value)}
              />
              <Label 
                htmlFor={`star-${option.value}`} 
                className="flex items-center gap-1 cursor-pointer"
              >
                {option.label}
                <div className="flex">
                  {Array.from({ length: parseInt(option.value) }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Room Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Room Type</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={roomType} onValueChange={setRoomType}>
            {roomTypes.map((type) => (
              <div key={type.value} className="flex items-center space-x-2">
                <RadioGroupItem value={type.value} id={type.value} />
                <Label htmlFor={type.value} className="cursor-pointer">
                  {type.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Budget Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Budget per Night</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={budget}
              onValueChange={setBudget}
              max={50000}
              min={1000}
              step={500}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{budget[0].toLocaleString()}</span>
            <span>₹{budget[1].toLocaleString()}+</span>
          </div>
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Amenities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 gap-3">
            {amenityOptions.map((amenity) => (
              <div key={amenity.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`amenity-${amenity.value}`}
                  checked={amenities.includes(amenity.value)}
                  onCheckedChange={() => handleAmenityChange(amenity.value)}
                />
                <Label 
                  htmlFor={`amenity-${amenity.value}`} 
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <amenity.icon className="h-4 w-4 text-primary" />
                  {amenity.label}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelFilters;