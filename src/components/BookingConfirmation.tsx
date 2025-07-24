import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, Calendar, MapPin, Users, Download, 
  Mail, Phone, Share2, Star
} from 'lucide-react';

interface Room {
  name: string;
  price: number;
}

interface Hotel {
  name: string;
  location: string;
  starRating: number;
}

interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface BookingDetails {
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
}

interface BookingConfirmationProps {
  hotel: Hotel;
  room: Room;
  guestInfo: GuestInfo;
  bookingDetails: BookingDetails;
  total: number;
  isOpen: boolean;
  onClose: () => void;
}

const BookingConfirmation = ({ 
  hotel, 
  room, 
  guestInfo, 
  bookingDetails, 
  total, 
  isOpen, 
  onClose 
}: BookingConfirmationProps) => {
  const bookingReference = `TRV${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-green-700">
            Booking Confirmed!
          </DialogTitle>
          <p className="text-muted-foreground">
            Your reservation has been successfully confirmed
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Booking Reference */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-lg mb-2">Booking Reference</h3>
              <div className="text-2xl font-bold text-primary tracking-wider">
                {bookingReference}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Please save this reference number for your records
              </p>
            </CardContent>
          </Card>

          {/* Hotel & Stay Details */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">{hotel.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{hotel.location}</span>
                  <div className="flex ml-2">
                    {Array.from({ length: hotel.starRating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Room Type</div>
                    <div className="text-muted-foreground">{room.name}</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Guest Name</div>
                    <div className="text-muted-foreground">
                      {guestInfo.firstName} {guestInfo.lastName}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Stay Dates</div>
                      <div className="text-muted-foreground">
                        {bookingDetails.checkIn} - {bookingDetails.checkOut}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {bookingDetails.nights} nights
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Guests</div>
                      <div className="text-muted-foreground">{bookingDetails.guests} guests</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Amount Paid</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-3">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{guestInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{guestInfo.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-blue-800">What's Next?</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• A confirmation email has been sent to {guestInfo.email}</li>
                <li>• You can check-in anytime after 2:00 PM on your arrival date</li>
                <li>• Check-out is before 11:00 AM on your departure date</li>
                <li>• Contact the hotel directly for any special requests</li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
            <Button variant="outline" className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="h-4 w-4 mr-2" />
              Share Booking
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={onClose} className="flex-1 bg-primary hover:bg-primary-hover">
              Continue Exploring
            </Button>
            <Button variant="outline" className="flex-1">
              Book Another Stay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingConfirmation;