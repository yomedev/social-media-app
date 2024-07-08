import { Separator } from "../Separator";
import "./PanelHeader.scss";

type PanelHeaderProps = {
  children: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
};

export default function PanelHeader({ children, before, after }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <div className="panel-header__in">
        <div className="panel-header__before">{before}</div>
        <div className="panel-header__content">
          <span>{children}</span>
        </div>
        <div className="panel-header__after">{after}</div>
      </div>
      <Separator />
    </div>
  );
}
