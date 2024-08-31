import { Flex, FlexItem } from "../flex";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "../ui/badge";
import ChatsListItem from "./chats-list-item";

type ChatData = {
  id: string;
  avatar: string;
  fullName: string;
  status: "online" | "offline";
  lastMessage: string;
  dateOfLastMessage: string;
  newMessagesCount: number;
};
type ChatsListProps = {
  data: ChatData[];
};

export default function ChatsList({ data }: ChatsListProps) {
  return (
    <Flex direction="col" gap={2} component="ul">
      {data.map((chat) => (
        <ChatsListItem key={chat.id} {...chat} />
      ))}
    </Flex>
  );
}

{
  /* <FlexItem
          key={chat.id}
          component={Flex}
          componentProps={{ align: "center ", gap: 2 }}
          className="border rounded-xl p-4"
        >
          <FlexItem>
            <Avatar className="w-14 h-14">
              <AvatarImage
                className="object-cover"
                src={chat.avatar}
                alt={chat.fullName}
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </FlexItem>
          <FlexItem
            flex={1}
            component={Flex}
            componentProps={{ direction: "col" }}
          >
            <FlexItem>{chat.fullName}</FlexItem>
            <FlexItem className="flex items-center gap-2">
              <span className="text-primary text-s"> {chat.lastMessage}</span>
              <div className="bg-gray-500 h-1 w-1 rounded-full"></div>
              <span className="text-gray-500 text-xs">
                {formatDistanceToNow(new Date(chat.dateOfLastMessage))}&nbsp;ago
              </span>
            </FlexItem>
          </FlexItem>
          <FlexItem>
            {chat.newMessagesCount ? (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {chat.newMessagesCount}
              </Badge>
            ) : null}
          </FlexItem>
        </FlexItem> */
}
