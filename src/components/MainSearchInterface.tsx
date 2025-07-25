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
  ArrowRightLeft, Calendar, Users, Search, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import planeImage from '@/assets/plane-flying.jpg';

// Fixed: Replaced Passport with FileText icon - force rebuild

const MainSearchInterface = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('one-way');
  const [fareType, setFareType] = useState('regular');

  const serviceIcons = [
    { id: 'flights', icon: Plane, label: 'Flights', active: true },
    { id: 'hotels', icon: Building, label: 'Hotels', path: '/hotels' },
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
             style={{ backgroundImage: `url(${planeImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-600/30 to-blue-900/60"></div>
      
      {/* Floating clouds animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-12 bg-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-20 bg-white/8 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-4">
          {/* Main Search Card */}
          <Card className="bg-background/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20 animate-fade-in">
            {/* Service Icons */}
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                  <span className="text-sm font-medium">Choose Your Adventure</span>
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-4">
                {serviceIcons.map((service) => (
                  service.path ? (
                    <Link
                      key={service.id}
                      to={service.path}
                      className={`relative flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primary/15 hover:shadow-lg group ${
                        service.id === activeTab ? 'bg-primary/15 text-primary scale-105 shadow-md' : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {service.new && (
                        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                          new
                        </span>
                      )}
                      <service.icon className="h-6 w-6 mb-2 group-hover:animate-bounce" />
                      <span className="text-xs text-center font-medium leading-tight">{service.label}</span>
                    </Link>
                  ) : (
                    <div
                      key={service.id}
                      className={`relative flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primary/15 hover:shadow-lg group ${
                        service.id === activeTab ? 'bg-primary/15 text-primary scale-105 shadow-md' : 'text-muted-foreground hover:text-primary'
                      }`}
                      onClick={() => setActiveTab(service.id)}
                    >
                      {service.new && (
                        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                          new
                        </span>
                      )}
                      <service.icon className="h-6 w-6 mb-2 group-hover:animate-bounce" />
                      <span className="text-xs text-center font-medium leading-tight">{service.label}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Flight Search Form */}
            <CardContent className="p-4 pt-0">
              {activeTab === 'flights' && (
                <div className="space-y-4">
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
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                    <Search className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    SEARCH FLIGHTS
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Bottom Services */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-background/90 backdrop-blur-md p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 group">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-1">Where2Go</h3>
              <div className="w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
            </Card>
            
            <Card className="bg-background/90 backdrop-blur-md p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 group">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-1">Insurance</h3>
              <p className="text-xs text-muted-foreground">For International Trips</p>
              <div className="w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
            </Card>
            
            <Card className="bg-background/90 backdrop-blur-md p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 group">
              <Plane className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-1">Explore International Flights</h3>
              <p className="text-xs text-muted-foreground">Cheapest Flights to Paris, Bali, Tokyo & more</p>
              <div className="w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
            </Card>
            
            <Card className="bg-background/90 backdrop-blur-md p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 group">
              <Package className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-1">MICE</h3>
              <p className="text-xs text-muted-foreground">Offsites, Events & Meetings</p>
              <div className="w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSearchInterface;