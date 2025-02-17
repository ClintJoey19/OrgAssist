import React from "react";
import FormBuilderActions from "./FormBuilderActions";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormBuilderFields from "./FormBuilderFields";
import FormBuilderInfo from "./FormBuilderInfo";

type Props = {
  ticketCategoryId: string;
};

const FormBuilderSidebar = ({ ticketCategoryId }: Props) => {
  return (
    <ScrollArea className="w-full h-full bg-background border-l border-muted">
      <div className="flex flex-col gap-4 p-4">
        <FormBuilderActions />
        <FormBuilderInfo ticketCategoryId={ticketCategoryId} />
        <FormBuilderFields />
      </div>
    </ScrollArea>
  );
};

export default FormBuilderSidebar;
