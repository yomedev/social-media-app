import { cn } from "@/lib/utils";

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  gap?: 1 | 2 | 3 | 4;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  flex?: 1 | "none" | "auto" | "initial";
  // component?: React.ElementType;
};

export default function Flex({
  children,
  className,
  direction,
  gap,
  justify,
  align,
  flex
  // component,
}: FlexProps) {
  const composedClassName = cn("flex", className, {
    [`flex-${direction}`]: direction,
    [`gap-${gap}`]: gap,
    [`justify-${justify}`]: justify,
    [`items-${align}`]: align,
    [`flex-${flex}`]: flex,
  });
  // const Comp = component || "div";
  return <div className={composedClassName}>{children}</div>;
}
