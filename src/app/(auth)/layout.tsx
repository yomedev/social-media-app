import { Poppins } from "next/font/google";
import "../globals.css";
import "./layout.scss";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <main className="main-auth">
            <section className="main-auth__left">Left</section>
            <section className="main-auth__right">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
