import React from "react";
import "./Spacing.scss";

type SpacingProps = {
  size?: number | undefined;
};

export default function Spacing({ size = 8 }: SpacingProps) {
  return (
    <div className="spacing" style={{ "--internal-spacing-gap": size } as React.CSSProperties} />
  );
}
