import type { Metadata } from "next";
import { Inter, Podkova, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter(
  { subsets: ["latin"] }
);

<link rel="icon" href="/favicon.ico" sizes="any" />

export const metadata: Metadata = {
  title: "Coletivo Casulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
