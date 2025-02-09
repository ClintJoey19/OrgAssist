import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const CheckboxFieldForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Single Checkbox Field</Label>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
    </div>
  );
};

export default CheckboxFieldForm;
