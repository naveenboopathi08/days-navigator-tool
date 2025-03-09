
import React, { useState } from "react";
import { isLeapYear } from "date-fns";
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
  const [isLeap, setIsLeap] = useState<boolean | null>(
    isLeapYear(new Date().getFullYear())
  );

  // Generate array of years from current year - 100 to current year + 100
  const years = Array.from({ length: 201 }, (_, i) => {
    const year = new Date().getFullYear() - 100 + i;
    return year;
  });

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputYear = parseInt(e.target.value);
    if (!isNaN(inputYear)) {
      setYear(inputYear);
    }
  };

  const handleCheck = () => {
    if (year) {
      setIsLeap(isLeapYear(new Date(year, 0, 1)));
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

        <Button 
          className="w-full font-medium transition-all duration-300 hover:shadow-md" 
          onClick={handleCheck}
        >
          Check Year
        </Button>

        <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-center">
          <div className="text-sm text-muted-foreground mb-1">Result</div>
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
