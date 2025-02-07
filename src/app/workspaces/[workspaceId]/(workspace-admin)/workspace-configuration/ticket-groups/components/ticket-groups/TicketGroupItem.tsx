"use client";
import React, { forwardRef } from "react";
import { TicketGroup } from "./TicketGroups";
import { useParams } from "next/navigation";
import NavigationCard from "@/components/global/NavigationCard";

type Props = {
  group: TicketGroup;
};

const TicketGroupItem = forwardRef<HTMLDivElement, Props>(({ group }, ref) => {
  const { workspaceId } = useParams();
  const { id, name, description, logo } = group;
  const href = `/workspaces/${workspaceId}/workspace-configuration/ticket-groups/${id}`;

  return <NavigationCard ref={ref} data={group} href={href} />;
});

export default TicketGroupItem;
