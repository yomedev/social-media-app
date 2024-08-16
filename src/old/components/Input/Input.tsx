import React from "react";
import "./Input.scss";
import classNames from "classnames";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  align?: "left" | "right" | "center" | undefined;
  status?: "default" | "error" | "valid" | undefined;
  after?: React.ReactNode | undefined;
};

export default function Input({
  after,
  align = "left",
  type = "text",
  status = "default",
  className,
  disabled,
  ...restProps
}: InputProps) {
  return (
    <span
      className={classNames("form-field", {
        "form-field--status-error": status === "error",
        "form-field--status-valid": status === "valid",
        "form-field--disabled": disabled,
      })}
    >
      <input
        className={classNames("form-field__input", {
          "form-field__input--has-after": after,
          "form-field__input--align-center": align === "center",
          "form-field__input--align-right": align === "right",
        })}
        type={type}
        {...restProps}
      />
      {after && <span className="form-field__after">{after}</span>}
    </span>
  );
}
