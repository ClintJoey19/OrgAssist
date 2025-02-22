import React from "react";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormSchema } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type CheckboxFieldProps = {
  label: string;
  attribute: keyof FormSchema;
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
    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox {...fieldAttributes} />
      </FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>{label}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default CheckboxFieldForm;
