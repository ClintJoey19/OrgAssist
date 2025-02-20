import React from "react";
import TicketCategoriesList from "./components/TicketCategoriesList";
import TicketCategorySearchFilters from "./components/TicketCategorySearchFilters";
import CreateTicketCategoryForm from "./forms/CreateTicketCategoryForm";

const page = () => {
  return (
    <section className="workspace-page">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h3 className="h3">Ticket categories</h3>
          <p className="sub-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            excepturi temporibus vitae! Aut, soluta commodi!
          </p>
        </div>
        <div>
          <CreateTicketCategoryForm />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-end gap-4">
          <TicketCategorySearchFilters />
        </div>
        <TicketCategoriesList />
      </div>
    </section>
  );
};

export default page;
