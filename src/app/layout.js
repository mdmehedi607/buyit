// app/layout.js
import { Poppins,Noto_Sans_Bengali } from 'next/font/google'
import { ThemeProvider } from "./Componenet/theme-provider";
import "./globals.css";
import PageLoader from './Componenet/PageLoader';




const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['latin', 'bengali'],
  weight: ['400', '700'],
  variable: '--font-bangla'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${poppins.variable} ${notoSansBengali.variable}`}>
        <ThemeProvider>
        <PageLoader/>
        {children}
          </ThemeProvider> 
        </body>
    </html>
  );
}