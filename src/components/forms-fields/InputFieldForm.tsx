import React from "react";
import {
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
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
  description,
  fieldAttributes,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      {/* <FormLabel>Input Field</FormLabel>
      <FormControl>
        <Input placeholder="Input Field" />
      </FormControl>
      <FormMessage /> */}
      <Label>{label}</Label>
      <Input {...fieldAttributes} />
    </div>
  );
};

export default InputFieldForm;
