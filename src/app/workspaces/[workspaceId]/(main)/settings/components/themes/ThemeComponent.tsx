import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  theme?: string;
};

const ThemeComponent = ({ theme }: Props) => {
  return (
    <div className="relative aspect-video w-full">
      <Image src={`/themes/${theme}-theme.png`} alt={`${theme}-theme`} fill />
    </div>
  );
};

export default ThemeComponent;
