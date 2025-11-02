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
  title: "Code Kalari",
  description: "IIIT Kottayam Official Hackathon",
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
