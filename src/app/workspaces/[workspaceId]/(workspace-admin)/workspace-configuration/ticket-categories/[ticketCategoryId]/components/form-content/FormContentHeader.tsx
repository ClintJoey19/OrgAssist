import Image from "next/image";
import React from "react";

type Props = {
  ticketCategoryId: string;
};

const FormContentHeader = ({ ticketCategoryId }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-[32px_1fr] items-center gap-2">
        <div className="relative h-8 aspect-square overflow-hidden rounded-md border border-sidebar">
          <Image
            src={`/ticket-default-placeholders/placeholder-${ticketCategoryId}.jpg`}
            alt="Ticket category logo"
            fill
            className="object-center object-cover"
          />
        </div>
        <p className="flex-grow text-lg line-clamp-1">
          Ticket group name {ticketCategoryId}
        </p>
      </div>
      <span className="sub-text text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam
        officiis, natus praesentium quas, velit quod commodi, corporis quam
        doloremque error ex ad architecto itaque nulla dolorum voluptate.
        Corrupti suscipit aspernatur assumenda recusandae quasi ad, fugit velit
        ipsa expedita, accusamus rem omnis cupiditate architecto non laboriosam
        molestiae placeat
      </span>
    </div>
  );
};

export default FormContentHeader;
