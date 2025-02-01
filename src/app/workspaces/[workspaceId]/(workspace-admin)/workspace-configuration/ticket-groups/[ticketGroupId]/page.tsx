import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ ticketGroupId: string }>;
}) => {
  const { ticketGroupId } = await params;

  return <div>page</div>;
};

export default page;
