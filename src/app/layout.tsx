import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import { TextureDefs } from "@/components/TextureDefs";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
});

const body = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Our Place — Barbecue & Cocktailhouse in Fürth",
  description:
    "American Barbecue und Cocktailhouse in einem historischen Fachwerkhaus in Fürth. Hickory-geräucherte Ribs, Smokehouse-Burger und Cocktails — Tisch reservieren.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TextureDefs />
        {children}
      </body>
    </html>
  );
}
