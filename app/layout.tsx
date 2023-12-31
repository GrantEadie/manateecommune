import "./globals.css";
import type { Metadata } from "next";
import Nav from "./comps/nav";
import { overpass } from "./fonts";
import Footer from "./comps/footer";

export const metadata: Metadata = {
  title: "MANATEE COMMUNE",
  description: "Grant makes music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <div className="md:p-10 p-5 w-full flex flex-col items-center">
          <div className="2xl:w-1/2 w-full">
            <Nav />
            <div className="py-10 flex flex-col items-center w-full">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
