import type { Metadata } from "next";
import { Overpass, Roboto } from "next/font/google";
import "./globals.css";
import { AnimesProvider } from "@/context/AnimeContext";
import { Suspense } from "react";

const overpass = Overpass({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

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
      <body
        className={`${overpass.className} ${roboto.className}`}
        style={{ backgroundColor: "#EDF1F5" }}
      >
        <AnimesProvider>
          <Suspense>
        {children}
        </Suspense>
        </AnimesProvider>
      </body>
    </html>
  );
}
