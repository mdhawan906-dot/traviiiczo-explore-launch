import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plane, Building, MapPin, Calendar, Users, Search } from 'lucide-react';

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary-light/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Find the best deals on flights, hotels, and packages
          </p>
        </div>

        <Card className="travel-card bg-background/80 backdrop-blur-sm border-2">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="flights" className="flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  Flights
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Hotels
                </TabsTrigger>
                <TabsTrigger value="packages" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Packages
                </TabsTrigger>
              </TabsList>

              {/* Flights Tab */}
              <TabsContent value="flights" className="space-y-6">
                <div className="flex gap-4 mb-4">
                  <Button variant="outline" size="sm">One-way</Button>
                  <Button variant="default" size="sm" className="btn-travel-primary">Round trip</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">From</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select airport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="del">Delhi (DEL)</SelectItem>
                        <SelectItem value="bom">Mumbai (BOM)</SelectItem>
                        <SelectItem value="blr">Bangalore (BLR)</SelectItem>
                        <SelectItem value="hyd">Hyderabad (HYD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">To</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dxb">Dubai (DXB)</SelectItem>
                        <SelectItem value="sin">Singapore (SIN)</SelectItem>
                        <SelectItem value="lhr">London (LHR)</SelectItem>
                        <SelectItem value="jfk">New York (JFK)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Departure</label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Passengers</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="1 Adult" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4+ Adults</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="btn-travel-primary w-full md:w-auto px-8">
                  <Search className="mr-2 h-4 w-4" />
                  Search Flights
                </Button>
              </TabsContent>

              {/* Hotels Tab */}
              <TabsContent value="hotels" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">City</label>
                    <Input placeholder="Enter city name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Check-in</label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Check-out</label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Guests</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="2 Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="btn-travel-primary w-full md:w-auto px-8">
                  <Search className="mr-2 h-4 w-4" />
                  Search Hotels
                </Button>
              </TabsContent>

              {/* Packages Tab */}
              <TabsContent value="packages" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Destination</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bali">Bali, Indonesia</SelectItem>
                        <SelectItem value="dubai">Dubai, UAE</SelectItem>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Budget Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="mid">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="luxury">₹1,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Duration</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Trip duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-4">3-4 Days</SelectItem>
                        <SelectItem value="5-7">5-7 Days</SelectItem>
                        <SelectItem value="8-10">8-10 Days</SelectItem>
                        <SelectItem value="10+">10+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="btn-travel-primary w-full md:w-auto px-8">
                  <Search className="mr-2 h-4 w-4" />
                  Find Packages
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchSection;