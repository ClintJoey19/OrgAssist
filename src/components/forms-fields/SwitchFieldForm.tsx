import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";

export type SwitchFieldProps = {
  label: string;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    disabled?: boolean;
  };
};

const SwitchFieldForm = ({
  label,
  description,
  fieldAttributes,
}: SwitchFieldProps) => {
  return (
    <div className="flex justify-between items-start gap-4">
      <Label>{label}</Label>
      <Switch {...fieldAttributes} />
    </div>
  );

  return (
    <FormItem className="flex flex-col gap-2">
      <FormLabel>Switch Field</FormLabel>
      <FormControl>
        <Switch />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default SwitchFieldForm;
