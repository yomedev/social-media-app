import React from "react";
import "./Text.scss";
import classNames from "classnames";

type TextProps = {
  children: React.ReactNode;
  Component?: React.ElementType | undefined;
  normalize?: boolean | undefined;
  inline?: boolean | undefined;
  weight?: "1" | "2" | "3" | undefined;
};

export default function Text({
  children,
  Component = "span",
  normalize,
  inline,
  weight = "3",
}: TextProps) {
  return (
    <Component
      className={classNames("text", `text--weight-${weight}`, {
        "text--normalize": normalize,
        "text--inline": inline,
      })}
    >
      {children}
    </Component>
  );
}
