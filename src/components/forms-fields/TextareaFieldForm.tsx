import React from "react";
import { FormControl, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

export type TextareaFieldProps = {
  label: string;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
};

const TextareaFieldForm = ({
  label,
  description,
  fieldAttributes,
}: TextareaFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      {/* <FormLabel>Textarea Field</FormLabel>
      <FormControl>
        <Textarea placeholder="Textarea Field" />
      </FormControl>
      <FormMessage /> */}
      <Label>{label}</Label>
      <Textarea rows={5} {...fieldAttributes} />
    </div>
  );
};

export default TextareaFieldForm;
