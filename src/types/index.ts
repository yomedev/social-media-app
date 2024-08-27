import type { Control, FieldValues } from "react-hook-form";

type FormStateTypes = "idle" | "error" | "success";

export type FormState = {
  type: FormStateTypes;
  message?: string;
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
