import { Trash } from "lucide-react";
import { eliteDateFormat } from "./providers";

export const sonnerFunctionality = () => {
  const dateSet = {
    description: eliteDateFormat(),
    action: {
      label: <Trash size={24} />,
      onClick: () => {},
    },
  }
  return dateSet
};
