import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export type CheckboxFieldProps = {
  label: string;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    disabled?: boolean;
  };
};

const CheckboxFieldForm = ({
  label,
  description,
  fieldAttributes,
}: CheckboxFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...fieldAttributes} />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      </div>
    </div>
  );
};

export default CheckboxFieldForm;
