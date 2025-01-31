import React from "react";

const page = async ({ params }: { params: Promise<{ ticketId: string }> }) => {
  const { ticketId } = await params;

  return <div>page</div>;
};

export default page;
