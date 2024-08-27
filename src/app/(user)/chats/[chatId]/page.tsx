import Flex from "@/components/flex/Flex";
import FlexItem from "@/components/flex/FlexItem";
import MessageForm from "@/components/forms/MessageForm";
import Grid from "@/components/grid/Grid";
import GridItem from "@/components/grid/GridItem";
import Message from "@/components/Message";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const messages = [
  {
    id: 1,
    content: "Hello",
    isMy: true,
  },
  {
    id: 2,
    content: "Hi",
    isMy: false,
  },
  {
    id: 3,
    content: "How are you?",
    isMy: true,
  },
  {
    id: 4,
    content: "I'm fine",
    isMy: false,
  },
  {
    id: 5,
    content: "What about you?",
    isMy: false,
  },
  {
    id: 6,
    content: "I'm also fine",
    isMy: true,
  },
];

export default function Chat() {
  return (
    <Flex direction="col" className="h-[calc(100vh-5rem)] p-4">
      <FlexItem
        className="pb-4 pl-2"
        component={Grid}
        componentProps={{ cols: 4, rows: 1, align: "center" }}
      >
        <GridItem colSpan={1}>
          <Link href="/chats" className="flex gap-1 items-center w-fit">
            <ArrowLeft className="h-4 w-4" />
            All chats
          </Link>
        </GridItem>
        <GridItem colSpan={2} justifySelf="center">
          <Link href="/profiles/123" className="flex gap-2 items-center">
            <div className="relative">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <span>Jhon Doe</span>
          </Link>
        </GridItem>
      </FlexItem>
      <FlexItem
        flex={1}
        className="bg-muted/50  rounded-xl p-2 border"
        component={Flex}
        componentProps={{ direction: "col", gap: 4 }}
      >
        <FlexItem
          flex={1}
          component={Flex}
          componentProps={{ direction: "col-reverse", gap: 2 }}
        >
          {messages.toReversed().map((message) => (
            <FlexItem
              key={message.id}
              alignSelf={message.isMy ? "end" : "start"}
            >
              <Message content={message.content} isFromMe={message.isMy} />
            </FlexItem>
          ))}
          <div className="grid grid-cols-7 grid-rows-1 items-center p-4">
            <Separator className="col-span-3" />
            <span className="col-span-1 justify-self-center text-sm">Today</span>
            <Separator className="col-span-3" />
          </div>
        </FlexItem>
        <FlexItem>
          <MessageForm />
        </FlexItem>
      </FlexItem>
    </Flex>
  );
}
