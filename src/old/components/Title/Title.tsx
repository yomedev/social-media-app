import classNames from "classnames";
import "./Title.scss";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
  Component?: React.ElementType | undefined;
  level?: "1" | "2" | "3" | undefined;
  weight?: "1" | "2" | "3" | undefined;
  inline?: boolean | undefined;
  normalize?: boolean | undefined;
};

export default function Title({
  Component = "span",
  children,
  level = "1",
  weight,
  inline,
  normalize,
}: TitleProps) {
  return (
    <Component
      className={classNames(`title--level-${level}`, `title--weight${weight}`, {
        "title--inline": inline,
        "title--normalize": normalize,
      })}
    >
      {children}
    </Component>
  );
}
