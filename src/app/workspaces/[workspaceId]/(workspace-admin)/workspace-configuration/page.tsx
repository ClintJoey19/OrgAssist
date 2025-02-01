import React from "react";
import TicketConfigurations from "./components/ticket-groups/TicketConfigurations";

const page = () => {
  return (
    <section className="workspace-page">
      <div className="flex justify-between items-center gap-4">
        <h3 className="h3">Workspace configuration</h3>
      </div>
      <div className="flex flex-col gap-4">
        <TicketConfigurations />
      </div>
    </section>
  );
};

export default page;
