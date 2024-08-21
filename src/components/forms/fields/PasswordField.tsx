import TooltipLabel from "@/components/TooltipLabel";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldProps } from "@/types";
import { FieldValues, Path } from "react-hook-form";

type PasswordFieldProps<T extends FieldValues> = FormFieldProps<T> & {
  link?: JSX.Element;
  name?: string;
  label?: string;
};

export default function PasswordField<T extends FieldValues>({
  control,
  errorMessage,
  link,
  name = "password",
  label = "Password",
}: PasswordFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <div className="flex items-center">
            <TooltipLabel label={label} errorMessage={errorMessage} />
            {link}
          </div>
          <FormControl>
            <Input
              type="password"
              {...field}
              className={`${errorMessage && "border-destructive"}`}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
