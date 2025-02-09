import Image from "next/image";
import React from "react";

type Props = {
  ticketCategoryId: string;
};

const TicketCategoryHeader = ({ ticketCategoryId }: Props) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="relative h-8 aspect-square rounded-md overflow-hidden">
            <Image
              src={`/ticket-default-placeholders/placeholder-${ticketCategoryId}.jpg`}
              alt="Ticket category logo"
              fill
              className="object-cover object-center"
            />
          </div>
          <h3 className="h3 line-clamp-1">
            Ticket category name {ticketCategoryId}
          </h3>
        </div>
        <p className="sub-text line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nam officiis, natus praesentium quas, velit quod commodi, corporis
          quam doloremque error ex ad architecto itaque nulla dolorum voluptate.
          Corrupti suscipit aspernatur assumenda recusandae quasi ad, fugit
          velit ipsa expedita, accusamus rem omnis cupiditate architecto non
          laboriosam molestiae placeat
        </p>
      </div>
    </div>
  );
};

export default TicketCategoryHeader;
