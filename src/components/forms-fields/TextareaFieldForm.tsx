import React from "react";
import { FormControl, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

type Props = {
  // attribute: string;
  // label: string;
  // description: string;
  // isRequired: boolean;
};

const TextareaFieldForm = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* <FormLabel>Textarea Field</FormLabel>
      <FormControl>
        <Textarea placeholder="Textarea Field" />
      </FormControl>
      <FormMessage /> */}
      <Label>Textarea Field</Label>
      <Textarea rows={5} placeholder="Textarea Field" />
    </div>
  );
};

export default TextareaFieldForm;
