import React from "react";
import TicketGroupItem from "./TicketGroupItem";

export type TicketGroup = {
  id: string;
  //   workspaceOwner: string;
  name: string;
  description: string;
  logo: string;
  // createdAt: Date;
  // updatedAt: Date;
};

const ticketGroups: TicketGroup[] = [
  {
    id: "1",
    name: "Repository access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, nulla aut at magni harum.",
    logo: "/ticket-default-placeholders/placeholder-1.jpg",
  },
  {
    id: "2",
    name: "Software access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, nulla aut at magni harum.",
    logo: "/ticket-default-placeholders/placeholder-2.jpg",
  },
  {
    id: "3",
    name: "Hardware access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, nulla aut at magni harum.",
    logo: "/ticket-default-placeholders/placeholder-3.jpg",
  },
  {
    id: "4",
    name: "Troubleshoot access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, nulla aut at magni harum.",
    logo: "/ticket-default-placeholders/placeholder-4.jpg",
  },
  {
    id: "5",
    name: "Repository access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, nulla aut at magni harum.",
    logo: "/ticket-default-placeholders/placeholder-5.jpg",
  },
  {
    id: "6",
    name: "Repository access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, nulla aut at magni harum.",
    logo: "/ticket-default-placeholders/placeholder-6.jpg",
  },
];

const TicketGroups = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {ticketGroups.map((group) => (
        <TicketGroupItem key={group.id} group={group} />
      ))}
    </div>
  );
};

export default TicketGroups;
