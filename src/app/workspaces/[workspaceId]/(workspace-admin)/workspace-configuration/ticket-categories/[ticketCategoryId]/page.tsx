import React from "react";
import FormBuilder from "./components/form-builder/FormBuilder";

type Params = {
  ticketCategoryId: string;
};

const page = async ({ params }: { params: Promise<Params> }) => {
  const { ticketCategoryId } = await params;

  return <FormBuilder ticketCategoryId={ticketCategoryId} />;
};

export default page;
