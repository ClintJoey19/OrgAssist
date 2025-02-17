import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  CircleCheck,
  ListChecks,
  ListTodo,
  Text,
  Type,
} from "lucide-react";
import React from "react";

const fields = [
  {
    label: "Text field",
    logo: Type,
  },
  {
    label: "Long text field",
    logo: Text,
  },
  {
    label: "Dropdown field",
    logo: ChevronDown,
  },
  {
    label: "Radio group field",
    logo: ListTodo,
  },
  {
    label: "Checkbox field",
    logo: CircleCheck,
  },
  {
    label: "Checkbox group field",
    logo: ListChecks,
  },
];

const FormBuilderFields = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="group-label">Form fields</span>
      <div className="flex flex-col gap-2">
        {fields.map((field) => (
          <Button
            key={field.label}
            variant="secondary"
            size="sm"
            className="flex justify-start items-center"
          >
            <field.logo className="h-4 w-4" /> {field.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FormBuilderFields;
