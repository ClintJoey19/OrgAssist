import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import React from "react";

const TicketCategoryActions = () => {
  const isPublished = true;

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        Edit <Pencil className="h-5 w-5" />
      </Button>
      <Button variant={isPublished ? "default" : "ghost"} size="sm">
        {isPublished ? "Published" : "Publish"}
      </Button>
    </div>
  );
};

export default TicketCategoryActions;
