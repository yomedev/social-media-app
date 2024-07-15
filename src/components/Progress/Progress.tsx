import classNames from "classnames";
import "./Progress.scss";

type ProgressProps = {
  appearance?: "accent" | "positive" | "negative" | "warning" | undefined;
  height?: number | undefined;
  value: number | undefined;
};

export default function Progress({
  value,
  appearance,
  height = 2,
}: ProgressProps) {
  return (
    <div
      style={{ height: height, borderRadius: height / 2 }}
      className={`progress progress--appearance-${appearance}`}
    >
      <div style={{ width: `${value}%` }} className="progress__in" />
    </div>
  );
}
