import React from "react";
import DotBackground from "@/components/backgrounds/DotBackground";
import FormContentHeader from "../form-content/FormContentHeader";
import FormContentFormFields from "../form-content/FormContentFormFields";
import FormBuilderProvider from "@/providers/form-builder-provider";

type Props = {
  ticketCategoryId: string;
};

const FormBuilder = ({ ticketCategoryId }: Props) => {
  return (
    <div className="h-full w-full relative shadow-md">
      <DotBackground />
      <FormBuilderProvider value={null}>
        <div className="h-[96%] min-w-[350px] max-w-[720px] flex flex-col gap-4 bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto p-4 border border-muted shadow-md z-2">
          <FormContentHeader ticketCategoryId={ticketCategoryId} />
          <FormContentFormFields />
        </div>
      </FormBuilderProvider>
    </div>
  );
};

export default FormBuilder;
