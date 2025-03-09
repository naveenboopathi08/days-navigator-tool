
import React, { useState } from "react";
import Layout from "@/components/Layout";
import DateCalculator from "@/components/DateCalculator";
import CountdownTimer from "@/components/CountdownTimer";
import DaysInMonth from "@/components/DaysInMonth";
import WeekCalculator from "@/components/WeekCalculator";
import LeapYearChecker from "@/components/LeapYearChecker";
import AdComponent from "@/components/AdComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";

const Index = () => {
  const [activeTab, setActiveTab] = useState("date-diff");

  return (
    <Layout>
      <Helmet>
        <title>Days Calculator - Your Simple Date Calculation Tool</title>
        <meta name="description" content="A simple, elegant tool for all your date calculation needs. Calculate days between dates, countdown timers, days in a month, and more." />
        <meta name="keywords" content="date calculator, days between dates, countdown timer, leap year checker, week calculator, days in month" />
        <link rel="canonical" href="https://dayscalculator.app/" />
      </Helmet>

      <div className="max-w-4xl mx-auto w-full space-y-8 px-4 sm:px-6 animate-slide-up">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Days Calculator
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, elegant tool for all your date calculation needs.
          </p>
        </div>

        <Tabs
          defaultValue="date-diff"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="date-diff">Days Between</TabsTrigger>
            <TabsTrigger value="countdown">Countdown</TabsTrigger>
            <TabsTrigger value="days-in-month">Days in Month</TabsTrigger>
            <TabsTrigger value="week">Week of Year</TabsTrigger>
            <TabsTrigger value="leap-year">Leap Year</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="date-diff" className="animate-fade-in">
              <DateCalculator />
            </TabsContent>
            <TabsContent value="countdown" className="animate-fade-in">
              <CountdownTimer />
            </TabsContent>
            <TabsContent value="days-in-month" className="animate-fade-in">
              <DaysInMonth />
            </TabsContent>
            <TabsContent value="week" className="animate-fade-in">
              <WeekCalculator />
            </TabsContent>
            <TabsContent value="leap-year" className="animate-fade-in">
              <LeapYearChecker />
            </TabsContent>
          </div>
        </Tabs>

        {/* In-content ad between content sections */}
        <div className="my-8">
          <AdComponent 
            adSlot="5678901234" 
            adFormat="rectangle"
            className="w-full overflow-hidden mx-auto" 
          />
        </div>
        
        {/* SEO-friendly content section */}
        <section className="mt-12 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold mb-4">Date Calculation Made Simple</h2>
          <p>
            Our Days Calculator provides multiple tools to help you with all your date-related calculations.
            Whether you need to find the number of days between two dates, count down to an important event,
            check if a year is a leap year, or determine the days in a specific month, we've got you covered.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Features of Our Date Calculator</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Days Between Dates:</strong> Calculate the exact number of days between any two dates.</li>
            <li><strong>Countdown Timer:</strong> See how many days remain until a special date.</li>
            <li><strong>Days in Month:</strong> Quickly find out how many days are in any month of any year.</li>
            <li><strong>Week of Year:</strong> Determine which week of the year a specific date falls in.</li>
            <li><strong>Leap Year Checker:</strong> Check if a particular year is a leap year.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
