import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata = {
  title: "Code Kalari",
  description: "IIIT Kottayam Official Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-bold`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
