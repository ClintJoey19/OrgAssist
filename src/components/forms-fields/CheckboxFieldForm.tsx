import React from "react";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";

export type CheckboxFieldProps = {
  label: string;
  attribute: string;
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
    <FormItem className="space-x-2">
      <FormControl>
        <Checkbox {...fieldAttributes} />
      </FormControl>
      <FormLabel>{label}</FormLabel>
      <FormMessage />
    </FormItem>
  );
};

export default CheckboxFieldForm;
