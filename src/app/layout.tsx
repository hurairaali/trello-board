import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trello",
  description: "A Trello-style Kanban board built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" color-mode="light" data-theme="light spacing:spacing">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
