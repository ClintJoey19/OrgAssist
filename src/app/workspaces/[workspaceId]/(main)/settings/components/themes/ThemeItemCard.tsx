import { Card } from "@/components/ui/card";
import React, { forwardRef } from "react";
import { Theme } from "./ThemeListItems";
import CheckButton from "@/components/global/CheckButton";
import ThemeComponent from "./ThemeComponent";

// TODO:
// fix hydartion errors in Card's className dynamic styles CheckButton rendering

type Props = {
  theme: Theme;
  currentMode?: string;
  systemTheme: "light" | "dark" | undefined;
  handleThemeChange: (mode: string) => void;
};

const ThemeItemCard = forwardRef<HTMLDivElement, Props>(
  ({ theme, currentMode, systemTheme, handleThemeChange }, ref) => {
    const { label, mode, description } = theme;

    return (
      <Card
        ref={ref}
        className={`cursor-pointer p-4 border-2 ${
          mode === currentMode ? "border-primary" : "border-transparent"
        }`}
        onClick={() => handleThemeChange(mode)}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <theme.logo className="h-5 w-5" />
            <p className="title">{label}</p>
          </div>
          {currentMode === mode && <CheckButton />}
        </div>
        <div className="p-2 my-4 rounded-sm">
          <ThemeComponent theme={mode === "system" ? systemTheme : mode} />
        </div>
        <div className="flex flex-col">
          {mode === "system" ? (
            <p className="title">Default</p>
          ) : (
            <p className="title">
              <span className="capitalize">{mode}</span> mode
            </p>
          )}
          <span className="sub-text">{description}</span>
        </div>
      </Card>
    );
  }
);

export default ThemeItemCard;
