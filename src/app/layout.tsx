import type { Metadata } from "next";
import { inter } from "@/ui/fonts";

import "./globals.css";



export const metadata: Metadata = {
  title: "Portifólio",
  description: "Portifolio de John Ítalo lucas lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-dark10`}>{children}</body>
    </html>
  );
}
