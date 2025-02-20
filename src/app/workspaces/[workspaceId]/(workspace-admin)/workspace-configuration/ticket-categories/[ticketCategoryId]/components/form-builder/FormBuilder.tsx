"use client";
import React from "react";
import DotBackground from "@/components/backgrounds/DotBackground";
import FormBuilderProvider from "@/providers/form-builder-provider";
import FormBuilderSidebar from "./FormBuilderSidebar";
import { DndContext } from "@dnd-kit/core";
import FormContent from "../form-content/FormContent";

type Props = {
  ticketCategoryId: string;
};

const FormBuilder = ({ ticketCategoryId }: Props) => {
  return (
    <FormBuilderProvider value={null}>
      <DndContext>
        <section className="h-[93vh] grid grid-cols-[1fr_300px]">
          <div className="w-full h-full flex flex-grow flex-col gap-4">
            <div className="h-full w-full relative shadow-md">
              <DotBackground />
              <FormContent ticketCategoryId={ticketCategoryId} />
            </div>
          </div>
          <FormBuilderSidebar ticketCategoryId={ticketCategoryId} />
        </section>
      </DndContext>
    </FormBuilderProvider>
  );
};

export default FormBuilder;
