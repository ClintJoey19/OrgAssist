import React from "react";
import TicketGroupItem from "../../ticket-groups/components/ticket-groups/TicketGroupItem";
import TicketCategoryItem from "./TicketCategoryItem";

type Props = {
  filters: {
    groupId: string;
  };
};

export type TicketCategory = {
  id: string;
  name: string;
  description: string;
  logo: string;
  //   groupId: string;
  //   workspaceId: string;
  //   createdAt: Date;
  //   updatedAt: Date;
};

const ticketCategories = [
  {
    id: "1",
    name: "Sample 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem repellat temporibus asperiores magni id.",
    logo: "/ticket-default-placeholders/placeholder-1.jpg",
  },
  {
    id: "2",
    name: "Sample 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem repellat temporibus asperiores magni id.",
    logo: "/ticket-default-placeholders/placeholder-2.jpg",
  },
  {
    id: "3",
    name: "Sample 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem repellat temporibus asperiores magni id.",
    logo: "/ticket-default-placeholders/placeholder-3.jpg",
  },
  {
    id: "4",
    name: "Sample 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem repellat temporibus asperiores magni id.",
    logo: "/ticket-default-placeholders/placeholder-4.jpg",
  },
  {
    id: "5",
    name: "Sample 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem repellat temporibus asperiores magni id.",
    logo: "/ticket-default-placeholders/placeholder-5.jpg",
  },
  {
    id: "6",
    name: "Sample 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem repellat temporibus asperiores magni id.",
    logo: "/ticket-default-placeholders/placeholder-6.jpg",
  },
];

// { filters }: Props

const TicketCategoriesList = () => {
  // fetch ticket categories here
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {ticketCategories.map((category) => (
        <TicketCategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default TicketCategoriesList;
