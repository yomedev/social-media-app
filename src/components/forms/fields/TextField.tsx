import TooltipLabel from "@/components/TooltipLabel";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldProps } from "@/types";
import { Control, FieldValues, Path } from "react-hook-form";

type TextFieldProps<T extends FieldValues> = FormFieldProps<T> & {
  label: string;
  name: string;
  placeholder?: string;
};

export default function TextField<T extends FieldValues>({
  control,
  errorMessage,
  label,
  name,
  placeholder,
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem className="grid">
          <TooltipLabel label={label} errorMessage={errorMessage} />
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={`${errorMessage && "border-destructive"}`}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
