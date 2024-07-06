import classNames from "classnames";
import "./Flex.scss";

type FlexProps = {
  children: React.ReactNode;
  align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
  direction?: "row" | "column" | undefined;
  gap?: number | [number, number] | undefined;
  justify?: "start" | "end" | "center";
  noWrap?: boolean | undefined;
  reverse?: boolean | undefined;
};

export default function Flex({
  children,
  align = "start",
  direction = "row",
  gap,
  justify = "start",
  noWrap,
  reverse,
}: FlexProps) {
  const flexWrapMode = noWrap ? "flex--nowrap" : "flex--wrap";
  const className = classNames(
    "flex",
    `flex--align-${align}`,
    `flex--justify-${justify}`,
    `flex--direction-${direction}`,
    flexWrapMode
  );
  return <div className={className}>{children}</div>;
}
