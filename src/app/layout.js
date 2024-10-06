import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: "Transbangla Commodities Ltd.",
  description: "Transbangla Commodities Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoCondensed.variable} font-sans`}>
      <body className="flex flex-col min-h-screen">
        <div>
          <Navbar />
        </div>
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
