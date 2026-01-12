import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Seatify | Your Digital Gateway to the Big Screen",
  description:
    "Seatify is a modern movie ticket booking platform that lets you browse movies, select seats, and reserve tickets seamlessly—all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AppProvider>
            <Toaster />
            <NavBar />
            {children}
            <Footer />
          </AppProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}