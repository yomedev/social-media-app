"use client";

import { Badge } from "@/components/ui/badge";
import { Contact, MessageSquare, Newspaper } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-starttext-sm font-medium ">
      <Link
        href="/"
        className={`flex items-center gap-3 px-3 py-2  transition-all ${
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        }  hover:text-primary`}
      >
        <Newspaper className="h-4 w-4" />
        Feed
      </Link>
      <Link
        href="/chats"
        className={`flex items-center gap-3 px-3 py-2  transition-all ${
          pathname === "/chats" ? "text-primary" : "text-muted-foreground"
        }  hover:text-primary`}
      >
        <MessageSquare className="h-4 w-4" />
        Chats
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href="/friends"
        className={`flex items-center gap-3 px-3 py-2  transition-all ${
          pathname === "/friends" ? "text-primary" : "text-muted-foreground"
        }  hover:text-primary`}
      >
        <Contact className="h-4 w-4" />
        Friends
      </Link>
    </nav>
  );
}
