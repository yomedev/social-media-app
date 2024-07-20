import Link from "next/link";
import "./Button.scss";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  mode?: "primary" | "secondary" | "tertiary" | "outline" | "link";
  // appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | 'overlay' | 'accent-invariable';
  align?: "center" | "right" | "left";
  size?: "s" | "m" | "l";
  stretched?: boolean;
  // before?: React.ReactNode;
  // after?: React.ReactNode;
  // loading?: boolean;
  // disableSpinnerAnimation?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | undefined;
};

export default function Button({
  align = "center",
  children,
  mode = "primary",
  stretched,
  rounded,
  disabled,
  size = "m",
  type = "button",
  ...rest
}: ButtonProps) {
  const className = classNames(
    "button",
    `button--${mode}`,
    `button--size-${size}`,
    `button--align-${align}`,
    {
      "button--stretched": stretched,
      "button--rounded": rounded,
    }
  );

  return (
    <button {...rest} className={className} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
