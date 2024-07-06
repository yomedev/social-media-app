import classNames from "classnames";
import "./Panel.scss";
import React from "react";
import { Separator } from "../Separator";

type PanelProps = {
  children: React.ReactNode;
  mode: "card" | "plain";
  rounded?: boolean;
  header?: string | undefined;
};

export default function Panel({
  children,
  mode = "plain",
  rounded,
  header,
}: PanelProps) {
  const className = classNames("panel", `panel--mode-${mode}`, {
    "panel--rounded": rounded,
  });
  return <div className={className}>
    <div className="panel__header">
    <button></button>
    <h2 className="panel__header">{header}</h2>
    </div>
    <Separator />
    <div className="panel__content"></div>
    {children}
    </div>;
}
