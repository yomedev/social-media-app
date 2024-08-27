type ResponsiveContainerProps = {
  children: React.ReactNode;
};
export default function ResponsiveContainer({
  children,
}: ResponsiveContainerProps) {
  return <div className="container mx-auto h-full">{children}</div>;
}
