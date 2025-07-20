import type { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue } from 'next/font/google';
import "./globals.css";

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
        className={`${barlow.variable} ${bebas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
