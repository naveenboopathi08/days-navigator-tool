
import React, { useState, useEffect } from "react";
import { format, differenceInDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalculatorCard from "./CalculatorCard";
import { cn } from "@/lib/utils";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 30))
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);

  const calculateTimeLeft = () => {
    if (!targetDate) return;

    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsActive(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isActive) {
      calculateTimeLeft();
      timer = setInterval(calculateTimeLeft, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, targetDate]);

  const handleStart = () => {
    if (targetDate) {
      calculateTimeLeft();
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <CalculatorCard 
      title="Countdown Timer" 
      description="Count down to a specific date and time"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Target Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !targetDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {targetDate ? format(targetDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={targetDate}
                onSelect={setTargetDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex space-x-2">
          <Button 
            className="flex-1 font-medium transition-all duration-300 hover:shadow-md" 
            onClick={handleStart}
            disabled={!targetDate || isActive}
          >
            Start Countdown
          </Button>
          <Button 
            variant="outline" 
            onClick={handleReset}
            disabled={!isActive}
            className="transition-all duration-300"
          >
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="bg-secondary/50 p-3 rounded-lg text-center">
            <div className="text-2xl md:text-3xl font-semibold text-primary animate-pulse-subtle">
              {timeLeft.days}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Days</div>
          </div>
          <div className="bg-secondary/50 p-3 rounded-lg text-center">
            <div className="text-2xl md:text-3xl font-semibold text-primary animate-pulse-subtle">
              {timeLeft.hours}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="bg-secondary/50 p-3 rounded-lg text-center">
            <div className="text-2xl md:text-3xl font-semibold text-primary animate-pulse-subtle">
              {timeLeft.minutes}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Mins</div>
          </div>
          <div className="bg-secondary/50 p-3 rounded-lg text-center">
            <div className="text-2xl md:text-3xl font-semibold text-primary animate-pulse-subtle">
              {timeLeft.seconds}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Secs</div>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default CountdownTimer;
