import React from "react";
import FormBuilder from "./components/form-builder/FormBuilder";
import FormBuilderSidebar from "./components/form-builder/FormBuilderSidebar";
import TicketCategoryHeader from "./components/header/TicketCategoryHeader";

type Params = {
  ticketCategoryId: string;
};

const page = async ({ params }: { params: Promise<Params> }) => {
  const { ticketCategoryId } = await params;

  return (
    <section className="h-[93vh] flex">
      <div className="w-full h-full flex flex-grow flex-col gap-4 p-4">
        <TicketCategoryHeader ticketCategoryId={ticketCategoryId} />
        <FormBuilder ticketCategoryId={ticketCategoryId} />
      </div>
      <FormBuilderSidebar />
    </section>
  );
};

export default page;
