
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CalculatorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const CalculatorCard = ({
  title,
  description,
  children,
  className,
  ...props
}: CalculatorCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 border border-border/40 shadow-subtle hover:shadow-card bg-card/80 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-medium tracking-tight">{title}</CardTitle>
        {description && (
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CalculatorCard;
