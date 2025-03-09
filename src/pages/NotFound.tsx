
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center space-y-6 max-w-md px-4 animate-slide-up">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <p className="text-xl text-muted-foreground">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Button asChild className="font-medium">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
