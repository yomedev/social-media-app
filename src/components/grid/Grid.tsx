import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 1 | 2 | 3 | 4;
  align?: "start" | "center" | "end";
  className?: string;
};

export default function Grid({ children, cols, rows, gap, align, className }: GridProps) {
  const composedClassName = cn("grid", className, {
    [`grid-cols-${cols?.toString()}`]: cols,
    [`grid-rows-${rows?.toString()}`]: rows,
    [`gap-${gap?.toString()}`]: gap,
    [`items-${align}`]: align,
  });

  return <div className={composedClassName}>{children}</div>;
}
