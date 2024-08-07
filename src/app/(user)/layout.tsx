import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Panel, SplitCol, SplitLayout, Header, Navbar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="container">
          <div style={{ padding: "10px 0 0" }}>
            <SplitLayout>
              <SplitCol width={156}>
                <aside>
                  <Navbar />
                </aside>
              </SplitCol>
              <SplitCol width={550}>
                <main>{children}</main>
              </SplitCol>
              <SplitCol width={264}>
                <Panel mode="card" rounded>
                  <aside>sdfsdfsdf</aside>
                </Panel>
              </SplitCol>
            </SplitLayout>
          </div>
        </div>
      </body>
    </html>
  );
}
