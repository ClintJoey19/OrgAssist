import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

type Props = {
  ticketCategoryId: string;
};

const FormBuilderInfo = ({ ticketCategoryId }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="group-label">Title</span>
        <p className="title">Ticket group name</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="group-label">Icon</span>
        <div className="grid grid-cols-[40px_1fr] items-center gap-4">
          <div className="relative h-10 aspect-square overflow-hidden rounded-md border border-sidebar">
            <Image
              src={`/ticket-default-placeholders/placeholder-${ticketCategoryId}.jpg`}
              alt="Ticket category logo"
              fill
              className="object-center object-cover"
            />
          </div>
          <div>
            <Input type="file" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="group-label">Description</span>
        <p className="sub-text text-justify line-clamp-[10]">
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

export default FormBuilderInfo;
