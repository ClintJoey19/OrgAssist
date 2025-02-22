import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormFieldOption } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type RadioGroupFieldProps = {
  label: string;
  attribute: string;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    disabled?: boolean;
  };
  extraAttributes?: {
    options?: FormFieldOption[];
  };
};

const RadioGroupFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
  extraAttributes,
}: RadioGroupFieldProps) => {
  return (
    <FormItem className="flex flex-col gap-2">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <RadioGroup defaultValue="comfortable" {...fieldAttributes}>
          {extraAttributes?.options?.map(({ label, value }) => (
            <FormItem
              key={`${attribute}-${value}`}
              className="flex items-center space-x-3 space-y-0"
            >
              <FormControl>
                <RadioGroupItem value={value} defaultChecked={true} />
              </FormControl>
              <FormLabel className="font-normal">{label}</FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default RadioGroupFieldForm;
