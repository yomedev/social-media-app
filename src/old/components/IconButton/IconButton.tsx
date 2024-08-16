import { ButtonHTMLAttributes } from "react";
import "./IconButton.scss";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <button type="button" className="icon-button" {...rest}>
      {children}
    </button>
  );
}
