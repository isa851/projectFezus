import "./globals.css";
import { Footer, Header } from "@/components/any";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fezus",
  description: "IT-company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
