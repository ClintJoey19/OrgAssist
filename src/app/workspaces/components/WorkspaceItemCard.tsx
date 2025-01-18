import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const WorkspaceItemCard = ({ children, className }: Props) => {
  return (
    <Card
      className={cn(
        "h-60 border-2 border-transparent hover:border-2 hover:border-primary transition p-4",
        className
      )}
    >
      {children}
    </Card>
  );
};

export default WorkspaceItemCard;
