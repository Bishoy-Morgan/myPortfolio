import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavrbar";
import Head from "next/head";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BISHOY MORGAN",
  description: "Bishoy Morgan Services and Portfolio",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32"></link>
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
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
