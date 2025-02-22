import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Switch } from "@/components/ui/switch";
import { FormSchema } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type SwitchFieldProps = {
  label: string;
  attribute: keyof FormSchema;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    disabled?: boolean;
  };
  // field: ControllerProps;
};

const SwitchFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
}: SwitchFieldProps) => {
  return (
    <FormItem className="space-y-2">
      <div className="flex items-start justify-between gap-2">
        <div>
          <FormLabel>{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
        </div>
        <FormControl>
          <Switch {...fieldAttributes} />
        </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default SwitchFieldForm;
