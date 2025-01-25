import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../globals.css";
import RootNavbar from "./components/RootNavbar";
import { ThemeProvider } from "@/providers/theme-provder";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootNavbar />
          <main className="pt-[8vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
