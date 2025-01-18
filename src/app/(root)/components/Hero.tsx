import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="container rounded-2xl bg-primary-foreground flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-4 py-24">
          <h1 className="h1 text-center">
            Efficient Ticketing, Exceptional Support.
          </h1>
          <p className="w-full max-w-[800px] text-muted-foreground text-3xl text-center">
            Optimize Your Support Workflow
          </p>
          <div className="flex gap-4">
            <Button size="cta">Take a tour</Button>
            <Button variant="secondary" size="cta">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
