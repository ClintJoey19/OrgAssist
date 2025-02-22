import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import {
  FormFieldOption,
  FormSchema,
} from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export type CheckboxGroupFieldFormProps = {
  label: string;
  attribute: keyof FormSchema;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    disabled?: boolean;
  };
  extraAttributes?: {
    options?: FormFieldOption[];
  };
};

const CheckboxGroupFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
  extraAttributes,
}: CheckboxGroupFieldFormProps) => {
  return (
    <FormItem className="space-y-2">
      <div className="flex flex-col gap-1">
        <FormLabel>{label}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {extraAttributes?.options?.map(({ label, value }) => (
          <div
            key={`${attribute}-${value}`}
            className="flex items-center gap-2"
          >
            <FormControl>
              <Checkbox value={value} {...fieldAttributes} />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
        ))}
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default CheckboxGroupFieldForm;
