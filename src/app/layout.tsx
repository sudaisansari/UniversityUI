import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from "@/components/layout/Footer";
// import Header from "@/components/layout/Header";

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
    <html lang="en">
      <body >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
