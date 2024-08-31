import { formatDistanceToNow } from "date-fns";
import { Flex, FlexItem } from "../flex";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import Link from "next/link";

type ChatsListItemProps = {
  id: string;
  avatar: string;
  fullName: string;
  status: "online" | "offline";
  lastMessage: string;
  dateOfLastMessage: string;
  newMessagesCount: number;
};

export default function ChatsListItem({
  id,
  avatar,
  fullName,
  lastMessage,
  dateOfLastMessage,
  status,
  newMessagesCount,
}: ChatsListItemProps) {
  const initials = fullName
    .split(" ")
    .reduce((acc, name) => acc + name.at(0), "");

  return (
    <li>
      <Link
        href={`/chats/${id}`}
        className={`block border ${
          newMessagesCount > 0 ? "border-primary" : ""
        } rounded-xl p-4 hover:bg-gray-100`}
      >
        <Flex align="center" gap={2}>
          <FlexItem className="relative">
            <Avatar className="w-14 h-14">
              <AvatarImage
                className="object-cover"
                src={avatar}
                alt={fullName}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span
              className={`bottom-0 left-8 absolute  w-3.5 h-3.5 ${
                status === "online" ? "bg-green-400" : "bg-gray-400"
              } border-2 border-white dark:border-gray-800 rounded-full`}
            />
          </FlexItem>
          <FlexItem
            flex={1}
            component={Flex}
            componentProps={{ direction: "col" }}
          >
            <FlexItem>
              <span>{fullName}</span>
            </FlexItem>
            <FlexItem className="flex items-center gap-2">
              <span className="text-primary text-s"> {lastMessage}</span>
              <div className="bg-gray-500 h-1 w-1 rounded-full"></div>
              <span className="text-gray-500 text-xs">
                {formatDistanceToNow(new Date(dateOfLastMessage))}&nbsp;ago
              </span>
            </FlexItem>
          </FlexItem>
          {newMessagesCount ? (
            <FlexItem>
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {newMessagesCount}
              </Badge>
            </FlexItem>
          ) : null}
        </Flex>
      </Link>
    </li>
  );
}
