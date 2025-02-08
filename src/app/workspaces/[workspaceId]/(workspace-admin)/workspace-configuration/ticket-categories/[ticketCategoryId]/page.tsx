import React from "react";

type Params = {
  ticketCategoryId: string;
};

const page = async ({ params }: { params: Promise<Params> }) => {
  const { ticketCategoryId } = await params;

  return (
    <section className="workspace-page">
      <div>
        <div>
          <h3 className="h3">Ticket category name {ticketCategoryId}</h3>
        </div>
      </div>
      <div>Content here</div>
    </section>
  );
};

export default page;
