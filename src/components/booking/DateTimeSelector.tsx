
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MessageSquare, Instagram } from 'lucide-react';

interface DateTimeSelectorProps {
  onSelect: (day: string, date: string, time: string) => void;
}

export const DateTimeSelector = ({ onSelect }: DateTimeSelectorProps) => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [availableDates, setAvailableDates] = useState<Array<{
    day: string;
    date: string;
    formatted: string;
    displayName: string;
  }>>([]);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '1:00 PM',
    '2:30 PM'
  ];

  useEffect(() => {
    const getNextWeekDates = () => {
      const today = new Date();
      const currentHour = today.getHours();
      const cutoffTime = 21; // 9 PM
      const dates = [];
      
      // Look for Tuesdays and Thursdays in the next 14 days (2 weeks)
      for (let i = 0; i < 14; i++) {
        const checkDate = new Date();
        checkDate.setDate(today.getDate() + i);
        const dayOfWeek = checkDate.getDay();
        
        // Only include Tuesdays (2) and Thursdays (4)
        if (dayOfWeek === 2 || dayOfWeek === 4) {
          // Skip if it's today and past cutoff time, or if it's in the past
          const isToday = i === 0;
          const isPastCutoff = isToday && currentHour >= cutoffTime;
          
          if (!isPastCutoff && checkDate >= today) {
            const dayName = dayOfWeek === 2 ? 'tuesday' : 'thursday';
            const displayName = dayOfWeek === 2 ? 'Tuesday' : 'Thursday';
            
            dates.push({
              day: dayName,
              date: checkDate.toISOString().split('T')[0],
              formatted: checkDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
              displayName: displayName
            });
          }
        }
      }
      
      setAvailableDates(dates);
    };

    getNextWeekDates();
  }, []);

  const handleTimeSelect = (time: string) => {
    if (selectedDay) {
      const selectedDate = availableDates.find(d => d.day === selectedDay);
      if (selectedDate) {
        onSelect(selectedDay, selectedDate.date, time);
      }
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Day Selection */}
      <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-white">
            <Calendar className="w-6 h-6 text-green-400" />
            Select Your Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableDates.map((dateInfo) => (
              <Button
                key={dateInfo.day}
                variant={selectedDay === dateInfo.day ? 'default' : 'outline'}
                className={`h-20 text-lg transition-all duration-200 ${
                  selectedDay === dateInfo.day
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105' 
                    : 'border-gray-600 text-gray-300 hover:border-green-400 hover:bg-green-900/30 hover:text-green-400'
                }`}
                onClick={() => setSelectedDay(dateInfo.day)}
              >
                <div className="text-center">
                  <div className="font-semibold">{dateInfo.displayName}</div>
                  <div className="text-sm opacity-75">{dateInfo.formatted}</div>
                </div>
              </Button>
            ))}
          </div>
          
          {availableDates.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <p>No available dates this week. Check back later!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Time Selection */}
      {selectedDay && (
        <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-white">
              <Clock className="w-6 h-6 text-green-400" />
              Choose Your Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  className="h-16 text-base border-gray-600 text-gray-300 hover:border-green-400 hover:bg-green-900/30 hover:text-green-400 transition-all duration-200 hover:transform hover:scale-105"
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Can't Make It Section */}
      <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-white">
            <MessageSquare className="w-5 h-5 text-green-400" />
            Can't Make These Times?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-yellow-900/30 border border-yellow-400/30 p-4 rounded-lg">
            <p className="text-yellow-200 text-sm leading-relaxed mb-3">
              Heads up—I'm balancing a lot too!<br />
              I'm a double major in Computer Engineering and Applied Math, so my time is limited. I ask that you please respect the listed time slots.
            </p>
            <p className="text-yellow-200 text-sm leading-relaxed mb-3">
              That said, I'm always here to help if you genuinely can't make those times.<br />
              If you don't have my number, feel free to message me on Instagram: @mando_t05
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900"
                onClick={() => window.open('https://instagram.com/mando_t05', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                @mando_t05
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
