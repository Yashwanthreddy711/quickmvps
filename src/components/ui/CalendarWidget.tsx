
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const availableTimeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM"
];

interface CalendarWidgetProps {
  onSelectDateTime: (date: Date | undefined, time: string | undefined) => void;
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ onSelectDateTime }) => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    // Reset time when date changes
    setSelectedTime(undefined);
    onSelectDateTime(newDate, undefined);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelectDateTime(date, time);
  };

  const handleConfirmBooking = () => {
    // Redirect to the cal.com link
    window.open('https://cal.com/quickmvps/idea-to-mvp', '_blank');
  };

  return (
    <div className="glass-card overflow-hidden transition-all duration-300">
      <div className="p-4 bg-white/5">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-purple" />
          <h3 className="text-lg font-medium">Select a Date & Time</h3>
        </div>
      </div>
      
      <div className="p-5">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          className="rounded-md border border-white/10 p-3 pointer-events-auto"
          disabled={(date) => {
            // Disable dates in the past and weekends
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            
            return (
              date < now ||
              date.getDay() === 0 ||
              date.getDay() === 6
            );
          }}
        />
        
        {date && (
          <div className="mt-5">
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="h-4 w-4 text-purple" />
              <h4 className="text-sm font-medium text-white/80">Available times for {format(date, "EEEE, MMMM d")}</h4>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {availableTimeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`py-2 px-3 text-sm rounded-md transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-primary-gradient text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white/80'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
            
            {/* Confirm button - only shows when a time is selected */}
            {selectedTime && (
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  onClick={handleConfirmBooking}
                  className="w-full py-3 bg-premium-gradient hover:opacity-90 transition-opacity"
                >
                  Confirm Booking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-white/50 text-center mt-2">
                  You'll be redirected to our booking page
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;
