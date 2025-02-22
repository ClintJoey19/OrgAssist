import React from "react";
import {
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormFieldOption,
  FormSchema,
} from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";
import { ControllerRenderProps } from "react-hook-form";

export type SelectFieldFormProps = {
  label: string;
  attribute: keyof FormSchema;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
  extraAttributes?: {
    groupLabel?: string;
    options?: FormFieldOption[];
  };
  // field: ControllerRenderProps<FormSchema, keyof FormSchema>;
};

const SelectFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
  extraAttributes,
}: SelectFieldFormProps) => {
  return (
    <div className="flex justify-between items-start gap-4">
      <div>
        <FormLabel>{label}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
      </div>
      <FormControl>
        <Select {...fieldAttributes}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={fieldAttributes.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{extraAttributes?.groupLabel}</SelectLabel>
              {extraAttributes?.options?.map(({ label, value }) => (
                <SelectItem key={`${attribute}-${value}`} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </div>
  );
};

export default SelectFieldForm;
