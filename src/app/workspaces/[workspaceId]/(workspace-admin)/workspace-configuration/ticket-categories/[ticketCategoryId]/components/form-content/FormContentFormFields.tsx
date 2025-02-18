import React from "react";
import CheckboxFieldForm from "@/components/forms-fields/CheckboxFieldForm";
import CheckboxGroupFieldForm from "@/components/forms-fields/CheckboxGroupFieldForm";
import InputFieldForm from "@/components/forms-fields/InputFieldForm";
import RadioGroupFieldForm from "@/components/forms-fields/RadioGroupFieldForm";
import SelectFieldForm from "@/components/forms-fields/SelectFieldForm";
import SubmitButtonForm from "@/components/forms-fields/SubmitButtonForm";
import SwitchFieldForm from "@/components/forms-fields/SwitchFieldForm";
import TextareaFieldForm from "@/components/forms-fields/TextareaFieldForm";

const FormContentFormFields = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <InputFieldForm type="text" />
        <InputFieldForm type="number" />
        <InputFieldForm type="email" />
        <InputFieldForm type="password" />
        <InputFieldForm type="file" />
        <TextareaFieldForm />
        <SelectFieldForm />
        <SwitchFieldForm />
        <RadioGroupFieldForm />
        <CheckboxFieldForm />
        <CheckboxGroupFieldForm />
      </div>
      <div className="my-4">
        <SubmitButtonForm />
      </div>
    </div>
  );
};

export default FormContentFormFields;
