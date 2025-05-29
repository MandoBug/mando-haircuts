
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, User, Mail, Phone, Scissors } from 'lucide-react';
import { BookingData } from '@/pages/Index';

interface BookingFormProps {
  bookingData: BookingData;
  onSubmit: (formData: Partial<BookingData>) => void;
  onBack: () => void;
}

export const BookingForm = ({ bookingData, onSubmit, onBack }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    location: bookingData.location,
    specificLocation: bookingData.specificLocation,
    cutType: bookingData.cutType,
    name: bookingData.name,
    email: bookingData.email,
    phone: bookingData.phone
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.location && formData.specificLocation && formData.cutType && 
                     formData.name && formData.email && formData.phone;

  return (
    <div className="space-y-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-4 text-green-400 hover:text-green-300 hover:bg-gray-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Date & Time
      </Button>

      <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">
            Appointment Details
          </CardTitle>
          <div className="text-sm text-gray-300 bg-green-900/30 p-3 rounded-lg border border-green-400/20">
            <strong>Selected:</strong> {bookingData.selectedDay.charAt(0).toUpperCase() + bookingData.selectedDay.slice(1)}, {bookingData.selectedDate} at {bookingData.selectedTime}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Location Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-green-400" />
                Location Preference
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={formData.location === 'on-campus' ? 'default' : 'outline'}
                  className={`h-12 ${formData.location === 'on-campus' ? 'bg-green-500 text-white' : 'border-gray-600 text-gray-300 hover:border-green-400 hover:bg-green-900/30'}`}
                  onClick={() => setFormData(prev => ({ ...prev, location: 'on-campus', specificLocation: '' }))}
                >
                  On Campus
                </Button>
                <Button
                  type="button"
                  variant={formData.location === 'off-campus' ? 'default' : 'outline'}
                  className={`h-12 ${formData.location === 'off-campus' ? 'bg-green-500 text-white' : 'border-gray-600 text-gray-300 hover:border-green-400 hover:bg-green-900/30'}`}
                  onClick={() => setFormData(prev => ({ ...prev, location: 'off-campus', specificLocation: '' }))}
                >
                  Off Campus
                </Button>
              </div>
              
              {formData.location && (
                <div className="animate-scale-in">
                  <Label htmlFor="specificLocation" className="text-gray-300">
                    {formData.location === 'on-campus' ? 'Which building/dorm?' : 'Where should we meet?'}
                  </Label>
                  <Input
                    id="specificLocation"
                    value={formData.specificLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, specificLocation: e.target.value }))}
                    placeholder={formData.location === 'on-campus' ? 'e.g., Smith Hall, Room 204' : 'e.g., Your address or meeting location'}
                    className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400"
                  />
                </div>
              )}
            </div>

            {/* Cut Type */}
            <div className="space-y-3">
              <Label htmlFor="cutType" className="text-lg font-semibold flex items-center gap-2 text-white">
                <Scissors className="w-5 h-5 text-green-400" />
                What kind of cut do you have in mind?
              </Label>
              <Textarea
                id="cutType"
                value={formData.cutType}
                onChange={(e) => setFormData(prev => ({ ...prev, cutType: e.target.value }))}
                placeholder="Describe the style you want... (e.g., short sides with length on top, trim all around, buzz cut, etc.)"
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400"
                rows={3}
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold flex items-center gap-2 text-white">
                <User className="w-5 h-5 text-green-400" />
                Contact Information
              </Label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={!isFormValid}
              className="w-full h-12 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Complete Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
