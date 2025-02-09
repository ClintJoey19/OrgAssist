import React from "react";
import { FormControl, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  type?: "text" | "password" | "file" | "email" | "number";
};

const InputFieldForm = ({ type = "text" }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {/* <FormLabel>Input Field</FormLabel>
      <FormControl>
        <Input placeholder="Input Field" />
      </FormControl>
      <FormMessage /> */}
      <Label>Input Field</Label>
      <Input placeholder="Input Field" type={type} />
    </div>
  );
};

export default InputFieldForm;
