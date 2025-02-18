import { FormBuilderContext } from "@/providers/form-builder-provider";
import { useContext } from "react";

const useFormBuilder = () => {
  const context = useContext(FormBuilderContext);

  if (!context)
    throw new Error("useFormBuilder must be used within FormBuilderContext");

  return context;
};

export default useFormBuilder;
