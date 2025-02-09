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

type Props = {
  ticketCategoryId: string;
};

const FormBuilder = ({ ticketCategoryId }: Props) => {
  return (
    <div className="h-full w-full relative shadow-md">
      <DotBackground />
      <div className="h-[96%] w-full max-w-[400px] flex flex-col gap-4 bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto p-4 border border-muted shadow-md">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[32px_1fr] items-center gap-2">
            <div className="relative h-8 aspect-square overflow-hidden rounded-md border border-sidebar">
              <Image
                src={`/ticket-default-placeholders/placeholder-${ticketCategoryId}.jpg`}
                alt="Ticket category logo"
                fill
                className="object-center object-cover"
              />
            </div>
            <p className="flex-grow text-lg line-clamp-1">
              Ticket group name {ticketCategoryId}
            </p>
          </div>
          <span className="sub-text text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nam officiis, natus praesentium quas, velit quod commodi, corporis
            quam doloremque error ex ad architecto itaque nulla dolorum
            voluptate. Corrupti suscipit aspernatur assumenda recusandae quasi
            ad, fugit velit ipsa expedita, accusamus rem omnis cupiditate
            architecto non laboriosam molestiae placeat
          </span>
        </div>
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
  );
};

export default FormBuilder;
