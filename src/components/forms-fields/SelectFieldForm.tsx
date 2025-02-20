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
import { Label } from "../ui/label";
import { FormFieldOption } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type SelectFieldFormProps = {
  label: string;
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
  description,
  fieldAttributes,
  extraAttributes,
}: SelectFieldFormProps) => {
  return (
    <div className="flex justify-between items-start gap-4">
      {/* <FormLabel>Select Field</FormLabel>
      <FormControl>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage /> */}
      <Label>{label}</Label>
      <div className="flex justify-end">
        <Select {...fieldAttributes}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={fieldAttributes.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{extraAttributes?.groupLabel}</SelectLabel>
              {extraAttributes?.options?.map(({ label, value }) => (
                <SelectItem key={label} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectFieldForm;
