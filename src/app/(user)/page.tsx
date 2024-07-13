import {
  Button,
  ChevronLeftIcon,
  Panel,
  PanelHeader,
  Separator,
  SplitCol,
  SplitLayout,
  XMarkIcon,
} from "@/components";
import HomeIcon from "@/components/Icons/HomeIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import "./page.scss";

export default function Home() {
  return (
    <Panel mode="card" rounded>
      <PanelHeader
        before={<ChevronLeftIcon className="icon" />}
        after={<XMarkIcon className="icon" />}
      >
        Header
      </PanelHeader>
      <Button align="left">Left</Button>
      <Button align="center">Center</Button>
      <HomeIcon />
      <MessageIcon />
    </Panel>
  );
}
