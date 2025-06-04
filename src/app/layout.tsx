import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local font
// const PPMori = localFont({
//   src: [
//     {
//       path: '../../public/fonts/PPMori-Extralight.otf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PPMori-ExtralightItalic.otf',
//       weight: '300',
//       style: 'italic',
//     },
//     {
//       path: '../../public/fonts/PPMori-Regular.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PPMori-RegularItalic.otf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../../public/fonts/PPMori-SemiBold.otf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/PPMori-SemiBoldItalic.otf',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "Jonathan Koh | Software Engineer",
  description: "Personal Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={`${PPMori.className} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
