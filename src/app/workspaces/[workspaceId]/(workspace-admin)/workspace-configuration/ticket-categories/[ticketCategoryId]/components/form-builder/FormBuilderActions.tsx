import { Button } from "@/components/ui/button";
import { Eye, Save } from "lucide-react";
import React from "react";

const FormBuilderActions = () => {
  const isPublished = false;

  return (
    <div className="flex flex-col gap-2">
      <span className="group-label">Actions</span>
      <div className="flex items-center justify-end gap-2">
        <Button variant="outline" size="sm">
          Preview <Eye className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          Save <Save className="h-4 w-4" />
        </Button>
        <Button variant={isPublished ? "default" : "outline"} size="sm">
          {isPublished ? "Published" : "Publish"}
        </Button>
      </div>
    </div>
  );
};

export default FormBuilderActions;
