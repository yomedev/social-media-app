import { cn } from "@/lib/utils";
import React from "react";

type GridRepeat = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridProps<T> = {
  children: React.ReactNode;
  cols?: GridRepeat;
  rows?: GridRepeat;
  gap?: 1 | 2 | 3 | 4;
  align?: "start" | "center" | "end";
  className?: string;
  component?: React.ElementType;
  componentProps?: T;
};

type GridItemProps<T> = {
  children: React.ReactNode;
  colSpan?: GridRepeat | "full";
  rowSpan?: GridRepeat | "full";
  justifySelf?: "start" | "center" | "end";
  className?: string;
  component?: React.ElementType;
  componentProps?: T;
};

function Grid<T>({
  children,
  cols,
  rows,
  gap,
  align,
  className,
  component,
  componentProps,
}: GridProps<T>) {
  const composedClassName = cn("grid", className, {
    [`grid-cols-${cols}`]: cols,
    [`grid-rows-${rows}`]: rows,
    [`gap-${gap}`]: gap,
    [`items-${align}`]: align,
  });

  const Comp = component || "div";
  return (
    <Comp {...componentProps} className={composedClassName}>
      {children}
    </Comp>
  );
}

Grid.displayName = "Grid";

function GridItem<T>({
  children,
  colSpan,
  rowSpan,
  justifySelf,
  className,
  component,
  componentProps,
}: GridItemProps<T>) {
  const composedClassName = cn(
    {
      [`col-span-${colSpan}`]: colSpan,
      [`row-span-${rowSpan}`]: rowSpan,
      [`justify-self-${justifySelf}`]: justifySelf,
    },
    className
  );
  const Comp = component || "div";
  return (
    <Comp className={composedClassName} {...componentProps}>
      {children}
    </Comp>
  );
}

GridItem.displayName = "GridItem";

export { Grid, GridItem };
