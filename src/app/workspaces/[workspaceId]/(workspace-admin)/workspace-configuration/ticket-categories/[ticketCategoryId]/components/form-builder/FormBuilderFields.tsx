import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/core";
import {
  AtSign,
  Calendar,
  ChevronDown,
  CircleCheck,
  Hash,
  ListChecks,
  ListTodo,
  Lock,
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
    label: "Number field",
    logo: Hash,
  },
  {
    label: "Email field",
    logo: AtSign,
  },
  {
    label: "Password field",
    logo: Lock,
  },
  {
    label: "Date field",
    logo: Calendar,
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
  const draggable = useDraggable({
    id: "draggable",
    data: {
      isElementDraggable: true,
    },
  });

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
