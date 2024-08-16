import classNames from "classnames";
import "./Panel.scss";
import React from "react";
import { Separator } from "../Separator";

type PanelProps = {
  children: React.ReactNode;
  mode: "card" | "plain";
  rounded?: boolean;
};

export default function Panel({
  children,
  mode = "plain",
  rounded,
}: PanelProps) {
  const className = classNames("panel", `panel--mode-${mode}`, {
    "panel--rounded": rounded,
  });
  return <div className={className}>{children}</div>;
}
