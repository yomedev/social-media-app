import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FormFieldProps } from "@/types";

export default function OTPField({
  control,
  errorMessage,
}: FormFieldProps<{ otp: string }>) {
  return (
    <FormField
      control={control}
      name="otp"
      render={({ field }) => (
        <FormItem>
          {errorMessage && <FormMessage />}
          <FormControl>
            <InputOTP pattern="^[a-zA-Z0-9]+$" maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
