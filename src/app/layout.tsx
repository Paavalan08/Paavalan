// src/app/layout.js
// @ts-nocheck
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paavalan Varathanathan | Portfolio",
  description: "Freelance Fullstack Developer Portfolio",
};

// FIX 5: Ensure this says '{ children }' exactly
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}