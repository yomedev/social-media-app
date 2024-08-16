import Link from "next/link";
import "./Navbar.scss";
import {
  HomeIcon,
  MessageIcon,
  NotificationIcon,
  FriendsIcon,
  BookmarkIcon,
} from "@/components";

const navbarItemsInfo = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="icon" />,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: <MessageIcon className="icon"  />,
  },
  {
    label: "Friends",
    href: "/friends",
    icon: <FriendsIcon className="icon"  />,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: <NotificationIcon className="icon"  />,
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: <BookmarkIcon className="icon"  />,
  },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navbarItemsInfo.map(({ label, href, icon }) => (
          <li className="navbar__list-item" key={label}>
            <Link href={href}>
              <span>{icon}</span>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
