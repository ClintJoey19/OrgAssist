import React from "react";
import CheckboxFieldForm, {
  CheckboxFieldProps,
} from "@/components/forms-fields/CheckboxFieldForm";
import CheckboxGroupFieldForm from "@/components/forms-fields/CheckboxGroupFieldForm";
import InputFieldForm, {
  InputFieldProps,
  InputFieldType,
} from "@/components/forms-fields/InputFieldForm";
import RadioGroupFieldForm from "@/components/forms-fields/RadioGroupFieldForm";
import SelectFieldForm, {
  SelectFieldFormProps,
} from "@/components/forms-fields/SelectFieldForm";
import SubmitButtonForm from "@/components/forms-fields/SubmitButtonForm";
import SwitchFieldForm, {
  SwitchFieldProps,
} from "@/components/forms-fields/SwitchFieldForm";
import TextareaFieldForm, {
  TextareaFieldProps,
} from "@/components/forms-fields/TextareaFieldForm";
import { useDroppable } from "@dnd-kit/core";

type FormFieldProps =
  | InputFieldProps
  | TextareaFieldProps
  | SelectFieldFormProps
  | SwitchFieldProps
  | CheckboxFieldProps;

export type FormFieldOption = {
  label: string;
  value: string;
};

type FormFieldElement = {
  label: string;
  description?: string;
  fieldAttributes: {
    type?: InputFieldType;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
  };
  extraAttributes?: {
    groupLabel?: string;
    options?: FormFieldOption[];
  };
  element: React.ComponentType<FormFieldProps>;
};

const elements: FormFieldElement[] = [
  {
    label: "First name",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "text",
      placeholder: "First name",
      required: true,
    },
  },
  {
    label: "Last name",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "text",
      placeholder: "Last name",
      required: true,
    },
  },
  {
    label: "Age",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "number",
      placeholder: "Age",
      required: true,
    },
  },
  {
    label: "Email",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "email",
      placeholder: "Email",
      required: true,
    },
  },
  {
    label: "Password",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "password",
      placeholder: "Password",
      required: true,
    },
  },
  {
    label: "File",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "file",
      placeholder: "File",
      required: true,
    },
  },
  {
    label: "Date",
    description: "optional",
    element: InputFieldForm,
    fieldAttributes: {
      type: "date",
      placeholder: "Date",
      required: true,
    },
  },
  {
    label: "Message",
    description: "optional",
    element: TextareaFieldForm,
    fieldAttributes: {
      placeholder: "Write a message...",
      required: true,
    },
  },
  {
    label: "Fruits",
    description: "optional",
    element: SelectFieldForm,
    fieldAttributes: {
      placeholder: "Select fruits",
      required: true,
    },
    extraAttributes: {
      groupLabel: "Fruits",
      options: [
        {
          label: "Apple",
          value: "apple",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "Banana",
          value: "banana",
        },
      ],
    },
  },
  {
    label: "Use print management",
    description: "optional",
    element: SwitchFieldForm,
    fieldAttributes: {
      required: true,
    },
  },
  {
    label: "Accept terms and conditions",
    description: "optional",
    element: CheckboxFieldForm,
    fieldAttributes: {
      required: true,
    },
  },
];

const FormContentFormFields = () => {
  const droppable = useDroppable({
    id: "form-builder-area",
    data: {
      isDesignerDroppableArea: true,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {elements.map(
          ({
            label,
            description,
            fieldAttributes,
            extraAttributes,
            element: Element,
          }) => (
            <React.Fragment key={label}>
              {
                <Element
                  label={label}
                  description={description}
                  fieldAttributes={{ ...fieldAttributes }}
                  extraAttributes={extraAttributes}
                />
              }
            </React.Fragment>
          )
        )}
      </div>
      <div className="my-4">
        <SubmitButtonForm />
      </div>
    </div>
  );
};

export default FormContentFormFields;
