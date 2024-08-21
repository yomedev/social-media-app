import type { Control, FieldValues } from "react-hook-form";

export type FormState = {
  type: "error" | "success";
  message: string;
};
export type FormProps = {
  action: (formData: FormData) => Promise<FormState>;
  onSuccess?: () => void;
  onError?: () => void;
};

export type FormFieldProps<Type extends FieldValues> = {
  control: Control<Type, any>;
  errorMessage?: string | undefined;
};
