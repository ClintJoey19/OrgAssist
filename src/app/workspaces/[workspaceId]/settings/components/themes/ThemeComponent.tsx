import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  theme?: string;
};

const ThemeComponent = ({ theme }: Props) => {
  return (
    <div className="relative aspect-video w-full">
      <Image src={`/themes/${theme}-theme.png`} alt={`${theme}-theme`} fill />
    </div>
  );

  return (
    <div
      className={`${
        theme === "dark" && "dark"
      } bg-primary-foreground grid grid-cols-[80px_1fr]`}
    >
      <div className="bg-sidebar h-full flex flex-col gap-2">
        <div className="grid grid-cols-[0.75rem_1fr] gap-1 py-1 px-1">
          <div className="h-3 w-3 bg-primary rounded-sm"></div>
          <div className="h-3 w-full bg-muted rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-1 p-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-muted rounded-sm"></div>
          ))}
        </div>
        <div className="flex flex-col gap-1 p-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-muted rounded-sm"></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full h-5 bg-card flex items-center justify-between border-b border-muted p-2">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-sm bg-primary"></div>
            <div className="h-3 w-8 bg-muted rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-muted"></div>
          </div>
        </div>
        <div className="h-52 flex flex-col gap-2 p-2">
          <Card className="h-full"></Card>
        </div>
      </div>
    </div>
  );
};

export default ThemeComponent;
