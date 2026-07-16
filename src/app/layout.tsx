import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Olivia Rodrigo × LEGO',
    default: 'Olivia Rodrigo × LEGO'
  }, 
  description: "Coleção exclusiva Olivia Rodrigo x LEGO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="bg-[#F6C8D6] text-black antialised m-0 p-0 font-inter">
        <div className="pt-18">
        </div>
        {children}
      </body>
    </html>
  );
}
