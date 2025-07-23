import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plane, Building, Home, Package, Train, Bus, Car, 
  MapPin, CreditCard, FileText, Ship, DollarSign, Shield,
  ArrowRightLeft, Calendar, Users, Search
} from 'lucide-react';

// Fixed: Replaced Passport with FileText icon - force rebuild

const MainSearchInterface = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('one-way');
  const [fareType, setFareType] = useState('regular');

  const serviceIcons = [
    { id: 'flights', icon: Plane, label: 'Flights', active: true },
    { id: 'hotels', icon: Building, label: 'Hotels' },
    { id: 'homestays', icon: Home, label: 'Homestays & Villas' },
    { id: 'packages', icon: Package, label: 'Holiday Packages' },
    { id: 'trains', icon: Train, label: 'Trains' },
    { id: 'buses', icon: Bus, label: 'Buses' },
    { id: 'cabs', icon: Car, label: 'Cabs' },
    { id: 'tours', icon: MapPin, label: 'Tours & Attractions', new: true },
    { id: 'visa', icon: FileText, label: 'Visa', new: true },
    { id: 'cruise', icon: Ship, label: 'Cruise', new: true },
    { id: 'forex', icon: DollarSign, label: 'Forex Card & Currency' },
    { id: 'insurance', icon: Shield, label: 'Travel Insurance' }
  ];

  const fareOptions = [
    { id: 'regular', label: 'Regular', description: 'Regular fares' },
    { id: 'student', label: 'Student', description: 'Extra discounts/baggage' },
    { id: 'senior', label: 'Senior Citizen', description: 'Up to ₹ 600 off' },
    { id: 'armed', label: 'Armed Forces', description: 'Up to ₹ 600 off' },
    { id: 'doctor', label: 'Doctor and Nurses', description: 'Up to ₹ 600 off' }
  ];

  return (
    <section className="relative min-h-screen bg-cover bg-center" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Search Card */}
          <Card className="bg-background/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
            {/* Service Icons */}
            <div className="p-6 pb-0">
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-6">
                {serviceIcons.map((service) => (
                  <div
                    key={service.id}
                    className={`relative flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-primary/10 ${
                      service.id === activeTab ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setActiveTab(service.id)}
                  >
                    {service.new && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        new
                      </span>
                    )}
                    <service.icon className="h-6 w-6 mb-2" />
                    <span className="text-xs text-center font-medium leading-tight">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flight Search Form */}
            <CardContent className="p-6 pt-0">
              {activeTab === 'flights' && (
                <div className="space-y-6">
                  {/* Trip Type Selection */}
                  <div className="flex items-center justify-between">
                    <RadioGroup value={tripType} onValueChange={setTripType} className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-way" id="one-way" />
                        <Label htmlFor="one-way" className="font-medium">One Way</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="round-trip" id="round-trip" />
                        <Label htmlFor="round-trip" className="font-medium">Round Trip</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multi-city" id="multi-city" />
                        <Label htmlFor="multi-city" className="font-medium">Multi City</Label>
                      </div>
                    </RadioGroup>
                    
                    <span className="text-sm text-muted-foreground">Book International and Domestic Flights</span>
                  </div>

                  {/* From/To/Date Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground">From</Label>
                      <div className="relative">
                        <Input 
                          value="Delhi"
                          className="text-lg font-semibold h-14 pl-4"
                          readOnly
                        />
                        <div className="text-xs text-muted-foreground mt-1 px-4">DEL, Delhi Airport India</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowRightLeft className="h-5 w-5 text-primary" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground">To</Label>
                      <div className="relative">
                        <Input 
                          value="Mumbai"
                          className="text-lg font-semibold h-14 pl-4"
                          readOnly
                        />
                        <div className="text-xs text-muted-foreground mt-1 px-4">BOM, Chhatrapati Shivaji International...</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-foreground">Departure</Label>
                        <div className="relative">
                          <Input 
                            value="24"
                            className="text-2xl font-bold h-14 text-center"
                            readOnly
                          />
                          <div className="text-xs text-center mt-1">Jul'25 Thursday</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-foreground">Return</Label>
                        <div className="relative">
                          <Button variant="ghost" className="w-full h-14 text-muted-foreground">
                            <div className="text-center">
                              <div className="text-xs">Tap to add a return</div>
                              <div className="text-xs">date for bigger</div>
                              <div className="text-xs">discounts</div>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground">Travellers & Class</Label>
                      <div className="relative">
                        <Input 
                          value="1"
                          className="text-2xl font-bold h-14 text-center"
                          readOnly
                        />
                        <div className="text-xs text-center mt-1">Traveller Economy/Premium Economy</div>
                      </div>
                    </div>
                  </div>

                  {/* Special Fare Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Select a special fare</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">EXTRA SAVINGS</span>
                    </div>
                    
                    <RadioGroup value={fareType} onValueChange={setFareType} className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {fareOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <div>
                            <Label htmlFor={option.id} className="font-medium cursor-pointer">{option.label}</Label>
                            <div className="text-xs text-muted-foreground">{option.description}</div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Additional Options */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="zero-cancellation" />
                      <Label htmlFor="zero-cancellation" className="text-sm">
                        Add Zero Cancellation <span className="text-muted-foreground">Get 100% refund on cancellation</span>
                      </Label>
                      <Button variant="link" size="sm" className="text-primary p-0 h-auto">View Details</Button>
                    </div>
                  </div>

                  {/* Search Button */}
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-6 rounded-xl font-semibold">
                    SEARCH
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Bottom Services */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-background/90 backdrop-blur-sm p-4 text-center hover-lift cursor-pointer">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Where2Go</h3>
            </Card>
            
            <Card className="bg-background/90 backdrop-blur-sm p-4 text-center hover-lift cursor-pointer">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Insurance</h3>
              <p className="text-xs text-muted-foreground">For International Trips</p>
            </Card>
            
            <Card className="bg-background/90 backdrop-blur-sm p-4 text-center hover-lift cursor-pointer">
              <Plane className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Explore International Flights</h3>
              <p className="text-xs text-muted-foreground">Cheapest Flights to Paris, Bali, Tokyo & more</p>
            </Card>
            
            <Card className="bg-background/90 backdrop-blur-sm p-4 text-center hover-lift cursor-pointer">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">MICE</h3>
              <p className="text-xs text-muted-foreground">Offsites, Events & Meetings</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSearchInterface;