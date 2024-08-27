import { cn } from "@/lib/utils";

type FlexItemProps = {
  children: React.ReactNode;
  className?: string;
  flex?: 1 | "none" | "auto" | "initial";
  component?: React.ComponentType<{
    className?: string;
    children: React.ReactNode;
  }>;
  componentProps?: { [index: string]: any };
  alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
  justifySelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
};

export default function FlexItem({
  children,
  flex,
  className,
  component,
  componentProps,
  alignSelf,
  justifySelf,
}: FlexItemProps) {
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
