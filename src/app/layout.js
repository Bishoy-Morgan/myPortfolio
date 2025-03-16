import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavrbar";
import Head from "next/head";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BISHOY MORGAN",
  description: "Bishoy Morgan Services and Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32"></link>
      </Head>
      <body className={`${manrope.variable} antialiased`}>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
