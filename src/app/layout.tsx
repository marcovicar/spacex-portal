import type { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-barlow',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: "SpaceX Portal",
  description: "Explore SpaceX space launches with this web app built using Next.js, GraphQL, Apollo Client, and TailwindCSS. Built with mock data to simulate a real-world experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${bebas.variable} antialiased bg-black`}
      >
        <Navbar />
        <div className="w-full bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <footer className="text-center text-white border-t border-zinc-800 py-10">
              &copy; {new Date().getFullYear()} SpaceX Portal — Made by @marcovicar
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
