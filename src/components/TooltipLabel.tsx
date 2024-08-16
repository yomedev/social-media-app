import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { CircleAlert } from "lucide-react";
import { FormLabel, FormMessage } from "./ui/form";

type TooltipLabelProps = {
  label: string;
  errorMessage?: string;
};

export default function TooltipLabel({
  label,
  errorMessage,
}: TooltipLabelProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <FormLabel className="flex gap-1 items-center">
          {label}
          {errorMessage && (
            <CircleAlert size={14} className="text-destructive" />
          )}
        </FormLabel>
      </TooltipTrigger>
      {errorMessage && (
        <TooltipContent align="start">
          <FormMessage />
        </TooltipContent>
      )}
    </Tooltip>
  );
}
