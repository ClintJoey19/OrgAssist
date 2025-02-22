import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";

export type SwitchFieldProps = {
  label: string;
  attribute: string;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    disabled?: boolean;
  };
};

const SwitchFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
}: SwitchFieldProps) => {
  return (
    <FormItem className="space-y-2">
      <div className="flex items-start justify-between gap-2">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Switch {...fieldAttributes} />
        </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default SwitchFieldForm;
