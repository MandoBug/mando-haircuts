
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookingHeader } from '@/components/booking/BookingHeader';
import { DateTimeSelector } from '@/components/booking/DateTimeSelector';
import { BookingForm } from '@/components/booking/BookingForm';
import { BookingConfirmation } from '@/components/booking/BookingConfirmation';
import { PaymentInfo } from '@/components/booking/PaymentInfo';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export interface BookingData {
  selectedDay: string;
  selectedDate: string;
  selectedTime: string;
  location: 'on-campus' | 'off-campus' | '';
  specificLocation: string;
  cutType: string;
  name: string;
  email: string;
  phone: string;
}

const Index = () => {
  const [step, setStep] = useState<'datetime' | 'form' | 'confirmation'>('datetime');
  const [bookingData, setBookingData] = useState<BookingData>({
    selectedDay: '',
    selectedDate: '',
    selectedTime: '',
    location: '',
    specificLocation: '',
    cutType: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleDateTimeSelect = (day: string, date: string, time: string) => {
    setBookingData(prev => ({ ...prev, selectedDay: day, selectedDate: date, selectedTime: time }));
    setStep('form');
  };

  const handleFormSubmit = (formData: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...formData }));
    setStep('confirmation');
  };

  const handleBackToDateTime = () => {
    setStep('datetime');
  };

  const handleNewBooking = () => {
    setBookingData({
      selectedDay: '',
      selectedDate: '',
      selectedTime: '',
      location: '',
      specificLocation: '',
      cutType: '',
      name: '',
      email: '',
      phone: ''
    });
    setStep('datetime');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Mando's Cuts</h1>
          <Link to="/about">
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <User className="w-4 h-4 mr-2" />
              About Mando
            </Button>
          </Link>
        </div>

        <BookingHeader />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {step === 'datetime' && (
            <>
              <DateTimeSelector onSelect={handleDateTimeSelect} />
              <PaymentInfo />
            </>
          )}
          
          {step === 'form' && (
            <BookingForm 
              bookingData={bookingData}
              onSubmit={handleFormSubmit}
              onBack={handleBackToDateTime}
            />
          )}
          
          {step === 'confirmation' && (
            <BookingConfirmation 
              bookingData={bookingData}
              onNewBooking={handleNewBooking}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
