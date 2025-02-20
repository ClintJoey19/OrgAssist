import React from "react";
import FormContentHeader from "./FormContentHeader";
import FormContentFormFields from "./FormContentFormFields";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  ticketCategoryId: string;
};

const FormContent = ({ ticketCategoryId }: Props) => {
  return (
    <div className="h-[96%] min-w-[350px] max-w-[720px] flex flex-col gap-4 bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-muted shadow-md z-2">
      <ScrollArea className="">
        <div className="flex flex-col gap-4 p-4">
          <FormContentHeader ticketCategoryId={ticketCategoryId} />
          <FormContentFormFields />
        </div>
      </ScrollArea>
    </div>
  );
};

export default FormContent;
