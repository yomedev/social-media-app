import classNames from "classnames";
import "./ButtonGroup.scss";

type ButtonGroupProps = {
  children: React.ReactNode;
  mode?: "vertical" | "horizontal" | undefined;
  align?: "left" | "right" | "center" | "between" | undefined;
  gap?: number | undefined;
  stretched?: boolean | undefined;
};

export default function ButtonGroup({
  children,
  gap = 0,
  mode = "horizontal",
  align = "left",
  stretched,
}: ButtonGroupProps) {
  return (
    <div
      style={{ "--button-group-gap": gap } as React.CSSProperties}
      className={classNames(
        "button-group",
        `button-group--mode-${mode}`,
        `button-group--align-${align}`,
        stretched && "button-group--stretched"
      )}
    >
      {children}
    </div>
  );
}
