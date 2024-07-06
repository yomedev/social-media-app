import classNames from "classnames";
import "./Separator.scss";

type SeparatorProps = {
  padded?: boolean | undefined;
};

export default function Separator({ padded }: SeparatorProps) {
  const className = classNames("separator", { "separator--padded": padded });
  return (
    <div className={className}>
      <hr className="separator__in" />
    </div>
  );
}
