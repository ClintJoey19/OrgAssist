import React from "react";
import TicketGroups from "./TicketGroups";
import TicketGroupActions from "./TicketGroupActions";

const TicketConfigurations = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h4 className="h4">Ticket groups</h4>
          <p className="sub-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut
            soluta aspernatur eius, illo ea.
          </p>
        </div>
        <div>
          <TicketGroupActions />
        </div>
      </div>
      <TicketGroups />
    </div>
  );
};

export default TicketConfigurations;
