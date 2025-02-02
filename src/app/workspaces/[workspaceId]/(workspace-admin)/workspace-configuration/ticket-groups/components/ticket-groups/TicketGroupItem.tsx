"use client";
import React, { forwardRef } from "react";
import { TicketGroup } from "./TicketGroups";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  group: TicketGroup;
};

const TicketGroupItem = forwardRef<HTMLDivElement, Props>(({ group }, ref) => {
  const { workspaceId } = useParams();
  const { id, name, description, logo } = group;

  return (
    <Card ref={ref} className="overflow-hidden">
      <Link
        href={`/workspaces/${workspaceId}/workspace-configuration/ticket-groups/${id}`}
        className="grid grid-cols-[80px_1fr]"
      >
        <div className="h-20 w-20 aspect-square relative">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-center object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <p className="title">{name}</p>
          <span className="sub-text line-clamp-2">{description}</span>
        </div>
      </Link>
    </Card>
  );
});

export default TicketGroupItem;
