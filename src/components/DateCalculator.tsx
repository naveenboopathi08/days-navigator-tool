
import React, { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalculatorCard from "./CalculatorCard";
import { cn } from "@/lib/utils";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [daysDifference, setDaysDifference] = useState<number | null>(7);

  const handleCalculate = () => {
    if (startDate && endDate) {
      const difference = differenceInDays(endDate, startDate);
      setDaysDifference(difference);
    }
  };

  return (
    <CalculatorCard
      title="Days Between Dates"
      description="Calculate the number of days between two dates"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Start Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">End Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button 
          className="w-full font-medium transition-all duration-300 hover:shadow-md" 
          onClick={handleCalculate}
        >
          Calculate Days
        </Button>

        <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-center">
          <div className="text-sm text-muted-foreground mb-1">Result</div>
          <div className="text-3xl font-semibold text-primary animate-fade-in">
            {daysDifference !== null ? (
              <>
                <span>{Math.abs(daysDifference)}</span>
                <span className="text-sm text-muted-foreground ml-2">days</span>
              </>
            ) : (
              "Select both dates"
            )}
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default DateCalculator;
