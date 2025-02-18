"use client";
import React, { createContext, useState } from "react";

type FormFieldType =
  | "input"
  | "textarea"
  | "radio-group"
  | "checkbox"
  | "checkbox-group"
  | "switch";

type FormField = {
  id: string;
  label: string;
  description?: string;
  type: FormFieldType;
};

type FormContent = {
  id: string;
  name: string;
  description: string;
  icon: string;
  form: FormField[];
  //   createdAt: string;
  //   updatedAt: string;
};

type FormBuilderContextProps = {};

export const FormBuilderContext = createContext<FormBuilderContextProps | null>(
  null
);

type Props = {
  children: React.ReactNode;
  value: FormContent | null;
};

const FormBuilderProvider = ({ children, value }: Props) => {
  const [form, setForm] = useState<FormContent>();
  const [selectedField, setSelectedField] = useState();

  return (
    <FormBuilderContext.Provider value={value}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export default FormBuilderProvider;
