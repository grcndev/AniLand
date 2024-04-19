import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anilist",
  description: "My Anilist clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.className} style={{backgroundColor: "#EDF1F5"}}>
        {children}</body>
    </html>
  );
}