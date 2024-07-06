import { Button, Panel, Separator, SplitCol, SplitLayout } from "@/components";
import HomeIcon from "@/components/Icons/HomeIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import './page.scss'


export default function Home() {
  return (
    <Panel mode="card" rounded header="Home">
      <Button align="left">Left</Button>
      <Button align="center">Center</Button>
      <HomeIcon />
      <MessageIcon />
    </Panel>
  );
}
