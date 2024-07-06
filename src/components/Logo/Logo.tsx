import { Fredoka } from "next/font/google";
import './Logo.scss'
import { LogoIcon } from "../Icons";

const fredoka = Fredoka({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["600"],
});

export default function Logo() {
  return (
    <div className="logo">
      <LogoIcon className="logo__icon" />
      <span
        className={`${fredoka.className} logo__label`}
      >
        reativo
      </span>
    </div>
  );
}
