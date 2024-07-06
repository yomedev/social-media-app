import React from "react";
import "./SplitCol.scss";

type SplitColProps = {
  children: React.ReactNode;
  width: number;
};

export default function SplitCol({ children, width }: SplitColProps) {
  return (
    <div className="split-col" style={{ minWidth: width }}>
      {children}
    </div>
  );
}
