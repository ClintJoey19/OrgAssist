"use client";
import { LucideIcon, Monitor, Moon, Sun } from "lucide-react";
import React from "react";
import ThemeItemCard from "./ThemeItemCard";
import { useTheme } from "next-themes";

export type Theme = {
  logo: LucideIcon;
  label: string;
  mode: string;
  description: string;
};

const themes: Theme[] = [
  {
    logo: Monitor,
    label: "System theme",
    mode: "system",
    description: "These theme will use the theme your system is using.",
  },
  {
    logo: Sun,
    label: "Light theme",
    mode: "light",
    description: "Active when your system is configured to use light mode.",
  },
  {
    logo: Moon,
    label: "Dark theme",
    mode: "dark",
    description: "Eye-friendly design for low-light environments.",
  },
];

const ThemeListItems = () => {
  const { theme: currentMode, systemTheme, setTheme } = useTheme();

  const handleThemeChange = (mode: string) => {
    setTheme(mode);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {themes.map((theme) => (
        <ThemeItemCard
          key={theme.mode}
          currentMode={currentMode}
          theme={theme}
          systemTheme={systemTheme}
          handleThemeChange={handleThemeChange}
        />
      ))}
    </div>
  );
};

export default ThemeListItems;
