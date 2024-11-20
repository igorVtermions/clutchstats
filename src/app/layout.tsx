import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
