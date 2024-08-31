import { cn } from "@/lib/utils";

type FlexProps<T> = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  gap?: 1 | 2 | 3 | 4;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  component?: React.ElementType;
  componentProps?: T;
};

function Flex<T>({
  children,
  className,
  direction,
  gap,
  justify,
  align,
  componentProps,
  component,
}: FlexProps<T>) {
  const composedClassName = cn("flex", className, {
    [`flex-${direction}`]: direction,
    [`gap-${gap}`]: gap,
    [`justify-${justify}`]: justify,
    [`items-${align}`]: align,
  });

  const Comp = component || "div";

  return (
    <Comp {...componentProps} className={composedClassName}>
      {children}
    </Comp>
  );
}

type FlexItemProps<T> = {
  children: React.ReactNode;
  className?: string;
  flex?: 1 | "none" | "auto" | "initial";
  component?: React.ElementType;
  componentProps?: T;
  alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
  justifySelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
};

function FlexItem<T>({
  children,
  flex,
  className,
  component,
  componentProps,
  alignSelf,
  justifySelf,
}: FlexItemProps<T>) {
  const composedClassName = cn(className, {
    [`flex-${flex}`]: flex,
    [`self-${alignSelf}`]: alignSelf,
    [`justify-self-center`]: justifySelf,
  });
  const Comp = component || "div";
  return (
    <Comp {...componentProps} className={composedClassName}>
      {children}
    </Comp>
  );
}

export { Flex, FlexItem };
