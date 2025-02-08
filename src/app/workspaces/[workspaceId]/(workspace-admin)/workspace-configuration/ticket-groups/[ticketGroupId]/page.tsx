import React from "react";
import TicketCategoriesList from "../../ticket-categories/components/TicketCategoriesList";
import TicketCategoryActions from "../../ticket-categories/components/TicketCategoryActions";
import TicketCategorySearchFilters from "../../ticket-categories/components/TicketCategorySearchFilters";

type Params = {
  ticketGroupId: string;
};

const page = async ({ params }: { params: Promise<Params> }) => {
  const { ticketGroupId } = await params;

  return (
    <section className="workspace-page">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h3 className="h3">Ticket group name {ticketGroupId}</h3>
          <p className="sub-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum at
            magni similique quibusdam veniam perferendis.
          </p>
        </div>
        <div>
          <TicketCategoryActions />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <h4 className="h4">Ticket Categories</h4>
          <TicketCategorySearchFilters />
        </div>
        <TicketCategoriesList />
      </div>
    </section>
  );
};

export default page;
