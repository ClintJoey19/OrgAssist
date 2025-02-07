import React, { forwardRef } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

type CardData = {
  id: string;
  name: string;
  description: string;
  logo: string;
};

type Props = {
  data: CardData;
  href: string;
};

const NavigationCard = forwardRef<HTMLDivElement, Props>(
  ({ data, href }, ref) => {
    const { id, name, logo, description } = data;

    return (
      <Card ref={ref} className="overflow-hidden">
        <Link href={href} className="grid grid-cols-[80px_1fr]">
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
  }
);

export default NavigationCard;
