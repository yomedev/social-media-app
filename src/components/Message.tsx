import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { CheckCheck, Copy, Pencil, Trash } from "lucide-react";
import { Flex, FlexItem } from "./flex";

type MessageProps = {
  content: string;
  isFromMe: boolean;
};

export default function Message({ content, isFromMe = false }: MessageProps) {
  return (
    <Flex gap={2} align="center" direction={isFromMe ? "row" : "row-reverse"}>
      <span className="text-xs">9:35</span>
      <ContextMenu>
        <ContextMenuTrigger>
          <Badge
            variant="outline"
            className={cn(
              "rounded-lg text-sm px-3 py-1",
              isFromMe ? "rounded-br-none" : "rounded-bl-none"
            )}
          >
            <Flex gap={2}>
              <FlexItem flex={1}>{content}</FlexItem>
              {isFromMe && (
                <FlexItem alignSelf="end" justifySelf="end">
                  <CheckCheck className="h-3 w-3 text-primary" />
                </FlexItem>
              )}
            </Flex>
          </Badge>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" /> Copy{" "}
          </ContextMenuItem>
          <ContextMenuItem>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </ContextMenuItem>
          <ContextMenuItem>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </Flex>
  );
}
