import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// @ts-ignore CSS is loaded by Next.js at runtime; no TypeScript module declaration is required.
import "./globals.css";
import Footer from "../components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nica Alimurung | Front End Web Developer",
  description: "Portfolio of Nica Alimurung - Front End Web Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
