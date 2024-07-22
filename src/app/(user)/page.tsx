import {
  Button,
  ChevronLeftIcon,
  FormItem,
  Panel,
  PanelHeader,
  Post,
  Separator,
  Textarea,
  XMarkIcon,
} from "@/components";
import "./page.scss";
import posts from "../../data/posts.json";

export default function Home() {
  return (
    <Panel mode="card" rounded>
      <PanelHeader
        before={<ChevronLeftIcon className="icon" />}
        after={<XMarkIcon className="icon" />}
      >
        Header
      </PanelHeader>
      <form action="">
        <FormItem>
          <Textarea />
        </FormItem>
        <Button>Add post</Button>
      </form>
      {posts.map((item) => (
        <>
          <Post {...item} key={item.postId} />
          <Separator />
        </>
      ))}
    </Panel>
  );
}
