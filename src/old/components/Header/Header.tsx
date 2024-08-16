import "./Header.scss";
import { Logo, User, Search } from "@/components";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="inner-header">
          <Logo />
          <div className="align-with-central-col">
            <Search />
          </div>
          <User />
        </div>
      </div>
    </header>
  );
}
