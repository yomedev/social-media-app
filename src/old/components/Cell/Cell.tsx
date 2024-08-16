import "./Cell.scss";

type CellProps = {
  children: React.ReactNode;
  before?: React.ReactNode | undefined;
  after?: React.ReactNode | undefined;
  subtitle?: React.ReactNode | undefined;
};

export default function Cell({ children, before, after, subtitle }: CellProps) {
  return (
    <div className="cell">
      {before && <div className="cell__before">{before}</div>}
      <div className="cell__middle">
        <div className="cell__content">{children}</div>
        <div className="cell__content">{subtitle}</div>
      </div>
      {after && <div className="cell__after">{after}</div>}
    </div>
  );
}
