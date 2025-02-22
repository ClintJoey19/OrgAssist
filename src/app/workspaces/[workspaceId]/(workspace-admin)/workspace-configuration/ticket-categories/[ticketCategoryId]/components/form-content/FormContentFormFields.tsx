import React from "react";
import CheckboxFieldForm from "@/components/forms-fields/CheckboxFieldForm";
import CheckboxGroupFieldForm from "@/components/forms-fields/CheckboxGroupFieldForm";
import InputFieldForm, {
  InputFieldType,
} from "@/components/forms-fields/InputFieldForm";
import RadioGroupFieldForm from "@/components/forms-fields/RadioGroupFieldForm";
import SelectFieldForm from "@/components/forms-fields/SelectFieldForm";
import SwitchFieldForm from "@/components/forms-fields/SwitchFieldForm";
import TextareaFieldForm from "@/components/forms-fields/TextareaFieldForm";
import { useDroppable } from "@dnd-kit/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "First name field is required" }),
  lastname: z.string().min(1, { message: "Last name field is required" }),
  age: z.number().min(1, { message: "Enter a valid age value" }),
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  file: z.instanceof(File, { message: "File field is required" }),
  date: z.date({ message: "Date field is required" }),
  message: z.string().min(1, { message: "Message field is required" }),
  fruit: z.string({ message: "Fruit field is required" }),
  organization: z.string({ message: "Organization field is required" }),
  usePrintManagement: z.boolean().default(false),
  isAccepted: z.boolean().default(false),
});

export type FormSchema = z.infer<typeof formSchema>;

export type FormFieldOption = {
  label: string;
  value: string;
};

type FormFieldType =
  | "InputField"
  | "TextareaField"
  | "SelectField"
  | "SwitchField"
  | "RadioGroupField"
  | "CheckboxField"
  | "CheckboxGroupField";

type FormFieldElement = {
  label: string;
  attribute: keyof FormSchema;
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
  element: FormFieldType;
};

const elements: FormFieldElement[] = [
  {
    label: "First name",
    attribute: "firstname",
    description: "optional",
    element: "InputField",
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
    element: "InputField",
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
    element: "InputField",
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
    element: "InputField",
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
    element: "InputField",
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
    element: "InputField",
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
    element: "InputField",
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
    element: "TextareaField",
    fieldAttributes: {
      placeholder: "Write a message...",
      required: true,
    },
  },
  {
    label: "Fruits",
    attribute: "fruit",
    description: "optional",
    element: "SelectField",
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
    element: "RadioGroupField",
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
  // {
  //   label: "Building",
  //   attribute: "building",
  //   description: "optional",
  //   element: "CheckboxGroupField",
  //   fieldAttributes: {
  //     required: true,
  //   },
  //   extraAttributes: {
  //     options: [
  //       {
  //         label: "School",
  //         value: "school",
  //       },
  //       {
  //         label: "Business",
  //         value: "business",
  //       },
  //       {
  //         label: "Company",
  //         value: "company",
  //       },
  //     ],
  //   },
  // },
  {
    label: "Use print management",
    attribute: "usePrintManagement",
    description: "optional",
    element: "SwitchField",
    fieldAttributes: {
      required: true,
    },
  },
  {
    label: "Accept terms and conditions",
    attribute: "isAccepted",
    description: "optional",
    element: "CheckboxField",
    fieldAttributes: {
      required: true,
    },
  },
];

const formElements = {
  InputField: InputFieldForm,
  TextareaField: TextareaFieldForm,
  SelectField: SelectFieldForm,
  RadioGroupField: RadioGroupFieldForm,
  CheckboxField: CheckboxFieldForm,
  CheckboxGroupField: CheckboxGroupFieldForm,
  SwitchField: SwitchFieldForm,
};

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
              element,
            }) => {
              const Element = formElements[element];

              return (
                <FormField
                  key={attribute}
                  name={attribute}
                  control={form.control}
                  render={({ field, fieldState, formState }) => (
                    <Element
                      label={label}
                      attribute={attribute}
                      description={description}
                      fieldAttributes={{ ...fieldAttributes }}
                      extraAttributes={extraAttributes}
                    />
                  )}
                />
              );
            }
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
