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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="transparent"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={`${PPMori.className} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
