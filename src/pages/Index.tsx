
import React, { useState } from "react";
import Layout from "@/components/Layout";
import DateCalculator from "@/components/DateCalculator";
import CountdownTimer from "@/components/CountdownTimer";
import DaysInMonth from "@/components/DaysInMonth";
import WeekCalculator from "@/components/WeekCalculator";
import LeapYearChecker from "@/components/LeapYearChecker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("date-diff");

  return (
    <Layout>
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
      </div>
    </Layout>
  );
};

export default Index;
