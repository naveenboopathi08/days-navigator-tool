
import React, { useState } from "react";
import { format, getWeek, getISOWeek } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CalculatorCard from "./CalculatorCard";
import { cn } from "@/lib/utils";

const WeekCalculator = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [weekType, setWeekType] = useState<"ISO" | "US">("ISO");
  const [weekNumber, setWeekNumber] = useState<number | null>(
    getISOWeek(new Date())
  );

  const handleCalculate = () => {
    if (date) {
      const weekNum = weekType === "ISO" ? getISOWeek(date) : getWeek(date);
      setWeekNumber(weekNum);
    }
  };

  return (
    <CalculatorCard 
      title="Week of the Year" 
      description="Calculate the week number for any given date"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Week Standard</label>
            <Select
              value={weekType}
              onValueChange={(value) => setWeekType(value as "ISO" | "US")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select standard" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ISO">ISO (Europe)</SelectItem>
                <SelectItem value="US">US (Sunday Start)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          className="w-full font-medium transition-all duration-300 hover:shadow-md" 
          onClick={handleCalculate}
        >
          Calculate Week
        </Button>

        <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-center">
          <div className="text-sm text-muted-foreground mb-1">
            Week Number ({weekType} standard)
          </div>
          <div className="text-3xl font-semibold text-primary animate-fade-in">
            {weekNumber !== null ? (
              <>
                <span>Week {weekNumber}</span>
              </>
            ) : (
              "Select a date"
            )}
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default WeekCalculator;
