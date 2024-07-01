import "./Button.scss";
import classNames from "classnames";

type ButtonProps = {
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
};

export default function Button({
  align = "center",
  children,
  mode = "primary",
  stretched,
  rounded,
  disabled,
  size = "m",
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
    <>
      <button className={className} disabled={disabled} type="button">
        {children}
      </button>
    </>
  );
}
