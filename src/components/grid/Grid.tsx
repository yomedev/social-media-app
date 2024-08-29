"use client";

import { cn } from "@/lib/utils";
import React from "react";

type GridRepeat = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  cols?: GridRepeat;
  rows?: GridRepeat;
  gap?: 1 | 2 | 3 | 4;
  align?: "start" | "center" | "end";
  className?: string;
};

type GridItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  colSpan?: GridRepeat | "full";
  rowSpan?: GridRepeat | "full";
  justifySelf?: "start" | "center" | "end";
  className?: string;
};

const getGridColsClass = (cols: GridRepeat | undefined) => {
  switch (cols) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    default:
      return "";
  }
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { children, cols, rows, gap, align, className, ...props }: GridProps,
    ref
  ) => (
    <div
      ref={ref}
      className={cn("grid", className, {
        [`grid-cols-${cols}`]: cols,
        [`grid-rows-${rows}`]: rows,
        [`gap-${gap}`]: gap,
        [`items-${align}`]: align,
      })}
      {...props}
    >
      {children}
    </div>
  )
);

Grid.displayName = "Grid";

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      children,
      colSpan,
      rowSpan,
      justifySelf,
      className,
      ...props
    }: GridItemProps,
    ref
  ) => (
    <div
      ref={ref}
      className={cn({
        [`col-span-${colSpan}`]: colSpan,
        [`row-span-${rowSpan}`]: rowSpan,
        [`justify-self-${justifySelf}`]: justifySelf,
      })}
      {...props}
    >
      {children}
    </div>
  )
);

GridItem.displayName = "GridItem";

export { Grid, GridItem };

// export default function Grid({
//   children,
//   cols,
//   rows,
//   gap,
//   align,
//   className,
// }: GridProps) {
//   const composedClassName = cn(
//     "grid",
//     {
//       [`grid-cols-${cols}`]: cols,
//       [`grid-rows-${rows}`]: rows,
//       [`gap-${gap}`]: gap,
//       [`items-${align}`]: align,
//     },
//     className
//   );

//   return <div className={composedClassName}>{children}</div>;
// }
