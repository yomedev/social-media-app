import React from "react";
import "./Caption.scss";
import classNames from "classnames";

type CaptionProps = {
  children: React.ReactNode;
  Component?: React.ElementType | undefined;
  normalize?: boolean | undefined;
  inline?: boolean | undefined;
  weight?: "1" | "2" | "3" | undefined;
  level?: "1" | "2" | "3" | undefined;
};

export default function Caption({
  children,
  Component = "span",
  normalize,
  inline,
  weight = "3",
  level = "1",
}: CaptionProps) {
  return (
    <Component
      className={classNames(
        "caption",
        `caption--level-${level}`,
        `caption--weight-${weight}`,
        {
          "caption--normalize": normalize,
          "caption--inline": inline,
        }
      )}
    >
      {children}
    </Component>
  );
}
