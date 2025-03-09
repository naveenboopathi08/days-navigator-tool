
import React, { useEffect, useRef } from "react";

interface AdComponentProps {
  adSlot: string;
  adFormat?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

const AdComponent = ({ adSlot, adFormat = "auto", className }: AdComponentProps) => {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only attempt to load ads if we're in production environment
    if (process.env.NODE_ENV === "production" && adContainerRef.current) {
      try {
        const adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div className={`ad-container ${className || ""}`} ref={adContainerRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
      <div className="text-xs text-muted-foreground text-center mt-1">Advertisement</div>
    </div>
  );
};

export default AdComponent;
