import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ ticketGroupId: string }>;
}) => {
  const { ticketGroupId } = await params;

  return (
    <section className="workspace-page">
      <div>
        <h3 className="h3">Ticket groups</h3>
      </div>
      <div>Content here</div>
    </section>
  );
};

export default page;
