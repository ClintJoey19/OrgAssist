import React from "react";
import {
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
  FormItem,
} from "../ui/form";
import { Input } from "../ui/input";
import { FormSchema } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type InputFieldType =
  | "text"
  | "password"
  | "file"
  | "email"
  | "number"
  | "date";

export type InputFieldProps = {
  label: string;
  attribute: keyof FormSchema;
  description?: string;
  fieldAttributes: {
    type?: InputFieldType;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
  // field: ControllerProps;
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
        <div>
          <FormLabel>{label}</FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
        </div>
        <FormControl>
          <Input {...fieldAttributes} />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
};

export default InputFieldForm;
