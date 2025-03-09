
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import AdComponent from "./AdComponent";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mounted, setMounted] = useState(false);

  // Used to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-medium text-xl">Days Calculator</span>
          </div>
          <div className="flex-1" />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          {/* Top Ad Banner */}
          <div className="mb-6">
            <AdComponent 
              adSlot="1234567890" 
              adFormat="horizontal" 
              className="w-full overflow-hidden mx-auto max-w-4xl" 
            />
          </div>
          
          <div
            className={cn(
              "animate-fade-in grid gap-6 md:gap-8",
              "grid-cols-1"
            )}
          >
            {children}
          </div>
          
          {/* Bottom Ad Banner */}
          <div className="mt-8">
            <AdComponent 
              adSlot="0987654321" 
              adFormat="rectangle" 
              className="w-full overflow-hidden mx-auto max-w-4xl" 
            />
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col md:h-16 items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Days Calculator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
