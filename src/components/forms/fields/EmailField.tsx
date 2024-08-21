import TooltipLabel from "@/components/TooltipLabel";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldProps } from "@/types";
import { FieldValues, Path } from "react-hook-form";

export default function EmailField<T extends FieldValues>({
  control,
  errorMessage,
}: FormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={"email" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <TooltipLabel label="Email" errorMessage={errorMessage} />
          <FormControl>
            <Input
              type="email"
              placeholder="m@example.com"
              {...field}
              className={`${errorMessage && "border-destructive"}`}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
