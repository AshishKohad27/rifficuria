"use client"
import localFont from "next/font/local";
import "./globals.css";

// Context
import { VisibilityProvider } from '@/context/artist-visibility-reducer';

// Redux
import { StoreProvider } from "@/redux/StoreProvider";

// Components
import Footer from "@/components/site/site-footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <VisibilityProvider>
            {children}
            <Footer />
          </VisibilityProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
