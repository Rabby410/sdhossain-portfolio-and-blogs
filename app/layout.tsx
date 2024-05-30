import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";


export const metadata: Metadata = {
  title: "Shahadath Portdolio & Blogs",
  description: "Shahadath Portdolio & Blogs :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <div className="prose-xl dark:prose-invert mx-auto my-20 w-full max-w-4xl px-4 md:px-0">
          <main>
            <Header />
            {children}
          </main>
        </div></body>
    </html>
  );
}
