
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import CalculatorCard from "./CalculatorCard";

const LeapYearChecker = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [isLeap, setIsLeap] = useState<boolean | null>(null);

  // Generate array of years from current year - 100 to current year + 100
  const years = Array.from({ length: 201 }, (_, i) => {
    const year = new Date().getFullYear() - 100 + i;
    return year;
  });

  // Manual leap year calculation function
  const checkLeapYear = (year: number): boolean => {
    // Leap year is divisible by 4
    // But if it's a century (divisible by 100), it must also be divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  // Check leap year on mount and when year changes
  useEffect(() => {
    handleCheck();
  }, [year]);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputYear = parseInt(e.target.value);
    if (!isNaN(inputYear)) {
      setYear(inputYear);
    }
  };

  const handleCheck = () => {
    if (year) {
      setIsLeap(checkLeapYear(year));
    }
  };

  return (
    <CalculatorCard 
      title="Leap Year Checker" 
      description="Check if a specific year is a leap year"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Year</label>
            <div className="flex space-x-2">
              <Input
                type="number"
                value={year}
                onChange={handleYearChange}
                min="1"
                max="9999"
                className="flex-1"
              />
              <Select
                value={year.toString()}
                onValueChange={(value) => setYear(parseInt(value))}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Common years" />
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
        </div>

        <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-center">
          <div className="text-sm text-muted-foreground mb-1">Result (Updates Automatically)</div>
          <div className="text-3xl font-semibold animate-fade-in">
            {isLeap !== null ? (
              <>
                <span className={isLeap ? "text-primary" : "text-destructive"}>
                  {year} is {isLeap ? '' : 'not '}a leap year
                </span>
              </>
            ) : (
              "Enter a year"
            )}
          </div>
          {isLeap !== null && (
            <div className="mt-2 text-sm text-muted-foreground">
              {isLeap 
                ? "February has 29 days in this year."
                : "February has 28 days in this year."}
            </div>
          )}
        </div>
      </div>
    </CalculatorCard>
  );
};

export default LeapYearChecker;
