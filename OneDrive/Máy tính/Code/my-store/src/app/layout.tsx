import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // <-- Import component vừa tạo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookStore - Mua sách trực tuyến",
  description: "Dự án web bán sách Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar /> {/* <-- Hiển thị Navbar ở đây */}
        <main className="min-h-screen bg-gray-50 pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}