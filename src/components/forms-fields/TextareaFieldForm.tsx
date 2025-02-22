import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

export type TextareaFieldProps = {
  label: string;
  attribute: string;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
};

const TextareaFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
}: TextareaFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea rows={5} {...fieldAttributes} />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
};

export default TextareaFieldForm;
