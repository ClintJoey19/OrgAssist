import React from "react";
import FormBuilder from "./components/form-builder/FormBuilder";
import FormBuilderSidebar from "./components/form-builder/FormBuilderSidebar";

type Params = {
  ticketCategoryId: string;
};

const page = async ({ params }: { params: Promise<Params> }) => {
  const { ticketCategoryId } = await params;

  return (
    <section className="h-[93vh] grid grid-cols-[1fr_300px]">
      <div className="w-full h-full flex flex-grow flex-col gap-4">
        <FormBuilder ticketCategoryId={ticketCategoryId} />
      </div>
      <FormBuilderSidebar ticketCategoryId={ticketCategoryId} />
    </section>
  );
};

export default page;
