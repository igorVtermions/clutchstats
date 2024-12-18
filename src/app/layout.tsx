import Header from "@/components/Header";
import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Clucth Stats",
  description: "Clucth Stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body><Header />
      {children}
      </body>
    </html>
  );
}
