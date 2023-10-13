import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSON Tree Viewer",
  description: "A JSON Viwer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/136/136525.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
