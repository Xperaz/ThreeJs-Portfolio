import { Allison, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allison = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
});

export const metadata = {
  title: "Azedine Ouhadou",
  description: "Azedine Ouhadou portfolio",
  keywords:
    "azedine ouhadou, portfolio, developer, front-end, Front-End Developer, User Interface Design, software engineer",
  url: "https://azedineouhadou.tech/",
  image: "https://azedineouhadou.tech/personal/profile.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${allison.variable} font-normal text-md`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
