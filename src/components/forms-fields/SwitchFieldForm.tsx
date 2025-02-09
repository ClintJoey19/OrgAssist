import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";

const SwitchFieldForm = () => {
  return (
    <div className="flex justify-between items-start gap-4">
      <Label>Switch Field</Label>
      <Switch />
    </div>
  );

  return (
    <FormItem className="flex flex-col gap-2">
      <FormLabel>Switch Field</FormLabel>
      <FormControl>
        <Switch />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default SwitchFieldForm;
