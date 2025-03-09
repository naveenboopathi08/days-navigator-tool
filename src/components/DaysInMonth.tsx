
import React, { useState } from "react";
import { format, getDaysInMonth } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CalculatorCard from "./CalculatorCard";
import { cn } from "@/lib/utils";

const DaysInMonth = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [daysCount, setDaysCount] = useState<number>(
    getDaysInMonth(new Date(new Date().getFullYear(), new Date().getMonth()))
  );

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Generate array of years from current year - 100 to current year + 100
  const years = Array.from({ length: 201 }, (_, i) => {
    const year = new Date().getFullYear() - 100 + i;
    return year;
  });

  const handleCalculate = () => {
    const daysInMonth = getDaysInMonth(new Date(year, month));
    setDaysCount(daysInMonth);
  };

  return (
    <CalculatorCard 
      title="Days in Month" 
      description="Find out how many days are in a specific month of any year"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Month</label>
            <Select
              value={month.toString()}
              onValueChange={(value) => setMonth(parseInt(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((monthName, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {monthName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Year</label>
            <Select
              value={year.toString()}
              onValueChange={(value) => setYear(parseInt(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          className="w-full font-medium transition-all duration-300 hover:shadow-md" 
          onClick={handleCalculate}
        >
          Calculate Days
        </Button>

        <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-center">
          <div className="text-sm text-muted-foreground mb-1">
            {months[month]} {year} has
          </div>
          <div className="text-3xl font-semibold text-primary animate-fade-in">
            {daysCount}
            <span className="text-sm text-muted-foreground ml-2">days</span>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default DaysInMonth;
