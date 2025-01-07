// app/layout.tsx (ou app/layout.js si vous utilisez JavaScript)
import type { Metadata } from "next";
import Navbar from "./UI/Component/Navbar/Navbar";
import Footer from "./UI/Component/footer/footer";
import "./globals.css"; // Vos styles globaux

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}