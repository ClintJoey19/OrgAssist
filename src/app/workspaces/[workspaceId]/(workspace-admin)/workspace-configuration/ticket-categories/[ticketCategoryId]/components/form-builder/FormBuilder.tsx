import React from "react";
import DotBackground from "@/components/backgrounds/DotBackground";
import CheckboxFieldForm from "@/components/forms-fields/CheckboxFieldForm";
import CheckboxGroupFieldForm from "@/components/forms-fields/CheckboxGroupFieldForm";
import InputFieldForm from "@/components/forms-fields/InputFieldForm";
import RadioGroupFieldForm from "@/components/forms-fields/RadioGroupFieldForm";
import SelectFieldForm from "@/components/forms-fields/SelectFieldForm";
import SubmitButtonForm from "@/components/forms-fields/SubmitButtonForm";
import SwitchFieldForm from "@/components/forms-fields/SwitchFieldForm";
import TextareaFieldForm from "@/components/forms-fields/TextareaFieldForm";
import Image from "next/image";
import FormContentHeader from "../form-content/FormContentHeader";

type Props = {
  ticketCategoryId: string;
};

const FormBuilder = ({ ticketCategoryId }: Props) => {
  return (
    <div className="h-full w-full relative shadow-md">
      <DotBackground />
      <div className="h-[96%] w-full max-w-[720px] flex flex-col gap-4 bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto p-4 border border-muted shadow-md">
        <FormContentHeader ticketCategoryId={ticketCategoryId} />
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
      </div>
    </div>
  );
};

export default FormBuilder;
