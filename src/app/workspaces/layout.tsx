import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../globals.css";
import WorkspaceNavbar from "./components/WorkspaceNavbar";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
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
      <body className={`${instrumentSans.className} antialiased`}>
        <WorkspaceNavbar />
        <main className="pt-[8vh]">{children}</main>
      </body>
    </html>
  );
}
