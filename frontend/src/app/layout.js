import { Montserrat, Chonburi, Six_Caps, Exo_2 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const chonburi = Chonburi({
  variable: "--font-chonburi",
  subsets: ["latin"],
  weight: ["400"],
});

const sixCaps = Six_Caps({
  variable: "--font-six-caps",
  subsets: ["latin"],
  weight: ["400"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata = {
  title: "Code Kalari - IIIT Kottayam Official Hackathon",
  description: "Join Code Kalari, the official hackathon by IIIT Kottayam. Connect with innovators, build groundbreaking projects, and compete with the best minds in technology.",
  keywords: ["Code Kalari", "IIIT Kottayam", "Hackathon", "Coding Competition", "Innovation", "Technology"],
  authors: [{ name: "IIIT Kottayam" }],
  creator: "IIIT Kottayam",
  publisher: "IIIT Kottayam",
  metadataBase: new URL('https://codekalari.iiittkottayam.ac.in'),
  openGraph: {
    title: "Code Kalari - IIIT Kottayam Official Hackathon",
    description: "Join Code Kalari, the official hackathon by IIIT Kottayam. Connect with innovators, build groundbreaking projects, and compete with the best minds in technology.",
    url: 'https://codekalari.iiittkottayam.ac.in',
    siteName: 'Code Kalari',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Kalari - IIIT Kottayam Official Hackathon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Code Kalari - IIIT Kottayam Official Hackathon",
    description: "Join Code Kalari, the official hackathon by IIIT Kottayam. Connect with innovators, build groundbreaking projects, and compete with the best minds in technology.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    // fallback neutral favicon (used by browsers that don't support media queries)
    icon: '/favicon-li.ico',
    shortcut: '/favicon-li.ico',
    apple: '/favicon-li.ico',
    // Provide light/dark variants — browsers that support prefers-color-scheme will pick the matching one
    other: [
      { rel: 'icon', url: '/favicon-li.ico', media: '(prefers-color-scheme: light)' },
      { rel: 'icon', url: '/favicon-da.ico', media: '(prefers-color-scheme: dark)' },
      // optional apple touch icon (iOS) — keep a single friendly image
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${chonburi.variable} ${sixCaps.variable} ${exo2.variable} antialiased font-bold`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
