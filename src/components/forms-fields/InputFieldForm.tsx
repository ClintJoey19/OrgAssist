import React from "react";
import {
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
  FormItem,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export type InputFieldType =
  | "text"
  | "password"
  | "file"
  | "email"
  | "number"
  | "date";

export type InputFieldProps = {
  label: string;
  attribute: string;
  description?: string;
  fieldAttributes: {
    type?: InputFieldType;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
};

const InputFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...fieldAttributes} />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
};

export default InputFieldForm;
