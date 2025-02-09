import React from "react";
import FormBuilderActions from "./FormBuilderActions";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormBuilderFields from "./FormBuilderFields";

const FormBuilderSidebar = () => {
  return (
    <ScrollArea className="w-[350px] h-full bg-background border-l border-muted">
      <div className="flex flex-col gap-4 p-4">
        <FormBuilderActions />
        <FormBuilderFields />
      </div>
    </ScrollArea>
  );
};

export default FormBuilderSidebar;
