
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, Clock, MapPin, Scissors, User, Mail, Phone, AlertTriangle } from 'lucide-react';
import { BookingData } from '@/pages/Index';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

interface BookingConfirmationProps {
  bookingData: BookingData;
  onNewBooking: () => void;
}

export const BookingConfirmation = ({ bookingData, onNewBooking }: BookingConfirmationProps) => {
  const { toast } = useToast();

  useEffect(() => {
    // Simulate sending notifications
    const sendNotifications = async () => {
      try {
        // In a real app, you would call your backend API here
        console.log('Sending notifications for booking:', bookingData);
        console.log('Email will be sent to: mandoblends1@gmail.com');
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Booking Confirmed!",
          description: "Confirmation sent to you and Mando at mandoblends1@gmail.com",
        });
      } catch (error) {
        toast({
          title: "Booking Saved",
          description: "Your appointment is confirmed. If you need to cancel, please contact Mando directly.",
          variant: "destructive"
        });
      }
    };

    sendNotifications();
  }, [bookingData, toast]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl text-white">
            Booking Confirmed!
          </CardTitle>
          <p className="text-gray-300">
            Your appointment has been successfully scheduled. Confirmation details have been sent to you and Mando.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Appointment Details */}
          <div className="bg-green-900/30 p-6 rounded-lg border border-green-400/20 space-y-4">
            <h3 className="font-semibold text-lg text-white mb-4">Appointment Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">{formatDate(bookingData.selectedDate)}</div>
                  <div className="text-sm text-gray-400">Date</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">{bookingData.selectedTime}</div>
                  <div className="text-sm text-gray-400">Time</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white capitalize">{bookingData.location.replace('-', ' ')}</div>
                  <div className="text-sm text-gray-400">{bookingData.specificLocation}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">Haircut Service</div>
                  <div className="text-sm text-gray-400">{bookingData.cutType}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-white">Your Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">{bookingData.name}</div>
                  <div className="text-sm text-gray-400">Name</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">{bookingData.email}</div>
                  <div className="text-sm text-gray-400">Email</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">{bookingData.phone}</div>
                  <div className="text-sm text-gray-400">Phone</div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-900/30 border border-yellow-400/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <h4 className="font-medium text-yellow-300">Important Reminders</h4>
            </div>
            <ul className="text-sm text-yellow-200 space-y-1">
              <li>• Please arrive 5 minutes early to your appointment</li>
              <li>• Bring any reference photos if you have specific style preferences</li>
              <li>• Remember: pay what you can - no stress about the price!</li>
              <li>• Need to cancel? Contact Mando directly as soon as possible</li>
            </ul>
          </div>

          <Button 
            onClick={onNewBooking}
            className="w-full h-12 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
