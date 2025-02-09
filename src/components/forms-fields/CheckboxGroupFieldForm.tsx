import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const CheckboxGroupFieldForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Checkbox Group Field</Label>
      <div className="grid grid-cols-2 gap-2">
        {items.map(({ id, label }) => (
          <div key={id} className="flex items-center gap-2">
            <Checkbox />
            <Label>{label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroupFieldForm;
