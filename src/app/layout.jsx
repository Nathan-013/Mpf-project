import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MFP - Mercado financeiro na prática",
  description: "Aprenda sobre o mercado financeiro de forma rápida e eficiente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="theme-color" content="#ECB907"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
