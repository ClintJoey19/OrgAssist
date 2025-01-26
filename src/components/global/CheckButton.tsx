import { Check } from "lucide-react";
import React from "react";

const CheckButton = () => {
  return (
    <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center">
      <Check className="h-3 w-3 text-white" />
    </div>
  );
};

export default CheckButton;
