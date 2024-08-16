import NextLink, { LinkProps as NextLinkProps } from "next/link";
import "./Link.scss";

type LinkProps = NextLinkProps & {
  children: React.ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  return <NextLink className="link" href={href}>{children}</NextLink>;
}
