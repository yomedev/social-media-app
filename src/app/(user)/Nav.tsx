import { Badge } from "@/components/ui/badge";
import { MessageSquare, Newspaper } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="grid items-starttext-sm font-medium ">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Newspaper className="h-4 w-4" />
        Feed
      </Link>
      <Link
        href="/chats"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <MessageSquare className="h-4 w-4" />
        Chats
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
    </nav>
  );
}
