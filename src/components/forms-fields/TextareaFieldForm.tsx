import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { FormSchema } from "@/app/workspaces/[workspaceId]/(workspace-admin)/workspace-configuration/ticket-categories/[ticketCategoryId]/components/form-content/FormContentFormFields";

export type TextareaFieldProps = {
  label: string;
  attribute: keyof FormSchema;
  description?: string;
  fieldAttributes: {
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
  // field: ControllerProps;
};

const TextareaFieldForm = ({
  label,
  attribute,
  description,
  fieldAttributes,
}: TextareaFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <FormItem>
        <div>
          <FormLabel>{label}</FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
        </div>
        <FormControl>
          <Textarea rows={5} {...fieldAttributes} />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
};

export default TextareaFieldForm;
