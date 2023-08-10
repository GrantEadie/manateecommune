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
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
