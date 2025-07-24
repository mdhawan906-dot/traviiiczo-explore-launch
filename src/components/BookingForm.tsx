import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import BookingConfirmation from './BookingConfirmation';
import { ArrowLeft, CreditCard, Shield, Calendar, Users } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  price: number;
  maxGuests: number;
  bedType: string;
  available: number;
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  starRating: number;
}

interface BookingFormProps {
  hotel: Hotel;
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const BookingForm = ({ hotel, room, isOpen, onClose, onBack }: BookingFormProps) => {
  const [step, setStep] = useState<'guest-info' | 'payment' | 'confirmation'>('guest-info');
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: '',
  });

  const [bookingDetails] = useState({
    checkIn: '2024-07-25',
    checkOut: '2024-07-27',
    nights: 2,
    guests: 2,
  });

  const subtotal = room.price * bookingDetails.nights;
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + taxes;

  const handleGuestInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = () => {
    // Here you would integrate with payment processor
    setStep('confirmation');
  };

  if (step === 'confirmation') {
    return (
      <BookingConfirmation
        hotel={hotel}
        room={room}
        guestInfo={guestInfo}
        bookingDetails={bookingDetails}
        total={total}
        isOpen={isOpen}
        onClose={onClose}
      />
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DialogTitle className="text-2xl font-bold">
              Complete Your Booking
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {step === 'guest-info' && (
              <form onSubmit={handleGuestInfoSubmit} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Guest Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={guestInfo.firstName}
                          onChange={(e) => setGuestInfo(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={guestInfo.lastName}
                          onChange={(e) => setGuestInfo(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={guestInfo.email}
                        onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={guestInfo.phone}
                          onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Select 
                          value={guestInfo.country} 
                          onValueChange={(value) => setGuestInfo(prev => ({ ...prev, country: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requests or preferences?"
                        value={guestInfo.specialRequests}
                        onChange={(e) => setGuestInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                  Proceed to Payment
                </Button>
              </form>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-accent rounded-lg text-center">
                      <CreditCard className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="font-medium">Secure Payment Integration</p>
                      <p className="text-sm text-muted-foreground">
                        Razorpay/Stripe payment widget would be integrated here
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep('guest-info')} className="flex-1">
                    Back to Guest Info
                  </Button>
                  <Button onClick={handlePaymentSubmit} className="flex-1 bg-primary hover:bg-primary-hover">
                    Complete Booking
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">{hotel.name}</h4>
                  <p className="text-sm text-muted-foreground">{hotel.location}</p>
                </div>

                <Separator />

                <div>
                  <h5 className="font-medium">{room.name}</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{bookingDetails.checkIn} - {bookingDetails.checkOut}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{bookingDetails.guests} guests</span>
                    </div>
                    <div>{bookingDetails.nights} nights</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Room rate ({bookingDetails.nights} nights)</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & fees</span>
                    <span>₹{taxes.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;