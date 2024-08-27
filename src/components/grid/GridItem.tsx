import { cn } from "@/lib/utils";

type GridItemProps = {
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
  justifySelf?: "start" | "center" | "end";
};

export default function GridItem({
  children,
  colSpan,
  rowSpan,
  justifySelf,
}: GridItemProps) {
  const className = cn({
    [`col-span-${colSpan?.toString()}`]: colSpan,
    [`row-span-${rowSpan?.toString()}`]: rowSpan,
    [`justify-self-${justifySelf}`]: justifySelf,
  });
  return <div className={className}>{children}</div>;
}
