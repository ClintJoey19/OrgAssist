"use client";
import { useParams } from "next/navigation";
import React, { forwardRef } from "react";
import { TicketCategory } from "./TicketCategoriesList";
import NavigationCard from "@/components/global/NavigationCard";

type Props = {
  category: TicketCategory;
};

const TicketCategoryItem = forwardRef<HTMLDivElement, Props>(
  ({ category }, ref) => {
    const { workspaceId } = useParams();
    const { id, logo, name, description } = category;
    const href = `/workspaces/${workspaceId}/workspace-configuration/ticket-categories/${id}`;

    return <NavigationCard ref={ref} data={category} href={href} />;
  }
);

export default TicketCategoryItem;
