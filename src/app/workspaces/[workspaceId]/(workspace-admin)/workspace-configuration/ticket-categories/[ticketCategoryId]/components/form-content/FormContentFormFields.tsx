import React from "react";
import CheckboxFieldForm, {
  CheckboxFieldProps,
} from "@/components/forms-fields/CheckboxFieldForm";
import CheckboxGroupFieldForm from "@/components/forms-fields/CheckboxGroupFieldForm";
import InputFieldForm, {
  InputFieldProps,
  InputFieldType,
} from "@/components/forms-fields/InputFieldForm";
import RadioGroupFieldForm, {
  RadioGroupFieldProps,
} from "@/components/forms-fields/RadioGroupFieldForm";
import SelectFieldForm, {
  SelectFieldFormProps,
} from "@/components/forms-fields/SelectFieldForm";
import SwitchFieldForm, {
  SwitchFieldProps,
} from "@/components/forms-fields/SwitchFieldForm";
import TextareaFieldForm, {
  TextareaFieldProps,
} from "@/components/forms-fields/TextareaFieldForm";
import { useDroppable } from "@dnd-kit/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

type FormFieldProps =
  | InputFieldProps
  | TextareaFieldProps
  | SelectFieldFormProps
  | SwitchFieldProps
  | RadioGroupFieldProps
  | CheckboxFieldProps;

export type FormFieldOption = {
  label: string;
  value: string;
};

type FormFieldElement = {
  label: string;
  attribute: string;
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
    attribute: "firstname",
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
    attribute: "lastname",
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
    attribute: "age",
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
    attribute: "email",
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
    attribute: "password",
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
    attribute: "file",
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
    attribute: "date",
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
    attribute: "message",
    description: "optional",
    element: TextareaFieldForm,
    fieldAttributes: {
      placeholder: "Write a message...",
      required: true,
    },
  },
  {
    label: "Fruits",
    attribute: "fruit",
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
    label: "Organization",
    attribute: "organization",
    description: "optional",
    element: RadioGroupFieldForm,
    fieldAttributes: {
      required: true,
    },
    extraAttributes: {
      options: [
        {
          label: "School",
          value: "school",
        },
        {
          label: "Business",
          value: "business",
        },
        {
          label: "Company",
          value: "company",
        },
      ],
    },
  },
  {
    label: "Building",
    attribute: "building",
    description: "optional",
    element: CheckboxGroupFieldForm,
    fieldAttributes: {
      required: true,
    },
    extraAttributes: {
      options: [
        {
          label: "School",
          value: "school",
        },
        {
          label: "Business",
          value: "business",
        },
        {
          label: "Company",
          value: "company",
        },
      ],
    },
  },
  {
    label: "Use print management",
    attribute: "usePrintManagement",
    description: "optional",
    element: SwitchFieldForm,
    fieldAttributes: {
      required: true,
    },
  },
  {
    label: "Accept terms and conditions",
    attribute: "isAccepted",
    description: "optional",
    element: CheckboxFieldForm,
    fieldAttributes: {
      required: true,
    },
  },
];

const formSchema = z.object({});

// type Props = {
//   elements: FormFieldElement[];
//   schema:
// }

const FormContentFormFields = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          {elements.map(
            ({
              label,
              attribute,
              description,
              fieldAttributes,
              extraAttributes,
              element: Element,
            }) => (
              <React.Fragment key={label}>
                {
                  <Element
                    label={label}
                    attribute={attribute}
                    description={description}
                    fieldAttributes={{ ...fieldAttributes, disabled: true }}
                    extraAttributes={extraAttributes}
                  />
                }
              </React.Fragment>
            )
          )}
        </div>
        <div className="my-4">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormContentFormFields;
