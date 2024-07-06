import Image from "next/image";
import "./User.scss";
import { ChevronDownIcon } from "../Icons";

export default function User() {
  return (
    <div className="user">
      <span className="user__name">Sarah</span>
      <Image
      className="user__avatar"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={30}
        height={30}
        alt="avatar"
        quality={100}
      />
      <ChevronDownIcon className="user__icon" />
    </div>
  );
}
