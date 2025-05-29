
import { Scissors, Calendar, Clock } from 'lucide-react';

export const BookingHeader = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
        <Scissors className="w-8 h-8 text-white" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Book Your <span className="text-green-400">Fresh Cut</span>
      </h1>
      
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Quick and easy scheduling for your next haircut. Choose your time and let's get you looking sharp! 
        <span className="text-green-400 font-medium"> Pay what you can.</span>
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-400" />
          <span>Tuesday & Thursday</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-400" />
          <span>10 AM - 3 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-green-400" />
          <span>College-Friendly Barber</span>
        </div>
      </div>
    </div>
  );
};
