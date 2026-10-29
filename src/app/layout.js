import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const notoBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
});

export const metadata = {
  title: "Bangla News 24",
  description: "BBC Bangla-র সর্বশেষ খবর",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        className={`${notoBengali.className} flex min-h-screen flex-col bg-neutral-50 text-neutral-900`}
      >
        <Header />
        <Marquee/ >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}