import React from "react";
import { FormControl, FormLabel, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormFieldOption } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type SelectFieldFormProps = {
  label: string;
  attribute: string;
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
      <FormLabel>{label}</FormLabel>
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
