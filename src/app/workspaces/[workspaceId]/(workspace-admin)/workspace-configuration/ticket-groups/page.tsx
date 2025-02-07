import React from "react";
import TicketGroupActions from "./components/ticket-groups/TicketGroupActions";
import TicketGroups from "./components/ticket-groups/TicketGroups";

const page = () => {
  return (
    <section className="workspace-page">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h3 className="h3">Ticket groups</h3>
          <p className="sub-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut
            soluta aspernatur eius, illo ea.
          </p>
        </div>
        <div>
          <TicketGroupActions />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-end gap-4">
          Filters and Search
        </div>
        <TicketGroups />
      </div>
    </section>
  );
};

export default page;
